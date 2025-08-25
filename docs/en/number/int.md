
### Are integers `IsInt<number>`
 * Cannot be used to determine union types

``` typescript
IsInt<123> // true
IsInt<123.1> // false
```

			
### Only integers `AsInt<number>`
 * Cannot handle union types

``` typescript
AsInt<123> // 123
AsInt<123.1> // never
```

			
### Are non-negative integers `IsUInt<number>`
 * Cannot be used to determine union types

``` typescript
IsUInt<123> // true
IsUInt<-123> // false
IsUInt<123.1> // false
```

			
### Only non-negative integers `AsUInt<number>`
 * Cannot handle union types

``` typescript
AsUInt<123> // 123
AsUInt<-123> // never
AsUInt<123.1> // never
```

			
### Create a number sequence type from 0 to N `IntEnumerate<number>`
 * Equivalent to: 0 | 1 | 2 | 3 | ... | N - 1

``` typescript
IntEnumerate<5> // 0 | 1 | 2 | 3 | 4
IntEnumerate<0> // never
IntEnumerate<-1> // never
IntEnumerate<1.1> // never
```

			
### Create a number sequence type from F to N `IntRange<number, number>`
 * Equivalent to: F | F + 1 | F + 2 | .... | N - 1

``` typescript
IntRange<0, 3> // 0 | 1 | 2
IntRange<3, 5> // 3 | 4
IntRange<5, 5> // never
IntRange<5, 3> // never
IntRange<-5, 5> // never
```

			
### Create a number type after adding 1 to an integer `AddOne<number>`


``` typescript
AddOne<0> // 1
AddOne<1> // 2
AddOne<-1> // never
AddOne<1.2> // never
```

			
### Create a type that subtracts one from a number `MinusOne<number>`


``` typescript
MinusOne<1> // 0
MinusOne<10> // 9
MinusOne<0> // never
MinusOne<1.5> // never
```

			
### Create a number sequence type from S and with length L, equivalent to: F | F + 1 | F + 2 | .... | F + L - 1 `IntList<number, number, number[] = []>`


``` typescript
IntList<0, 3> // 0 | 1 | 2
IntList<3, 5> // 3 | 4 | 5 | 6 | 7
IntList<5, 3> // 5 | 6 | 7
IntList<-5, 5> // never
```

			
### Sum of two integers `AddInt<number, number>`


``` typescript
AddInt<0, 0> // 0
AddInt<10, 20> // 30
AddInt<5, 550> // 555
```

			
### Minus of two integers `MinusInt<number, number>`


``` typescript
MinusInt<0, 0> // 0
MinusInt<10, 20> // -10
MinusInt<550, 5> // 545
```

			