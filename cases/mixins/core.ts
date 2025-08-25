
import type { Equal, Expect } from '@type-challenges/utils';
import type { Reverse } from '../../index';

export type Cases = [	Expect<Equal< Reverse<'abc'> ,  'cba'>>,
	Expect<Equal< Reverse<[1, 2]> ,  [2, 1]
 >>];
			