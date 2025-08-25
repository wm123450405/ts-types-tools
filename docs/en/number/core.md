
### string -> number `StringToNumber<string>`


``` typescript
StringToNumber<'123'> // 123
```

			
### number -> string `NumberToString<number>`


``` typescript
NumberToString<123> // '123'
```

			
### Signal part of a number `SignalPart<number>`


``` typescript
SignalPart<-1.5> // -1
SignalPart<1> // 1
SignalPart<0> // 1
```

			
### Check if a number is negative `IsNegative<number>`


``` typescript
IsNegative<-1> // true
IsNegative<1> // false
IsNegative<0> // false
```

			
### Check if a number is positive `IsPositive<number>`


``` typescript
IsPositive<-1> // false
IsPositive<1> // true
IsPositive<0> // false
```

			
### Absolute value `Abs<number>`


``` typescript
Abs<-1> // 1
Abs<1> // 1
Abs<0> // 0
```

			
### Negative `Negative<number>`


``` typescript
Negative<-2> // 2
Negative<2> // -2
Negative<0> // 0
```

			