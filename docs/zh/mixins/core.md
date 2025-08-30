
### 反转 `Reverse<string | readonly unknown[]>`
 * 反转一个字符串或数组

``` typescript
Reverse<'abc'> // 'cba'
Reverse<[1, 2]> // [2, 1]
```

			
### 长度 `Length<string | readonly unknown[]>`
 * 获取字符串或数组的长度

``` typescript
Length<'abc'> // 3
Length<[1, 2]> // 2
```

			
### 是否为空 `IsEmpty<T>`
 * 判断数据是否为空

``` typescript
IsEmpty<undefined> // true
IsEmpty<null> // true
IsEmpty<''> // true
IsEmpty<[]> // true
IsEmpty<{}> // true
IsEmpty<'fads'> // false
IsEmpty<[1]> // false
IsEmpty<{a:1}> // false
```

			