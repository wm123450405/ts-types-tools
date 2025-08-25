
import type { Equal, Expect } from '@type-challenges/utils';
import type { ReverseString, StringLength, DefaultIfEmpty } from '../../index';

export type Cases = [	Expect<Equal< ReverseString<'abc'> ,  'cba'
 >>,
	Expect<Equal< StringLength<'123'> ,  3>>,
	Expect<Equal< StringLength<string> ,  number
 >>,
	Expect<Equal< DefaultIfEmpty<'123', '234'> ,  '123'>>,
	Expect<Equal< DefaultIfEmpty<'', '234'> ,  '234'
 >>];
					