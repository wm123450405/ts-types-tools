
### 是否包含 `ArrayIncludes<unknown[], V>`
 * 判断数组是否包含某个元素

``` typescript
ArrayIncludes<[1, 2, 3], 2> // true
ArrayIncludes<[1, 2, 3], 4> // false
```

			
### 是否有满足 `ArraySome<unknown[], <T[number]>(v: V) => boolean>`
 * 判断数组是否至少有一个元素满足某个条件

``` typescript
ArraySome<[1, 2, 3], (((v: 2) => true) & ((v: 1 | 3) => false))> // true
ArraySome<[3, 3, 3], (((v: 2) => true) & ((v: 1 | 3) => false))> // false
```

			
### 是否都满足 `ArrayEvery<unknown[], <T[number]>(v: V) => boolean>`
 * 判断数组是否都满足某个条件

``` typescript
ArrayEvery<[1, 2, 3], (((v: 2) => true) & ((v: 1 | 3) => false))> // false
ArrayEvery<[2, 2, 2], (((v: 2) => true) & ((v: 1 | 3) => false))> // true
```

			
### 寻找索引 `ArrayFindIndex<unknown[], <T[number]>(v: V) => boolean>`
 * 寻找数组中满足某个条件的索引

``` typescript
ArrayFindIndex<[1, 2, 3], (((v: 2) => true) & ((v: 1 | 3) => false))> // 1
ArrayFindIndex<[2, 2, 2], (((v: 2) => true) & ((v: 1 | 3) => false))> // 0
```

			
### 寻找最后索引 `ArrayFindLastIndex<unknown[], <T[number]>(v: V) => boolean>`
 * 寻找数组中满足某个条件的最后索引

``` typescript
ArrayFindLastIndex<[1, 2, 3], (((v: 2) => true) & ((v: 1 | 3) => false))> // 1
ArrayFindLastIndex<[2, 2, 2], (((v: 2) => true) & ((v: 1 | 3) => false))> // 2
```

			
### 索引 `ArrayIndexOf<unknown[], V>`
 * 获取数组中某个元素的索引

``` typescript
ArrayIndexOf<[1, 2, 3], 2> // 1
ArrayIndexOf<[2, 2, 2], 2> // 0
```

			
### 最后索引 `ArrayLastIndexOf<unknown[], V>`
 * 获取数组中某个元素的最后索引

``` typescript
ArrayLastIndexOf<[1, 2, 3], 2> // 1
ArrayLastIndexOf<[2, 2, 2], 2> // 2
```

			