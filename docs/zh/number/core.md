
### 字符串转数字 `StringToNumber<string>`
 * 数字字符串类型转为数字类型

``` typescript
StringToNumber<'123'> // 123
```

			
### 数字转字符串 `NumberToString<number>`
 * 数字类型转为数字字符串类型

``` typescript
NumberToString<123> // '123'
```

			
### 符号 `SignalPart<number>`
 * 数字的符号部分

``` typescript
SignalPart<-1.5> // -1
SignalPart<1> // 1
SignalPart<0> // 1
```

			
### 是否负数 `IsNegative<number>`
 * 判断一个数字是否为负数

``` typescript
IsNegative<-1> // true
IsNegative<1> // false
IsNegative<0> // false
```

			
### 是否正数 `IsPositive<number>`
 * 判断一个数字是否为正数

``` typescript
IsPositive<-1> // false
IsPositive<1> // true
IsPositive<0> // false
```

			
### 绝对值 `Abs<number>`


``` typescript
Abs<-1> // 1
Abs<1> // 1
Abs<0> // 0
```

			
### 负号算法 `Negative<number>`


``` typescript
Negative<-2> // 2
Negative<2> // -2
Negative<0> // 0
```

			