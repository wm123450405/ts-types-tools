
### Include `ArrayIncludes<unknown[], V>`


``` typescript
ArrayIncludes<[1, 2, 3], 2> // true
ArrayIncludes<[1, 2, 3], 4> // false
```

			
### Whether there is a condition that is satisfied `ArraySome<unknown[], <T[number]>(v: V) => boolean>`


``` typescript
ArraySome<[1, 2, 3], (((v: 2) => true) & ((v: 1 | 3) => false))> // true
ArraySome<[3, 3, 3], (((v: 2) => true) & ((v: 1 | 3) => false))> // false
```

			
### Whether all are satisfied `ArrayEvery<unknown[], <T[number]>(v: V) => boolean>`


``` typescript
ArrayEvery<[1, 2, 3], (((v: 2) => true) & ((v: 1 | 3) => false))> // false
ArrayEvery<[2, 2, 2], (((v: 2) => true) & ((v: 1 | 3) => false))> // true
```

			
### Find index `ArrayFindIndex<unknown[], <T[number]>(v: V) => boolean>`


``` typescript
ArrayFindIndex<[1, 2, 3], (((v: 2) => true) & ((v: 1 | 3) => false))> // 1
ArrayFindIndex<[2, 2, 2], (((v: 2) => true) & ((v: 1 | 3) => false))> // 0
```

			
### Find last index `ArrayFindLastIndex<unknown[], <T[number]>(v: V) => boolean>`


``` typescript
ArrayFindLastIndex<[1, 2, 3], (((v: 2) => true) & ((v: 1 | 3) => false))> // 1
ArrayFindLastIndex<[2, 2, 2], (((v: 2) => true) & ((v: 1 | 3) => false))> // 2
```

			
### Index `ArrayIndexOf<unknown[], V>`


``` typescript
ArrayIndexOf<[1, 2, 3], 2> // 1
ArrayIndexOf<[2, 2, 2], 2> // 0
```

			
### Last index `ArrayLastIndexOf<unknown[], V>`


``` typescript
ArrayLastIndexOf<[1, 2, 3], 2> // 1
ArrayLastIndexOf<[2, 2, 2], 2> // 2
```

			