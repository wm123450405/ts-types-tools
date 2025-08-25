
###  `IsInt<number>`


``` typescript
IsInt<123> // true
IsInt<123.1> // false
```

			
###  `AsInt<number>`


``` typescript
AsInt<123> // 123
AsInt<123.1> // never
```

			
###  `IsUInt<number>`


``` typescript
IsUInt<123> // true
IsUInt<-123> // false
IsUInt<123.1> // false
```

			
###  `AsUInt<number>`


``` typescript
AsUInt<123> // 123
AsUInt<-123> // never
AsUInt<123.1> // never
```

			
###  `IntEnumerate<number>`


``` typescript
IntEnumerate<5> // 0 | 1 | 2 | 3 | 4
IntEnumerate<0> // never
IntEnumerate<-1> // never
IntEnumerate<1.1> // never
```

			
###  `IntRange<number, number>`


``` typescript
IntRange<0, 3> // 0 | 1 | 2
IntRange<3, 5> // 3 | 4
IntRange<5, 5> // never
IntRange<5, 3> // never
IntRange<-5, 5> // never
```

			
###  `AddOne<number>`


``` typescript
AddOne<0> // 1
AddOne<1> // 2
AddOne<-1> // never
AddOne<1.2> // never
```

			
###  `MinusOne<number>`


``` typescript
MinusOne<1> // 0
MinusOne<10> // 9
MinusOne<0> // never
MinusOne<1.5> // never
```

			
###  `IntList<number, number, number[] = []>`


``` typescript
IntList<0, 3> // 0 | 1 | 2
IntList<3, 5> // 3 | 4 | 5 | 6 | 7
IntList<5, 3> // 5 | 6 | 7
IntList<-5, 5> // never
```

			
###  `AddInt<number, number>`


``` typescript
AddInt<0, 0> // 0
AddInt<10, 20> // 30
AddInt<5, 550> // 555
```

			
###  `MinusInt<number, number>`


``` typescript
MinusInt<0, 0> // 0
MinusInt<10, 20> // -10
MinusInt<550, 5> // 545
```

			