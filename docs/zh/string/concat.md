
### 截取 `TakeString<string, number>`
 * 字符串前 N 个字符组成的新字符串
 * A new string composed of the first N characters

``` typescript
TakeString<'abcdefg', 3> // 'abc'
```

			
###  `SkipString<string, number>`


``` typescript
SkipString<'abcdefg', 3> // 'defg'
```

			
###  `Substring<string, number, number>`


``` typescript
Substring<'abcdefg', 2, 4> // 'cd'
```

			
###  `PadLeft<string, number, string = " ">`


``` typescript
PadLeft<'5', 3, '0'> // '005'
PadLeft<'5', 3> // '  5'
PadLeft<'555', 3> // '555'
PadLeft<'55555', 3> // '55555'
```

			
###  `PadRight<string, number, string = " ">`


``` typescript
PadRight<'5', 3, '0'> // '500'
PadRight<'5', 3> // '5  '
PadRight<'555', 3> // '555'
PadRight<'55555', 3> // '55555'
```

			
###  `TrimLeft<string, string = " ">`


``` typescript
TrimLeft<' 123'> // '123'
TrimLeft<'0123', '0'> // '123'
TrimLeft<'0123'> // '0123'
```

			
###  `TrimRight<string, string = " ">`


``` typescript
TrimRight<'123 '> // '123'
TrimRight<'1230', '0'> // '123'
TrimRight<'1230'> // '1230'
```

			