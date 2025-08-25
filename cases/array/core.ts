
import type { Equal, Expect } from '@type-challenges/utils';
import type { ReverseArray, ArrayLength, TakeArray, SkipArray, Slice, FillLeft, FillRight, GenerateArray } from '../../index';

export type Cases = [
	Expect<Equal<ReverseArray<[1, 2]> ,  [2, 1]>>,
	Expect<Equal<ArrayLength<[1,2,3]> ,  3>>,
	Expect<Equal<ArrayLength<unknown[]> ,  number>>,
	Expect<Equal<TakeArray<[1, 2, 3], 2> ,  [1, 2]>>,
	Expect<Equal<SkipArray<[1, 2, 3], 2> ,  [3]>>,
	Expect<Equal<Slice<[1, 2, 3, 4, 5], 1, 3> ,  [2, 3]>>,
	Expect<Equal<FillLeft<[1, 2], 5, 0> ,  [0, 0, 0, 1, 2]>>,
	Expect<Equal<FillRight<[1, 2], 5, 0> ,  [1, 2, 0, 0, 0]>>,
	Expect<Equal<GenerateArray<unknown, 2> ,  [unknown, unknown]>>,
	Expect<Equal<GenerateArray<unknown, 0> ,  []>>,
	Expect<Equal<GenerateArray<boolean, 1> ,  [boolean]>>
];
			