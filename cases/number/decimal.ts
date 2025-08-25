
import type { Equal, Expect } from '@type-challenges/utils';
import type { IntPart, DecimalPart } from '../../index';

export type Cases = [	Expect<Equal< IntPart<-1.5> ,  -1>>,
	Expect<Equal< IntPart<1.5> ,  1>>,
	Expect<Equal< IntPart<-1> ,  -1
 >>,
	Expect<Equal< DecimalPart<-1.5> ,  0.5>>,
	Expect<Equal< DecimalPart<1.5> ,  0.5>>,
	Expect<Equal< DecimalPart<-1> ,  0
 >>];
			