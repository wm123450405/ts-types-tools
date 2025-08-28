
import type { Equal, Expect } from '@type-challenges/utils';
import type { Binary, NumberToBinary, NumberToBinaryString, BinaryStringToNumber } from '../../index';

export type Cases = [
	Expect<Equal<Binary ,  [boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean]>>,
	Expect<Equal<NumberToBinary<0> ,  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]>>,
	Expect<Equal<NumberToBinaryString<0> ,  '0b00000000000000000000000000000000'>>,
	Expect<Equal<NumberToBinaryString<1> ,  '0b00000000000000000000000000000001'>>,
	Expect<Equal<BinaryStringToNumber<'0b00000000000000000000000000000001'> ,  1>>,
	Expect<Equal<BinaryStringToNumber<'0b00000000000000000000000000000000'> ,  0>>
];
			