
### A new string composed of the first N characters `TakeString<string, number>`


``` typescript
TakeString<'abcdefg', 3> // 'abc'
```

			
### A new string composed of all characters after N `SkipString<string, number>`


``` typescript
SkipString<'abcdefg', 3> // 'defg'
```

			
### A new string composed of all characters from N to M `Substring<string, number, number>`


``` typescript
Substring<'abcdefg', 2, 4> // 'cd'
```

			
###  `TrimLeft<string>` `TrimLeft<string, string>`


``` typescript
TrimLeft<' 123'> // '123'
TrimLeft<'0123', '0'> // '123'
TrimLeft<'0123'> // '0123'
```

			
###  `TrimRight<string>` `TrimRight<string, string>`


``` typescript
TrimRight<'123 '> // '123'
TrimRight<'1230', '0'> // '123'
TrimRight<'1230'> // '1230'
```

			
###  `Trim<string>` `Trim<string, string>`


``` typescript
Trim<' 123 '> // '123'
Trim<'0123', '0'> // '123'
Trim<'0123'> // '0123'
```

			
### Split `Split<string>` `Split<string, string>`


``` typescript
Split<'Hi! How are you?'> // ['Hi! How are you?']
Split<'Hi! How are you?', 'z'> // ['Hi! How are you?']
Split<'Hi! How are you?', ' '> // ['Hi!', 'How', 'are', 'you?']
Split<'Hi! How are you?', ''> // ['H', 'i', '!', ' ', 'H', 'o', 'w', ' ', 'a', 'r', 'e', ' ', 'y', 'o', 'u', '?']
Split<'', ''> // []
Split<'The sine in cosine', 'in'> // ['The s', 'e ', ' cos', 'e']
Split<'Never say never, forever and ever.', 'ver'> // ['Ne', ' say ne', ', fore', ' and e', '.']
Split<'', 'z'> // ['']
Split<''> // ['']
Split<string, 'whatever'> // string[]
```

			