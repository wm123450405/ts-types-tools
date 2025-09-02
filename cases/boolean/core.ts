
import type { Equal, Expect } from '@type-challenges/utils';
import type { Boolean, Not, Or, And } from '../../index';

export type Cases = [
	Expect<Equal<Boolean<true> ,  true>>,
	Expect<Equal<Boolean<false> ,  false>>,
	Expect<Equal<Boolean<''> ,  false>>,
	Expect<Equal<Boolean<0> ,  false>>,
	Expect<Equal<Boolean<undefined> ,  false>>,
	Expect<Equal<Boolean<null> ,  false>>,
	Expect<Equal<Boolean<1> ,  true>>,
	Expect<Equal<Boolean<'0'> ,  true>>,
	Expect<Equal<Boolean<{}> ,  true>>,
	Expect<Equal<Boolean<[]> ,  true>>,
	Expect<Equal<Not<true> ,  false>>,
	Expect<Equal<Not<false> ,  true>>,
	Expect<Equal<Or<true, true> ,  true>>,
	Expect<Equal<Or<true, false> ,  true>>,
	Expect<Equal<Or<false, true> ,  true>>,
	Expect<Equal<Or<false, false> ,  false>>,
	Expect<Equal<Or<[true, true, true]> ,  true>>,
	Expect<Equal<Or<[false, true, false]> ,  true>>,
	Expect<Equal<Or<[false, false, false]> ,  false>>,
	Expect<Equal<And<true, true> ,  true>>,
	Expect<Equal<And<true, false> ,  false>>,
	Expect<Equal<And<false, true> ,  false>>,
	Expect<Equal<And<false, false> ,  false>>,
	Expect<Equal<And<[true, true, true]> ,  true>>,
	Expect<Equal<And<[false, true, false]> ,  false>>,
	Expect<Equal<And<[false, false, false]> ,  false>>
];
			