
### 是否空数组 `IsEmptyArray<readonly unknown[]>`


``` typescript
IsEmptyArray<[]> // true
IsEmptyArray<[1, 2]> // false
IsEmptyArray<unknown[]> // false
```

			
### 反转数组 `ReverseArray<readonly unknown[]>`
 * 反转一个数组

``` typescript
ReverseArray<[1, 2]> // [2, 1]
```

			
### 数组长度 `ArrayLength<readonly unknown[]>`
 * 获取数组具体长度的数字类型

``` typescript
ArrayLength<[1,2,3]> // 3
ArrayLength<unknown[]> // number
```

			
### 截取数组前 N 项 `TakeArray<readonly unknown[], number>`
 * 数组前 N 项组成的新的类型数组

``` typescript
TakeArray<[1, 2, 3], 2> // [1, 2]
```

			
### 忽略数组前 N 项 `SkipArray<readonly unknown[], number>`
 * 数组从 N 项开始往后组成的类型数组

``` typescript
SkipArray<[1, 2, 3], 2> // [3]
```

			
### 提取子数组 `Slice<readonly unknown[], number, number>`
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

			
### 数组排序 `SortArray<readonly number[]>`


``` typescript
SortArray<[2, 1, 3]> // [1, 2, 3]
SortArray<[2, 1, 3, 2, 1, 3]> // [1, 1, 2, 2, 3, 3]
```

			