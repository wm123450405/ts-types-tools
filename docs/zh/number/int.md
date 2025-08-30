
### 是否是整数 `IsInt<number>`
 * 不能用于判断联合类型

``` typescript
IsInt<123> // true
IsInt<123.1> // false
```

			
### 只能是整数 `AsInt<number>`
 * 不能处理联合类型

``` typescript
AsInt<123> // 123
AsInt<123.1> // never
```

			
### 是否是非负整数 `IsUInt<number>`
 * 不能用于判断联合类型

``` typescript
IsUInt<123> // true
IsUInt<-123> // false
IsUInt<123.1> // false
```

			
### 只能是非负整数 `AsUInt<number>`
 * 不能处理联合类型

``` typescript
AsUInt<123> // 123
AsUInt<-123> // never
AsUInt<123.1> // never
```

			
### 索引序列 `IntEnumerate<number>`
 * 创建一个从 0 到 N 的数字序列类型,等效于: 0 | 1 | 2 | 3 | ... | N - 1

``` typescript
IntEnumerate<5> // 0 | 1 | 2 | 3 | 4
IntEnumerate<0> // never
IntEnumerate<-1> // never
IntEnumerate<1.1> // never
```

			
### 数字序列 `IntRange<number, number>`
 * 创建一个从 F 到 N 的数字序列类型, 等效于: F | F + 1 | F + 2 | .... | N - 1

``` typescript
IntRange<0, 3> // 0 | 1 | 2
IntRange<3, 5> // 3 | 4
IntRange<5, 5> // never
IntRange<5, 3> // never
IntRange<-5, 5> // never
```

			
### 整数加一 `AddOne<number>`
 * 指定整数+1后的数字类型

``` typescript
AddOne<0> // 1
AddOne<1> // 2
AddOne<-1> // never
AddOne<1.2> // never
```

			
### 整数减一 `MinusOne<number>`
 * 指定整数-1后的数字类型

``` typescript
MinusOne<1> // 0
MinusOne<10> // 9
MinusOne<0> // never
MinusOne<1.5> // never
```

			
### 数字序列 `IntList<number, number>`
 * 创建一个从 S 开始的指定数量 L 的数字序列类型, 等效于: F | F + 1 | F + 2 | .... | F + L - 1

``` typescript
IntList<0, 3> // 0 | 1 | 2
IntList<3, 5> // 3 | 4 | 5 | 6 | 7
IntList<5, 3> // 5 | 6 | 7
IntList<-5, 5> // never
```

			
### 求和 `AddInt<number, number>`
 * 两个整数的和

``` typescript
AddInt<0, 0> // 0
AddInt<10, 20> // 30
AddInt<5, 550> // 555
```

			
### 求差 `MinusInt<number, number>`
 * 两个整数的差

``` typescript
MinusInt<0, 0> // 0
MinusInt<10, 20> // -10
MinusInt<550, 5> // 545
```

			
### 求积 `MultipyInt<number, number>`
 * 两个整数的积

``` typescript
MultipyInt<0, 0> // 0
MultipyInt<10, 20> // 200
MultipyInt<550, 5> // 2750
```

			
### 求商 `DivideInt<number, number>`
 * 两个整数的商

``` typescript
DivideInt<0, 0> // never
DivideInt<10, 20> // 0
DivideInt<550, 5> // 110
DivideInt<550, 45> // 12
```

			
### 求余 `ModInt<number, number>`
 * 两个整数的余

``` typescript
ModInt<0, 0> // never
ModInt<10, 20> // 10
ModInt<550, 5> // 0
ModInt<550, 45> // 10
```

			