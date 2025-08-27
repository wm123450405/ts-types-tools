
###  `ReverseString<string>`


``` typescript
ReverseString<'abc'> // 'cba'
```

			
###  `StringLength<string>`


``` typescript
StringLength<'123'> // 3
StringLength<string> // number
```

			
###  `DefaultIfEmpty<string | undefined | null, string = ''>`


``` typescript
DefaultIfEmpty<'123', '234'> // '123'
DefaultIfEmpty<'', '234'> // '234'
```

			