
import type { Equal, Expect } from '@type-challenges/utils';
import type { Same } from '../../index';

export type Cases = [
	Expect<Equal<Same<boolean, boolean> ,  true>>,
	Expect<Equal<Same<boolean, number> ,  false>>
];
			