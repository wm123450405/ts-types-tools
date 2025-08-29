
import type { Equal, Expect } from '@type-challenges/utils';
import type { NumberToHexString, HexStringToNumber } from '../../index';

export type Cases = [
	Expect<Equal<NumberToHexString<0> ,  '0x00000000'>>,
	Expect<Equal<NumberToHexString<35646> ,  '0x00008B3E'>>,
	Expect<Equal<HexStringToNumber<'0x00008B3E'> ,  35646>>,
	Expect<Equal<HexStringToNumber<'0x00000000'> ,  0>>
];
			