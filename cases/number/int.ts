
import type { Equal, Expect } from '@type-challenges/utils';
import type { IsInt, AsInt, IsUInt, AsUInt, IntEnumerate, IntRange, AddOne, MinusOne, IntList, AddInt, MinusInt } from '../../index';

export type Cases = [
	Expect<Equal<IsInt<123> ,  true>>,
	Expect<Equal<IsInt<123.1> ,  false>>,
	Expect<Equal<AsInt<123> ,  123>>,
	Expect<Equal<AsInt<123.1> ,  never>>,
	Expect<Equal<IsUInt<123> ,  true>>,
	Expect<Equal<IsUInt<-123> ,  false>>,
	Expect<Equal<IsUInt<123.1> ,  false>>,
	Expect<Equal<AsUInt<123> ,  123>>,
	Expect<Equal<AsUInt<-123> ,  never>>,
	Expect<Equal<AsUInt<123.1> ,  never>>,
	Expect<Equal<IntEnumerate<5> ,  0 | 1 | 2 | 3 | 4>>,
	Expect<Equal<IntEnumerate<0> ,  never>>,
	Expect<Equal<IntEnumerate<-1> ,  never>>,
	Expect<Equal<IntEnumerate<1.1> ,  never>>,
	Expect<Equal<IntRange<0, 3> ,  0 | 1 | 2>>,
	Expect<Equal<IntRange<3, 5> ,  3 | 4>>,
	Expect<Equal<IntRange<5, 5> ,  never>>,
	Expect<Equal<IntRange<5, 3> ,  never>>,
	Expect<Equal<IntRange<-5, 5> ,  never>>,
	Expect<Equal<AddOne<0> ,  1>>,
	Expect<Equal<AddOne<1> ,  2>>,
	Expect<Equal<AddOne<-1> ,  never>>,
	Expect<Equal<AddOne<1.2> ,  never>>,
	Expect<Equal<MinusOne<1> ,  0>>,
	Expect<Equal<MinusOne<10> ,  9>>,
	Expect<Equal<MinusOne<0> ,  never>>,
	Expect<Equal<MinusOne<1.5> ,  never>>,
	Expect<Equal<IntList<0, 3> ,  0 | 1 | 2>>,
	Expect<Equal<IntList<3, 5> ,  3 | 4 | 5 | 6 | 7>>,
	Expect<Equal<IntList<5, 3> ,  5 | 6 | 7>>,
	Expect<Equal<IntList<-5, 5> ,  never>>,
	Expect<Equal<AddInt<0, 0> ,  0>>,
	Expect<Equal<AddInt<10, 20> ,  30>>,
	Expect<Equal<AddInt<5, 550> ,  555>>,
	Expect<Equal<MinusInt<0, 0> ,  0>>,
	Expect<Equal<MinusInt<10, 20> ,  -10>>,
	Expect<Equal<MinusInt<550, 5> ,  545>>
];
			