
import type { Equal, Expect } from '@type-challenges/utils';
import type { ArrayToUnion } from '../../index';

export type Cases = [	Expect<Equal< ArrayToUnion<[1, 2, 3]> ,  1 | 2 | 3>>,
	Expect<Equal< ArrayToUnion<[ '1', '2', '3' ]> ,  '1' | '2' | '3'>>,
	Expect<Equal< ArrayToUnion<[ boolean, number, false, null ]> ,  boolean | number | null>>,
	Expect<Equal< ArrayToUnion<[ true, false ]> ,  boolean
 >>];
					