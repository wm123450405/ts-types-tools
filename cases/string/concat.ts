
import type { Equal, Expect } from '@type-challenges/utils';
import type { TakeString, SkipString, Substring, PadLeft, PadRight, TrimLeft, TrimRight } from '../../index';

export type Cases = [
	Expect<Equal<TakeString<'abcdefg', 3> ,  'abc'>>,
	Expect<Equal<SkipString<'abcdefg', 3> ,  'defg'>>,
	Expect<Equal<Substring<'abcdefg', 2, 4> ,  'cd'>>,
	Expect<Equal<PadLeft<'5', 3, '0'> ,  '005'>>,
	Expect<Equal<PadLeft<'5', 3> ,  '  5'>>,
	Expect<Equal<PadLeft<'555', 3> ,  '555'>>,
	Expect<Equal<PadLeft<'55555', 3> ,  '55555'>>,
	Expect<Equal<PadRight<'5', 3, '0'> ,  '500'>>,
	Expect<Equal<PadRight<'5', 3> ,  '5  '>>,
	Expect<Equal<PadRight<'555', 3> ,  '555'>>,
	Expect<Equal<PadRight<'55555', 3> ,  '55555'>>,
	Expect<Equal<TrimLeft<' 123'> ,  '123'>>,
	Expect<Equal<TrimLeft<'0123', '0'> ,  '123'>>,
	Expect<Equal<TrimLeft<'0123'> ,  '0123'>>,
	Expect<Equal<TrimRight<'123 '> ,  '123'>>,
	Expect<Equal<TrimRight<'1230', '0'> ,  '123'>>,
	Expect<Equal<TrimRight<'1230'> ,  '1230'>>
];
			