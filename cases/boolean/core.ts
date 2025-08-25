
import type { Equal, Expect } from '@type-challenges/utils';
import type { Not } from '../../index';

export type Cases = [	Expect<Equal< Not<true> ,  false>>,
	Expect<Equal< Not<false> ,  true
 >>];
			