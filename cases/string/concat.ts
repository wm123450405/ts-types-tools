
import type { Equal, Expect } from '@type-challenges/utils';
import type { PadLeft, PadRight, RepeatString } from '../../index';

export type Cases = [
	Expect<Equal<PadLeft<'5', 3, '0'> ,  '005'>>,
	Expect<Equal<PadLeft<'5', 3> ,  '  5'>>,
	Expect<Equal<PadLeft<'555', 3> ,  '555'>>,
	Expect<Equal<PadLeft<'55555', 3> ,  '55555'>>,
	Expect<Equal<PadRight<'5', 3, '0'> ,  '500'>>,
	Expect<Equal<PadRight<'5', 3> ,  '5  '>>,
	Expect<Equal<PadRight<'555', 3> ,  '555'>>,
	Expect<Equal<PadRight<'55555', 3> ,  '55555'>>,
	Expect<Equal<RepeatString<'5', 3> ,  '555'>>
];
			