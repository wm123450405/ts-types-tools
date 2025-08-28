
import type { Equal, Expect } from '@type-challenges/utils';
import type { Reverse, Length } from '../../index';

export type Cases = [
	Expect<Equal<Reverse<'abc'> ,  'cba'>>,
	Expect<Equal<Reverse<[1, 2]> ,  [2, 1]>>,
	Expect<Equal<Length<'abc'> ,  3>>,
	Expect<Equal<Length<[1, 2]> ,  2>>
];
			