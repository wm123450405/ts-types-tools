
import type { Equal, Expect } from '@type-challenges/utils';
import type { ArrayToUnion, UnionToArray, UnionToIntersection } from '../../index';

export type Cases = [
	Expect<Equal<ArrayToUnion<[1, 2, 3]> ,  1 | 2 | 3>>,
	Expect<Equal<ArrayToUnion<[ '1', '2', '3' ]> ,  '1' | '2' | '3'>>,
	Expect<Equal<ArrayToUnion<[ boolean, number, false, null ]> ,  boolean | number | null>>,
	Expect<Equal<ArrayToUnion<[ true, false ]> ,  boolean>>,
	Expect<Equal<UnionToArray<1 | 2> ,  [1, 2] | [2, 1]>>,
	Expect<Equal<UnionToArray<1 | 2 | 3> ,  [1, 2, 3] | [1, 3, 2] | [2, 1, 3] | [2, 3, 1] | [3, 1, 2] | [3, 2, 1]>>,
	Expect<Equal<UnionToIntersection< { a: number } | { b: 1 }> ,  { a: number } & { b: 1 }>>
];
			