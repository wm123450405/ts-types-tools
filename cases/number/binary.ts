
import type { Equal, Expect } from '@type-challenges/utils';
import type { Binary, NumberToBinary } from '../../index';

export type Cases = [
	Expect<Equal<Binary ,  [boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean]>>,
	Expect<Equal<NumberToBinary<0> ,  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]>>
];
			