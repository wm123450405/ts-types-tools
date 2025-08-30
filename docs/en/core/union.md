
###  `ArrayToUnion<unknown[]>`


``` typescript
ArrayToUnion<[1, 2, 3]> // 1 | 2 | 3
ArrayToUnion<[ '1', '2', '3' ]> // '1' | '2' | '3'
ArrayToUnion<[ boolean, number, false, null ]> // boolean | number | null
ArrayToUnion<[ true, false ]> // boolean
```

			
###  `UnionToArray<A>`


``` typescript
UnionToArray<1 | 2> // [1, 2] | [2, 1]
UnionToArray<1 | 2 | 3> // [1, 2, 3] | [1, 3, 2] | [2, 1, 3] | [2, 3, 1] | [3, 1, 2] | [3, 2, 1]
```

			
###  `UnionToIntersection<U>`


``` typescript
UnionToIntersection< { a: number } | { b: 1 }> // { a: number } & { b: 1 }
```

			
###  `UnionToTuple<T>`


``` typescript

```

			