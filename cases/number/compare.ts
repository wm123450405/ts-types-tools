
import type { Equal, Expect } from '@type-challenges/utils';
import type { GreatThen, GT, GreatThenOrEquals, GE, LessThen, LT, LessThenOrEquals, LE, Equals, EQ, NotEquals, NE, Max, Min } from '../../index';

export type Cases = [	Expect<Equal< GreatThen<5, 2> ,  true>>,
	Expect<Equal< GreatThen<2, 5> ,  false>>,
	Expect<Equal< GreatThen<5, 5> ,  false
 >>,
	Expect<Equal< GreatThenOrEquals<5, 2> ,  true>>,
	Expect<Equal< GreatThenOrEquals<5, 5> ,  true>>,
	Expect<Equal< GreatThenOrEquals<5, 6> ,  false
 >>,
	Expect<Equal< LessThen<5, 2> ,  false>>,
	Expect<Equal< LessThen<2, 5> ,  true>>,
	Expect<Equal< LessThen<5, 5> ,  false
 >>,
	Expect<Equal< LessThenOrEquals<5, 2> ,  false>>,
	Expect<Equal< LessThenOrEquals<5, 5> ,  true>>,
	Expect<Equal< LessThenOrEquals<5, 6> ,  true
 >>,
	Expect<Equal< Equals<5, 5> ,  true>>,
	Expect<Equal< Equals<5, 2> ,  false
 >>,
	Expect<Equal< NotEquals<5, 5> ,  false>>,
	Expect<Equal< NotEquals<5, 2> ,  true
 >>,
	Expect<Equal< Max<1, 23> ,  23>>,
	Expect<Equal< Max<[1, 23]> ,  23>>,
	Expect<Equal< Max<[1, 23, 5]> ,  23>>,
	Expect<Equal< Max<[]> ,  never
 >>,
	Expect<Equal< Min<1, 23> ,  1>>,
	Expect<Equal< Min<[1, 23]> ,  1>>,
	Expect<Equal< Min<[8, 23, 5]> ,  5>>,
	Expect<Equal< Min<[]> ,  never
 >>];
			