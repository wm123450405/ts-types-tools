
### Pad left for a string `PadLeft<string, number>` `PadLeft<string, number, string>`


``` typescript
PadLeft<'5', 3, '0'> // '005'
PadLeft<'5', 3> // '  5'
PadLeft<'555', 3> // '555'
PadLeft<'55555', 3> // '55555'
```

			
### Pad right for a string `PadRight<string, number>` `PadRight<string, number, string>`


``` typescript
PadRight<'5', 3, '0'> // '500'
PadRight<'5', 3> // '5  '
PadRight<'555', 3> // '555'
PadRight<'55555', 3> // '55555'
```

			