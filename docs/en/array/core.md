
### Is an empty array `IsEmptyArray<readonly unknown[]>`


``` typescript
IsEmptyArray<[]> // true
IsEmptyArray<[1, 2]> // false
IsEmptyArray<unknown[]> // false
```

			
### Reverse an array `ReverseArray<readonly unknown[]>`


``` typescript
ReverseArray<[1, 2]> // [2, 1]
```

			
### Get the length of an array `ArrayLength<readonly unknown[]>`


``` typescript
ArrayLength<[1,2,3]> // 3
ArrayLength<unknown[]> // number
```

			
### A new array type composed of the first N items `TakeArray<readonly unknown[], number>`


``` typescript
TakeArray<[1, 2, 3], 2> // [1, 2]
```

			
### A new array type composed of the items after N `SkipArray<readonly unknown[], number>`


``` typescript
SkipArray<[1, 2, 3], 2> // [3]
```

			
### A new array type composed of the items from N to S `Slice<readonly unknown[], number, number>`


``` typescript
Slice<[1, 2, 3, 4, 5], 1, 3> // [2, 3]
```

			
### Generate an array of a specified length, adding a specified type to the left `FillLeft<unknown[], number, unknown>`


``` typescript
FillLeft<[1, 2], 5, 0> // [0, 0, 0, 1, 2]
```

			
###  `FillRight<unknown[], number, unknown>`


``` typescript
FillRight<[1, 2], 5, 0> // [1, 2, 0, 0, 0]
```

			
###  `GenerateArray<unknown, number>`


``` typescript
GenerateArray<unknown, 2> // [unknown, unknown]
GenerateArray<unknown, 0> // []
GenerateArray<boolean, 1> // [boolean]
```

			
### Sort an array `SortArray<readonly number[]>`


``` typescript
SortArray<[2, 1, 3]> // [1, 2, 3]
SortArray<[2, 1, 3, 2, 1, 3]> // [1, 1, 2, 2, 3, 3]
```

			