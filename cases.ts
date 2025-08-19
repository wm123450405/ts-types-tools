import type { Equal, Expect } from '@type-challenges/utils'
import type { ArrayLength } from '.'

export type Cases = [
  Expect<Equal<ArrayLength<[5, 2, 6, 1]>, 4>>,
  Expect<Equal<ArrayLength<[1, 2, 3, 4]>, 0>>,
  Expect<Equal<ArrayLength<[-1, -1]>, 0>>,
  Expect<Equal<ArrayLength<[-1]>, 1>>,
];

type E = Cases[number]