
### 是否空数组 `IsEmptyArray<unknown[]>`


``` typescript
IsEmptyArray<[]> // true
IsEmptyArray<[1, 2]> // false
IsEmptyArray<unknown[]> // false
```

			
### 反转数组 `ReverseArray<unknown[]>`
 * 反转一个数组

``` typescript
ReverseArray<[1, 2]> // [2, 1]
```

			
### 数组长度 `ArrayLength<unknown[]>`
 * 获取数组具体长度的数字类型

``` typescript
ArrayLength<[1,2,3]> // 3
ArrayLength<unknown[]> // number
```

			
### 截取数组前 N 项 `TakeArray<unknown[], number>`
 * 数组前 N 项组成的新的类型数组

``` typescript
TakeArray<[1, 2, 3], 2> // [1, 2]
```

			
### 忽略数组前 N 项 `SkipArray<unknown[], number>`
 * 数组从 N 项开始往后组成的类型数组

``` typescript
SkipArray<[1, 2, 3], 2> // [3]
```

			
### 提取子数组 `Slice<unknown[], number, number>`
 * 数组从 N 项开始往后至 S 项组成的类型数组

``` typescript
Slice<[1, 2, 3, 4, 5], 1, 3> // [2, 3]
```

			
### 左向填充数组 `FillLeft<unknown[], number, unknown>`
 * 向数组左侧添加指定类型, 获取一个指定长度的新数组

``` typescript
FillLeft<[1, 2], 5, 0> // [0, 0, 0, 1, 2]
```

			
### 右向填充数组 `FillRight<unknown[], number, unknown>`
 * 向数组右侧添加指定类型, 获取一个指定长度的新数组

``` typescript
FillRight<[1, 2], 5, 0> // [1, 2, 0, 0, 0]
```

			
### 生成指定长度的数组类型 `GenerateArray<unknown, number>`


``` typescript
GenerateArray<unknown, 2> // [unknown, unknown]
GenerateArray<unknown, 0> // []
GenerateArray<boolean, 1> // [boolean]
```

			
### 数组排序 `SortArray<number[]>`


``` typescript
SortArray<[2, 1, 3]> // [1, 2, 3]
SortArray<[2, 1, 3, 2, 1, 3]> // [1, 1, 2, 2, 3, 3]
```

			
### 是否包含 `Includes<unknown[], V>`
 * 判断数组是否包含某个元素

``` typescript
Includes<[1, 2, 3], 2> // true
Includes<[1, 2, 3], 4> // false
```

			
### 是否有满足 `Some<unknown[], <T[number]>(v: V) => boolean>`
 * 判断数组是否至少有一个元素满足某个条件

``` typescript
Some<[1, 2, 3], (((v: 2) => true) & ((v: 1 | 3) => false))> // true
Some<[3, 3, 3], (((v: 2) => true) & ((v: 1 | 3) => false))> // false
```

			
### 是否都满足 `Every<unknown[], <T[number]>(v: V) => boolean>`
 * 判断数组是否都满足某个条件

``` typescript
Every<[1, 2, 3], (((v: 2) => true) & ((v: 1 | 3) => false))> // false
Every<[2, 2, 2], (((v: 2) => true) & ((v: 1 | 3) => false))> // true
```

			