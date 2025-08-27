
### If A greater than B, return true, otherwise return false `GreatThen<number, number>`


``` typescript
GreatThen<5, 2> // true
GreatThen<2, 5> // false
GreatThen<5, 5> // false
```

			
###  `GT<number, number>`


``` typescript

```

			
### If A is great then or equals B, return true, otherwise return false `GreatThenOrEquals<number, number>`


``` typescript
GreatThenOrEquals<5, 2> // true
GreatThenOrEquals<5, 5> // true
GreatThenOrEquals<5, 6> // false
```

			
###  `GE<number, number>`


``` typescript

```

			
### If A less than B, return true, otherwise return false `LessThen<number, number>`


``` typescript
LessThen<5, 2> // false
LessThen<2, 5> // true
LessThen<5, 5> // false
```

			
###  `LT<number, number>`


``` typescript

```

			
### If A is less then or equals B, return true, otherwise return false `LessThenOrEquals<number, number>`


``` typescript
LessThenOrEquals<5, 2> // false
LessThenOrEquals<5, 5> // true
LessThenOrEquals<5, 6> // true
```

			
###  `LE<number, number>`


``` typescript

```

			
### If A and B are the same, return true, otherwise return false `Equals<A, B>`


``` typescript
Equals<5, 5> // true
Equals<5, 2> // false
```

			
###  `EQ<number, number>`


``` typescript

```

			
### If A and B are not same, return true, otherwise return false `NotEquals<A, B>`


``` typescript
NotEquals<5, 5> // false
NotEquals<5, 2> // true
```

			
###  `NE<number, number>`


``` typescript

```

			
###  `Max<number[]>` `Max<number, number>`


``` typescript
Max<1, 23> // 23
Max<[1, 23]> // 23
Max<[1, 23, 5]> // 23
Max<[]> // never
```

			
###  `Min<number[]>` `Min<number, number>`


``` typescript
Min<1, 23> // 1
Min<[1, 23]> // 1
Min<[8, 23, 5]> // 5
Min<[]> // never
```

			