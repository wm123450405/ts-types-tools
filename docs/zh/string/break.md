
### 截取字符串前部分 `TakeString<string, number>`
 * 字符串前 N 个字符组成的新字符串

``` typescript
TakeString<'abcdefg', 3> // 'abc'
```

			
### 忽略字符串前部分 `SkipString<string, number>`
 * 字符串从 N 项开始往后的所有字符组成的新字符串

``` typescript
SkipString<'abcdefg', 3> // 'defg'
```

			
### 截取子字符串 `Substring<string, number, number>`
 * 字符串从 N 开始到 M 的所有字符组成的新字符串

``` typescript
Substring<'abcdefg', 2, 4> // 'cd'
```

			
### 修剪左侧 `TrimLeft<string>` `TrimLeft<string, string>`
 * 清除字符串左侧的重复字符

``` typescript
TrimLeft<' 123'> // '123'
TrimLeft<'0123', '0'> // '123'
TrimLeft<'0123'> // '0123'
```

			
### 修剪右侧 `TrimRight<string>` `TrimRight<string, string>`
 * 清除字符串右侧的重复字符

``` typescript
TrimRight<'123 '> // '123'
TrimRight<'1230', '0'> // '123'
TrimRight<'1230'> // '1230'
```

			
### 修剪 `Trim<string>` `Trim<string, string>`
 * 清除字符串的左侧和右侧的重复字符

``` typescript
Trim<' 123 '> // '123'
Trim<'0123', '0'> // '123'
Trim<'0123'> // '0123'
```

			
### 拆分 `Split<string>` `Split<string, string>`


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

			