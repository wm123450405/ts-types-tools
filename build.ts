import fs, { type PathLike } from 'node:fs';
import path from 'node:path';

const src = 'src'; 
const cases = 'cases';
const docs = 'docs'

const functions = /\/\*\*\s*?[\r\n]*?(?<notes>(.+?[\r\n]*)+?)\*\/[\s\r\n]*?((?<exports>export)\s+?)?type\s+?(?<declares>.+?)\s*?=[^=]*?[\r\n]+?/ig;
const modules = /(\/\*\*\s*?[\r\n]*?(?<notes>(.+?[\r\n]*)+?)\*\/[\s\r\n]*?)?export\s+\*\s+from\s+['"]\.\/(?<module>.+?)['"];?/ig;

const languages = [ 'zh', 'en' ];

const progress = { total: 5, current: 0 };

const showProgress = () => { 
	console.log(`${progress.current}/${progress.total}`);
};

const findNotes = (content: string | undefined, tag: string) => { 
	if (content) {
		const reg = new RegExp(`\\*\\s+@${tag}\\s*(?<notes>[^]+?)(?=\\*\\s+@|$)`, 'ig');
		let match = null;
		const result = [];
		while ((match = reg.exec(content)) != null) {
			const item = match.groups?.['notes']?.trim();
			if (item) {
				result.push(item);
			}
		}
		return result;
	} else {
		return [];
	}
};

const mkdir = async (p: PathLike) => {
	if (!(await fs.promises.exists(p))) {
		fs.promises.mkdir(p);
	}
};

await Promise.all([
	mkdir(path.resolve(cases)),
	mkdir(path.resolve(docs)),
]);
progress.current ++;
showProgress();

await Promise.all(languages.map(language => mkdir(path.resolve(docs, language))));
progress.current ++;
showProgress();

const datas: { classify: string, file: string, data: string }[] = [];

const classifies = await fs.promises.readdir(path.resolve(src));

progress.total += classifies.length;
progress.current ++;
showProgress();

await Promise.all(classifies.map(classify => (async () => {
	await Promise.all([
		mkdir(path.resolve(cases, classify)),
		...languages.map(language => mkdir(path.resolve(docs, language, classify))),
	]);
	const files = await fs.promises.readdir(path.resolve(src, classify));
	progress.total += files.length;
	progress.current ++;
	showProgress();
	await Promise.all(files.map(file => (async () => { 
		const data = await fs.promises.readFile(path.resolve(src, classify, file), 'utf-8');
		datas.push({
			classify,
			file,
			data,
		});
		progress.current ++;
		showProgress();
	})()));
})()))

progress.total += datas.length * (1 + languages.length);
progress.current ++;
showProgress();

await Promise.all([
	...datas.map(({ classify, file, data }) => (async () => {
		// console.log(`read file ${src}/${classify}/${file}`);
		if (file === 'index.ts') {
			const subModules: string[] = [];
			let match = null;
			while ((match = modules.exec(data)) != null) {
				const module = match.groups?.['module'];
				if (module) {
					subModules.push(module);
				}
			}
			if (subModules.length) {
				await fs.promises.writeFile(path.resolve(cases, classify, file), `
${subModules.map(module => `
import './${module}';	
`).join('\r\n')}
				`);
			}
		} else {
			const types: string[] = [];
			const allExamples: string[][] = [];
			let match = null;
			while ((match = functions.exec(data)) != null) {
				// console.log('match notes', match.groups?.['notes'], 'match declares', match.groups?.['declares'])
				const exports = match.groups?.['exports'];
				// const examples = match.groups?.['notes']?.split(notesSpliter)?.filter(line => line && line.startsWith('@example'))?.map(line => line.replace('@example', ''));
				const examples = findNotes(match.groups?.['notes'], 'example');
				const type = match.groups?.['declares']?.split(/</ig)?.[0];
				if (exports && examples?.length && type) {
					types.push(type);
					allExamples.push(...examples.map(example => example.split('//')));
				}
			}
			await fs.promises.writeFile(path.resolve(cases, classify, file), `
import type { Equal, Expect } from '@type-challenges/utils';
import type { ${ types.join(', ') } } from '../../index';

export type Cases = [
${allExamples.map(example => `	Expect<Equal<${example[0]}, ${example[1]}>>`).join(',\r\n')}
];
			`);
		}
		progress.current ++;
		showProgress();
	})()),
	...datas.flatMap(({ classify, file, data}) => languages.map(language => (async () => {
		if (file === 'index.ts') {
			const subModules: { desc: string, module: string }[] = [];
			let match = null;
			while ((match = modules.exec(data)) != null) {
				const desc = findNotes(match.groups?.['notes'], language);
				// const desc = match.groups?.['notes']?.split(notesSpliter)?.filter(line => line && line.startsWith(`@${language}`))?.map(line => line.replace(`@${language}`, '').trim());
				const module = match.groups?.['module'];
				if (module) {
					subModules.push({ desc: desc?.length ? desc.join('; ') : module, module });
				}
			}
			if (subModules.length) {
				await fs.promises.writeFile(path.resolve(docs, language, classify, file.replace('.ts', '.md')), `
${subModules.map(({ desc, module }) => `
## [${desc}](./${module}.md)
`).join('')}
				`);
			}
		} else {
			const types: { type: string; declares: string[], summary?: string, desc?: string, examples?: string[] }[] = [];
			let match = null;
			while ((match = functions.exec(data)) != null) {
				const exports = match.groups?.['exports'];
				const notes = match.groups?.['notes'];
				// const examples = notes?.split(notesSpliter)?.filter(line => line && line.startsWith('@example'))?.map(line => line.replace('@example', ''));
				const examples = findNotes(notes, 'example');
				const usages = findNotes(notes, 'usage');
				const declares = usages?.length ? usages : [match.groups?.['declares']?.replaceAll(/\w+?[0-9a-zA-Z]*?\s+extends\s+/ig, '')?.replaceAll(/readonly\s+/ig, '')].filter(d => !!d) as string[];
				const type = declares?.[0]?.split(/</ig)?.[0];
				const desc = findNotes(notes, language).join('\r\n').split('\r\n');
				// const desc = notes?.split(notesSpliter)?.filter(line => line && line.startsWith(`@${language}`))?.map(line => line.replace(`@${language}`, '').trim());
				console.log(language, exports, type, declares, desc, examples);
				if (exports && declares && type) {
					types.push({
						type,
						examples,
						declares,
						summary: desc?.length ? desc[0]?.replaceAll(/\.$/ig, '') : type,
						desc: (desc?.length ?? 0) > 1 ? desc.slice(1).join('\r\n') : '',
					});
				}
			}
			await fs.promises.writeFile(path.resolve(docs, language, classify, file.replace('.ts', '.md')), types.map(({ declares, summary, desc, examples }) => `
### ${summary} ${declares.map(d => `\`${d}\``).join(' ')}
${desc}

${examples ? `\`\`\` typescript
${examples.join('\r\n')}
\`\`\`` : ''}

			`));
		}
		progress.current ++;
		showProgress();
	})())),
]);


progress.current ++;
showProgress();