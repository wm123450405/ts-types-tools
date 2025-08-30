
import type { Equal, Expect } from '@type-challenges/utils';
import type { TakeString, SkipString, Substring, TrimLeft, TrimRight, Trim, Split } from '../../index';

export type Cases = [
	Expect<Equal<TakeString<'abcdefg', 3> ,  'abc'>>,
	Expect<Equal<SkipString<'abcdefg', 3> ,  'defg'>>,
	Expect<Equal<Substring<'abcdefg', 2, 4> ,  'cd'>>,
	Expect<Equal<TrimLeft<' 123'> ,  '123'>>,
	Expect<Equal<TrimLeft<'0123', '0'> ,  '123'>>,
	Expect<Equal<TrimLeft<'0123'> ,  '0123'>>,
	Expect<Equal<TrimRight<'123 '> ,  '123'>>,
	Expect<Equal<TrimRight<'1230', '0'> ,  '123'>>,
	Expect<Equal<TrimRight<'1230'> ,  '1230'>>,
	Expect<Equal<Trim<' 123 '> ,  '123'>>,
	Expect<Equal<Trim<'0123', '0'> ,  '123'>>,
	Expect<Equal<Trim<'0123'> ,  '0123'>>,
	Expect<Equal<Split<'Hi! How are you?'> ,  ['Hi! How are you?']>>,
	Expect<Equal<Split<'Hi! How are you?', 'z'> ,  ['Hi! How are you?']>>,
	Expect<Equal<Split<'Hi! How are you?', ' '> ,  ['Hi!', 'How', 'are', 'you?']>>,
	Expect<Equal<Split<'Hi! How are you?', ''> ,  ['H', 'i', '!', ' ', 'H', 'o', 'w', ' ', 'a', 'r', 'e', ' ', 'y', 'o', 'u', '?']>>,
	Expect<Equal<Split<'', ''> ,  []>>,
	Expect<Equal<Split<'The sine in cosine', 'in'> ,  ['The s', 'e ', ' cos', 'e']>>,
	Expect<Equal<Split<'Never say never, forever and ever.', 'ver'> ,  ['Ne', ' say ne', ', fore', ' and e', '.']>>,
	Expect<Equal<Split<'', 'z'> ,  ['']>>,
	Expect<Equal<Split<''> ,  ['']>>,
	Expect<Equal<Split<string, 'whatever'> ,  string[]>>
];
			