
import type { Equal, Expect } from '@type-challenges/utils';
import type { IsEmptyObject } from '../../index';

export type Cases = [
	Expect<Equal<IsEmptyObject<{}> ,  true>>,
	Expect<Equal<IsEmptyObject<{a:1}> ,  false>>,
	Expect<Equal<IsEmptyObject<object> ,  false>>
];
			