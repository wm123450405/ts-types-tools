
import type { Equal, Expect } from '@type-challenges/utils';
import type { StringToNumber, SignalPart, IsNegative, IsPositive } from '../../index';

export type Cases = [	Expect<Equal< StringToNumber<'123'> ,  123
 >>,
	Expect<Equal< NumberToString<123> ,  '123'>>,
	Expect<Equal< SignalPart<-1.5> ,  -1>>,
	Expect<Equal< SignalPart<1> ,  1>>,
	Expect<Equal< SignalPart<0> ,  1
 >>,
	Expect<Equal< IsNegative<-1> ,  true>>,
	Expect<Equal< IsNegative<1> ,  false>>,
	Expect<Equal< IsNegative<0> ,  false
 >>,
	Expect<Equal< IsPositive<-1> ,  false>>,
	Expect<Equal< IsPositive<1> ,  true>>,
	Expect<Equal< IsPositive<0> ,  false
 >>];
					