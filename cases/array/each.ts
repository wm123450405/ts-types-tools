
import type { Equal, Expect } from '@type-challenges/utils';
import type { ArrayIncludes, ArraySome, ArrayEvery, ArrayFindIndex, ArrayFindLastIndex, ArrayIndexOf, ArrayLastIndexOf } from '../../index';

export type Cases = [
	Expect<Equal<ArrayIncludes<[1, 2, 3], 2> ,  true>>,
	Expect<Equal<ArrayIncludes<[1, 2, 3], 4> ,  false>>,
	Expect<Equal<ArraySome<[1, 2, 3], (((v: 2) => true) & ((v: 1 | 3) => false))> ,  true>>,
	Expect<Equal<ArraySome<[3, 3, 3], (((v: 2) => true) & ((v: 1 | 3) => false))> ,  false>>,
	Expect<Equal<ArrayEvery<[1, 2, 3], (((v: 2) => true) & ((v: 1 | 3) => false))> ,  false>>,
	Expect<Equal<ArrayEvery<[2, 2, 2], (((v: 2) => true) & ((v: 1 | 3) => false))> ,  true>>,
	Expect<Equal<ArrayFindIndex<[1, 2, 3], (((v: 2) => true) & ((v: 1 | 3) => false))> ,  1>>,
	Expect<Equal<ArrayFindIndex<[2, 2, 2], (((v: 2) => true) & ((v: 1 | 3) => false))> ,  0>>,
	Expect<Equal<ArrayFindLastIndex<[1, 2, 3], (((v: 2) => true) & ((v: 1 | 3) => false))> ,  1>>,
	Expect<Equal<ArrayFindLastIndex<[2, 2, 2], (((v: 2) => true) & ((v: 1 | 3) => false))> ,  2>>,
	Expect<Equal<ArrayIndexOf<[1, 2, 3], 2> ,  1>>,
	Expect<Equal<ArrayIndexOf<[2, 2, 2], 2> ,  0>>,
	Expect<Equal<ArrayLastIndexOf<[1, 2, 3], 2> ,  1>>,
	Expect<Equal<ArrayLastIndexOf<[2, 2, 2], 2> ,  2>>
];
			