
###  `GreatThen<number, number>`


``` typescript
GreatThen<5, 2> // true
GreatThen<2, 5> // false
GreatThen<5, 5> // false
```

			
###  `GT<number, number>`


``` typescript

```

			
###  `GreatThenOrEquals<number, number>`


``` typescript
GreatThenOrEquals<5, 2> // true
GreatThenOrEquals<5, 5> // true
GreatThenOrEquals<5, 6> // false
```

			
###  `GE<number, number>`


``` typescript

```

			
###  `LessThen<number, number>`


``` typescript
LessThen<5, 2> // false
LessThen<2, 5> // true
LessThen<5, 5> // false
```

			
###  `LT<number, number>`


``` typescript

```

			
###  `LessThenOrEquals<number, number>`


``` typescript
LessThenOrEquals<5, 2> // false
LessThenOrEquals<5, 5> // true
LessThenOrEquals<5, 6> // true
```

			
###  `LE<number, number>`


``` typescript

```

			
###  `Equals<A, B>`


``` typescript
Equals<5, 5> // true
Equals<5, 2> // false
```

			
###  `EQ<number, number>`


``` typescript

```

			
###  `NotEquals<A, B>`


``` typescript
NotEquals<5, 5> // false
NotEquals<5, 2> // true
```

			
###  `NE<number, number>`


``` typescript

```

			
###  `Max<number | number[], (number ? number : never) = never>`


``` typescript
Max<1, 23> // 23
Max<[1, 23]> // 23
Max<[1, 23, 5]> // 23
Max<[]> // never
```

			
###  `Min<number | number[], (number ? number : never) = never>`


``` typescript
Min<1, 23> // 1
Min<[1, 23]> // 1
Min<[8, 23, 5]> // 5
Min<[]> // never
```

			