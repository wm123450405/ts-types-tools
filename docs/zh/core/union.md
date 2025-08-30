
### 将具体是数组类型转化未联合类型 `ArrayToUnion<readonly unknown[]>`


``` typescript
ArrayToUnion<[1, 2, 3]> // 1 | 2 | 3
ArrayToUnion<[ '1', '2', '3' ]> // '1' | '2' | '3'
ArrayToUnion<[ boolean, number, false, null ]> // boolean | number | null
ArrayToUnion<[ true, false ]> // boolean
```

			
### 将联合类型转化成数组类型 `UnionToArray<A>`


``` typescript
UnionToArray<1 | 2> // [1, 2] | [2, 1]
UnionToArray<1 | 2 | 3> // [1, 2, 3] | [1, 3, 2] | [2, 1, 3] | [2, 3, 1] | [3, 1, 2] | [3, 2, 1]
```

			
### 将联合类型转化成交叉类型 `UnionToIntersection<U>`


``` typescript
UnionToIntersection< { a: number } | { b: 1 }> // { a: number } & { b: 1 }
```

			
### 将联合类型转化成元组类型 `UnionToTuple<T>`
 * 顺序随机

``` typescript

```

			