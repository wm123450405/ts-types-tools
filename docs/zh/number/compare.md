
### 大于 `GreatThen<number, number>`
 * 比较数字A是否大于B, 若A大于B则返回true, 否则返回false

``` typescript
GreatThen<5, 2> // true
GreatThen<2, 5> // false
GreatThen<5, 5> // false
```

			
###  `GT<number, number>`


``` typescript

```

			
### 大于等于 `GreatThenOrEquals<number, number>`
 * 比较数字A是否大于等于B, 若A大于等于B则返回true, 否则返回false

``` typescript
GreatThenOrEquals<5, 2> // true
GreatThenOrEquals<5, 5> // true
GreatThenOrEquals<5, 6> // false
```

			
###  `GE<number, number>`


``` typescript

```

			
### 小于 `LessThen<number, number>`
 * 比较数字A是否小于B, 若A小于B则返回true, 否则返回false

``` typescript
LessThen<5, 2> // false
LessThen<2, 5> // true
LessThen<5, 5> // false
```

			
###  `LT<number, number>`


``` typescript

```

			
### 小于等于 `LessThenOrEquals<number, number>`
 * 比较数字A是否小于等于B, 若A小于等于B则返回true, 否则返回false

``` typescript
LessThenOrEquals<5, 2> // false
LessThenOrEquals<5, 5> // true
LessThenOrEquals<5, 6> // true
```

			
###  `LE<number, number>`


``` typescript

```

			
### 等于 `Equals<A, B>`
 * 比较两个数据是否相同

``` typescript
Equals<5, 5> // true
Equals<5, 2> // false
```

			
###  `EQ<number, number>`


``` typescript

```

			
### 不等于 `NotEquals<A, B>`
 * 比较两个数据是否不同

``` typescript
NotEquals<5, 5> // false
NotEquals<5, 2> // true
```

			
###  `NE<number, number>`


``` typescript

```

			
### 最大值 `Max<number[]>` `Max<number, number>`
 * 获取一组数字中的最大数字类型

``` typescript
Max<1, 23> // 23
Max<[1, 23]> // 23
Max<[1, 23, 5]> // 23
Max<[]> // never
```

			
### 最小值 `Min<number[]>` `Min<number, number>`
 * 获取一组数字中的最小数字类型

``` typescript
Min<1, 23> // 1
Min<[1, 23]> // 1
Min<[8, 23, 5]> // 5
Min<[]> // never
```

			