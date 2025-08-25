import fs, { type PathLike } from 'node:fs';
import path from 'node:path';

const src = 'src'; 
const cases = 'cases';
const docs = 'docs'

const functions = /\/\*\*\s*?[\r\n]*?(?<notes>(.+?[\r\n]*)+?)\*\/[\s\r\n]*?((?<exports>export)\s+?)?type\s+?(?<declares>.+?)\s*?=[^=]*?[\r\n]+?/ig;
const modules = /(\/\*\*\s*?[\r\n]*?(?<notes>(.+?[\r\n]*)+?)\*\/[\s\r\n]*?)?export\s+\*\s+from\s+['"]\.\/(?<module>.+?)['"];?/ig;
const notesSpliter = /(^|\s*[\r\n]+)\s*\*\s*|\s*[\r\n]+\s*$/ig;

const languages = [ 'zh', 'en' ];

const progress = { total: 5, current: 0 };

const showProgress = () => { 
	console.log(`${progress.current}/${progress.total}`);
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
				const examples = match.groups?.['notes']?.split(notesSpliter)?.filter(line => line && line.startsWith('@example'))?.map(line => line.replace('@example', ''));
				const type = match.groups?.['declares']?.split(/</ig)?.[0];
				if (exports && examples && type) {
					types.push(type);
					allExamples.push(...examples.map(example => example.split('//')));
				}
			}
			await fs.promises.writeFile(path.resolve(cases, classify, file), `
import type { Equal, Expect } from '@type-challenges/utils';
import type { ${ types.join(', ') } } from '../../index';

export type Cases = [${allExamples.map(example => `	Expect<Equal<${example[0]}, ${example[1]}>>`).join(',\r\n')}];
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
				console.log(language, match.groups?.['notes']?.split(notesSpliter));
				const desc = match.groups?.['notes']?.split(notesSpliter)?.filter(line => line && line.startsWith(`@${language}`))?.map(line => line.replace(`@${language}`, '').trim());
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
			const types = [];
			let match = null;
			while ((match = functions.exec(data)) != null) {
				const exports = match.groups?.['exports'];
				const notes = match.groups?.['notes'];
				const type = match.groups?.['declares']?.split(/</ig)?.[0];
				if (exports && notes && type) {
					types.push(type);
				}
			}
			await fs.promises.writeFile(path.resolve(docs, language, classify, file.replace('.ts', '.md')), `

			`);
		}
		progress.current ++;
		showProgress();
	})())),
]);


// import type { Equal, Expect } from '@type-challenges/utils'
// import type * as TypesTools from '.'

// type c = TypesTools.Substring<'abcdefg', 2, 4>

// export type Cases = [
// 	Expect<Equal<TypesTools.Not<true>, false>>,
// 	Expect<Equal<TypesTools.Not<false>, true>>,
// 	Expect<Equal<TypesTools.ReverseString<'abc'>, 'cba'>>,
// 	Expect<Equal<TypesTools.ReverseArray<[1, 2]>, [2, 1]>>,
// 	Expect<Equal<TypesTools.Reverse<'abc'>, 'cba'>>,
// 	Expect<Equal<TypesTools.Reverse<[1, 2]>, [2, 1]>>,
// 	Expect<Equal<TypesTools.StringToNumber<'123'>, 123>>,
// 	Expect<Equal<TypesTools.NumberToString<123>, '123'>>,
// 	Expect<Equal<TypesTools.IsInt<123>, true>>,
// 	Expect<Equal<TypesTools.IsInt<123.1>, false>>,
// 	Expect<Equal<TypesTools.AsInt<123>, 123>>,
// 	Expect<Equal<TypesTools.AsInt<123.1>, never>>,
// 	Expect<Equal<TypesTools.IsUInt<123>, true>>,
// 	Expect<Equal<TypesTools.IsUInt<-123>, false>>,
// 	Expect<Equal<TypesTools.IsUInt<123.1>, false>>,
// 	Expect<Equal<TypesTools.AsUInt<123>, 123>>,
// 	Expect<Equal<TypesTools.AsUInt<-123>, never>>,
// 	Expect<Equal<TypesTools.AsUInt<123.1>, never>>,
// 	Expect<Equal<TypesTools.IntEnumerate<5>, 0 | 1 | 2 | 3 | 4>>,
// 	Expect<Equal<TypesTools.IntEnumerate<0>, never>>,
// 	Expect<Equal<TypesTools.IntEnumerate<-1>, never>>,
// 	Expect<Equal<TypesTools.IntEnumerate<1.1>, never>>,
// 	Expect<Equal<TypesTools.IntRange<0, 3>, 0 | 1 | 2>>,
// 	Expect<Equal<TypesTools.IntRange<3, 5>, 3 | 4>>,
// 	Expect<Equal<TypesTools.IntRange<5, 5>, never>>,
// 	Expect<Equal<TypesTools.IntRange<5, 3>, never>>,
// 	Expect<Equal<TypesTools.IntRange<-5, 5>, never>>,
// 	Expect<Equal<TypesTools.SignalPart<-1.5>, -1>>,
// 	Expect<Equal<TypesTools.SignalPart<1>, 1>>,
// 	Expect<Equal<TypesTools.SignalPart<0>, 1>>,
// 	Expect<Equal<TypesTools.IntPart<-1.5>, -1>>,
// 	Expect<Equal<TypesTools.IntPart<1.5>, 1>>,
// 	Expect<Equal<TypesTools.IntPart<-1>, -1>>,
// 	Expect<Equal<TypesTools.DecimalPart<-1.5>, 0.5>>,
// 	Expect<Equal<TypesTools.DecimalPart<1.5>, 0.5>>,
// 	Expect<Equal<TypesTools.DecimalPart<-1>, 0>>,
// 	Expect<Equal<TypesTools.IsNegative<-1>, true>>,
// 	Expect<Equal<TypesTools.IsNegative<1>, false>>,
// 	Expect<Equal<TypesTools.IsNegative<0>, false>>,
// 	Expect<Equal<TypesTools.IsPositive<-1>, false>>,
// 	Expect<Equal<TypesTools.IsPositive<1>, true>>,
// 	Expect<Equal<TypesTools.IsPositive<0>, false>>,
// 	Expect<Equal<TypesTools.AddOne<0>, 1>>,
// 	Expect<Equal<TypesTools.AddOne<1>, 2>>,
// 	Expect<Equal<TypesTools.AddOne<-1>, never>>,
// 	Expect<Equal<TypesTools.AddOne<1.2>, never>>,
// 	Expect<Equal<TypesTools.MinusOne<1>, 0>>,
// 	Expect<Equal<TypesTools.MinusOne<10>, 9>>,
// 	Expect<Equal<TypesTools.MinusOne<0>, never>>,
// 	Expect<Equal<TypesTools.MinusOne<1.5>, never>>,
// 	Expect<Equal<TypesTools.IntList<0, 3>, 0 | 1 | 2>>,
// 	Expect<Equal<TypesTools.IntList<3, 5>, 3 | 4 | 5 | 6 | 7 >>,
// 	Expect<Equal<TypesTools.IntList<5, 3>, 5 | 6 | 7>>,
// 	Expect<Equal<TypesTools.IntList<-5, 5>, never>>,
// 	Expect<Equal<TypesTools.ArrayLength<[1,2,3]>, 3>>,
// 	Expect<Equal<TypesTools.ArrayLength<any[]>, number>>,
// 	Expect<Equal<TypesTools.StringLength<'123'>, 3>>,
// 	Expect<Equal<TypesTools.StringLength<string>, number>>,
// 	Expect<Equal<TypesTools.TakeArray<[1, 2, 3], 2>, [1, 2]>>,
// 	Expect<Equal<TypesTools.SkipArray<[1, 2, 3], 2>, [3]>>,
// 	Expect<Equal<TypesTools.Slice<[1, 2, 3, 4, 5], 1, 3>, [2, 3]>>,
// 	Expect<Equal<TypesTools.TakeString<'abcdefg', 3>, 'abc'>>,
// 	Expect<Equal<TypesTools.SkipString<'abcdefg', 3>, 'defg'>>,
// 	Expect<Equal<TypesTools.Substring<'abcdefg', 2, 4>, 'cd'>>,
// 	Expect<Equal<TypesTools.Abs<-1>, 1>>,
// 	Expect<Equal<TypesTools.Abs<1>, 1>>,
// 	Expect<Equal<TypesTools.Abs<0>, 0>>,
// 	Expect<Equal<TypesTools.Negative<-2>, 2>>,
// 	Expect<Equal<TypesTools.Negative<2>, -2>>,
// 	Expect<Equal<TypesTools.Negative<0>, 0>>,
// 	Expect<Equal<TypesTools.GreatThen<5, 2>, true>>,
// 	Expect<Equal<TypesTools.GreatThen<2, 5>, false>>,
// 	Expect<Equal<TypesTools.GreatThen<5, 5>, false>>,
// 	Expect<Equal<TypesTools.GreatThenOrEquals<5, 2>, true>>,
// 	Expect<Equal<TypesTools.GreatThenOrEquals<5, 5>, true>>,
// 	Expect<Equal<TypesTools.GreatThenOrEquals<5, 6>, false>>,
// 	Expect<Equal<TypesTools.LessThen<5, 2>, false>>,
// 	Expect<Equal<TypesTools.LessThen<2, 5>, true>>,
// 	Expect<Equal<TypesTools.LessThen<5, 5>, false>>,
// 	Expect<Equal<TypesTools.LessThenOrEquals<5, 2>, false>>,
// 	Expect<Equal<TypesTools.LessThenOrEquals<5, 5>, true>>,
// 	Expect<Equal<TypesTools.LessThenOrEquals<5, 6>, true>>,
// 	Expect<Equal<TypesTools.Equals<5, 5>, true>>,
// 	Expect<Equal<TypesTools.Equals<5, 2>, false>>,
// 	Expect<Equal<TypesTools.NotEquals<5, 5>, false>>,
// 	Expect<Equal<TypesTools.NotEquals<5, 2>, true>>,
// 	Expect<Equal<TypesTools.PadLeft<'5', 3, '0'>, '005'>>,
// 	Expect<Equal<TypesTools.PadLeft<'5', 3>, '  5'>>,
// 	Expect<Equal<TypesTools.PadLeft<'555', 3>, '555'>>,
// 	Expect<Equal<TypesTools.PadLeft<'55555', 3>, '55555'>>,
// 	Expect<Equal<TypesTools.PadRight<'5', 3, '0'>, '500'>>,
// 	Expect<Equal<TypesTools.PadRight<'5', 3>, '5  '>>,
// 	Expect<Equal<TypesTools.PadRight<'555', 3>, '555'>>,
// 	Expect<Equal<TypesTools.PadRight<'55555', 3>, '55555'>>,
// 	Expect<Equal<TypesTools.TrimLeft<' 123'>, '123'>>,
// 	Expect<Equal<TypesTools.TrimLeft<'0123', '0'>, '123'>>,
// 	Expect<Equal<TypesTools.TrimLeft<'0123'>, '0123'>>,
// 	Expect<Equal<TypesTools.TrimRight<'123 '>, '123'>>,
// 	Expect<Equal<TypesTools.TrimRight<'1230', '0'>, '123'>>,
// 	Expect<Equal<TypesTools.TrimRight<'1230'>, '1230'>>,
// 	Expect<Equal<TypesTools.DefaultIfEmpty<'123', '234'>, '123'>>,
// 	Expect<Equal<TypesTools.DefaultIfEmpty<'', '234'>, '234'>>,
// 	Expect<Equal<TypesTools.AddInt<0, 0>, 0>>,
// 	Expect<Equal<TypesTools.AddInt<10, 20>, 30>>,
// 	Expect<Equal<TypesTools.AddInt<5, 550>, 555>>,
// 	Expect<Equal<TypesTools.MinusInt<0, 0>, 0>>,
// 	Expect<Equal<TypesTools.MinusInt<10, 20>, -10>>,
// 	Expect<Equal<TypesTools.MinusInt<550, 5>, 545>>,
// 	Expect<Equal<TypesTools.ArrayToUnion<[1, 2, 3]>, 1 | 2 | 3>>,
// 	Expect<Equal<TypesTools.ArrayToUnion<[ '1', '2', '3' ]>, '1' | '2' | '3'>>,
// 	Expect<Equal<TypesTools.ArrayToUnion<[ boolean, number, false, null ]>, boolean | number | null>>,
// 	Expect<Equal<TypesTools.ArrayToUnion<[ true, false ]>, boolean>>,
// 	Expect<Equal<TypesTools.Max<1, 23>, 23>>,
// 	Expect<Equal<TypesTools.Max<[1, 23]>, 23>>,
// 	Expect<Equal<TypesTools.Max<[1, 23, 5]>, 23>>,
// 	Expect<Equal<TypesTools.Max<[]>, never>>,
// 	Expect<Equal<TypesTools.Min<1, 23>, 1>>,
// 	Expect<Equal<TypesTools.Min<[1, 23]>, 1>>,
// 	Expect<Equal<TypesTools.Min<[8, 23, 5]>, 5>>,
// 	Expect<Equal<TypesTools.Min<[]>, never>>,
// 	Expect<Equal<TypesTools.GenerateArray<any, 2>, [any, any]>>,
// 	Expect<Equal<TypesTools.GenerateArray<any, 0>, []>>,
// 	Expect<Equal<TypesTools.GenerateArray<boolean, 1>, [boolean]>>,
// ];