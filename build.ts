import fs, { type PathLike } from 'node:fs';
import path from 'node:path';

const src = 'src'; 
const cases = 'cases';
const docs = 'docs'

const functions = /\/\*\*\s*(.+?)\s*\*\/\s*[\r\n]+\s*export\s+type\s+(.+?)\s*(?==$|=\s*[\r\n]+)/igm;

const mkdir = async (p: PathLike) => {
	if (!(await fs.promises.exists(p))) {
		fs.promises.mkdir(p);
	}
};

await Promise.all([
	mkdir(path.resolve(cases)),
	mkdir(path.resolve(docs)),
]);

await Promise.all((await fs.promises.readdir(path.resolve(src))).flatMap(classify => {
	return [
		(async () => {
			await mkdir(path.resolve(cases, classify));
			const files = await fs.promises.readdir(path.resolve(src, classify));
			await Promise.all(files.map(file => (async () => {
				const data = (await fs.promises.readFile(path.resolve(src, classify, file))).toString();
				if (file === 'index.ts') {
					await fs.promises.writeFile(path.resolve(cases, classify, file), data.replaceAll(/export\s+\*/ig, 'import'));
				} else {
					const types = [];
					const allExamples = [];
					let match = null;
					while ((match = functions.exec(data)) != null) {
						console.log(match[1], match[2])
						const examples = match[1]?.split(/\s*[\r\n]+\s*\*\s*/igm)?.filter(line => line.startsWith('@example'))?.map(line => line.replace('@example', ''));
						const type = match[2]?.split(/</ig)?.[0];
						if (examples && type) {
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
			})()));
		})(),
		(async () => {
			
		})(),
	]
}));


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