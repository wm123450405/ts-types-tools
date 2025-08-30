
### 左侧填充 `PadLeft<string, number>` `PadLeft<string, number, string>`
 * 填充字符串左边

``` typescript
PadLeft<'5', 3, '0'> // '005'
PadLeft<'5', 3> // '  5'
PadLeft<'555', 3> // '555'
PadLeft<'55555', 3> // '55555'
```

			
### 右侧填充 `PadRight<string, number>` `PadRight<string, number, string>`
 * 填充字符串右边

``` typescript
PadRight<'5', 3, '0'> // '500'
PadRight<'5', 3> // '5  '
PadRight<'555', 3> // '555'
PadRight<'55555', 3> // '55555'
```

			
### 重复字符串 `RepeatString<string, number>`
 * 生成内容重复指定次数的字符串

``` typescript
RepeatString<'5', 3> // '555'
```

			