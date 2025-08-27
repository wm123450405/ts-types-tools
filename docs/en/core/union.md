
###  `ArrayToUnion<unknown[]>`


``` typescript
ArrayToUnion<[1, 2, 3]> // 1 | 2 | 3
ArrayToUnion<[ '1', '2', '3' ]> // '1' | '2' | '3'
ArrayToUnion<[ boolean, number, false, null ]> // boolean | number | null
ArrayToUnion<[ true, false ]> // boolean
```

			