
import type { Equal, Expect } from '@type-challenges/utils';
import type { Reverse, Length, IsEmpty } from '../../index';

export type Cases = [
	Expect<Equal<Reverse<'abc'> ,  'cba'>>,
	Expect<Equal<Reverse<[1, 2]> ,  [2, 1]>>,
	Expect<Equal<Length<'abc'> ,  3>>,
	Expect<Equal<Length<[1, 2]> ,  2>>,
	Expect<Equal<IsEmpty<undefined> ,  true>>,
	Expect<Equal<IsEmpty<null> ,  true>>,
	Expect<Equal<IsEmpty<''> ,  true>>,
	Expect<Equal<IsEmpty<[]> ,  true>>,
	Expect<Equal<IsEmpty<{}> ,  true>>,
	Expect<Equal<IsEmpty<'fads'> ,  false>>,
	Expect<Equal<IsEmpty<[1]> ,  false>>,
	Expect<Equal<IsEmpty<{a:1}> ,  false>>
];
			