# ts-type-tools
TS中一些方便的类型工具

## 1. 安装

```shell
npm install ts-type-tools --save-dev
```

## 2. 使用

```typescript
import type { IntRange } from 'ts-type-tools';
```

```typescript
type Status = IntRange<0, 5>;  // 0 | 1 | 2 | 3 | 4
```

## 3. api


### 取否 `Not<boolean>`
``` typescript
Not<true> // false
Not<false> // true
```

### 反转字符串 `ReverseString<string>`
``` typescript
ReverseString<'abc'> // 'cba'
```

### 反转数组 `ReverseArray<any[]>`
``` typescript
ReverseArray<[1, 2]> // [2, 1]
```

### 反转一个字符串或数组 `Reverse<string | any[]>`
``` typescript
Reverse<'abc'> // 'cba'
Reverse<[1, 2]> // [2, 1]
```

### 字符串转数字 `StringToNumber<string>`
``` typescript
StringToNumber<'123'> // 123
```

### 数字转字符串 `NumberToString<number>`
``` typescript
NumberToString<123> // '123'
```

### 是否是整数 `IsInt<number>`
``` typescript
IsInteger<123> // true
IsInteger<123.1> // false
```

### 作为整数 `AsInt<number>`
``` typescript
AsInt<123> // 123
AsInt<123.1> // never
```

### 是否是非负整数 `IsUInt<number>`
``` typescript
AsUInt<123> // true
AsUInt<-123> // false
AsUInt<123.1> // false
```

### 作为非负整数 `AsUInt<number>`
``` typescript
AsUInt<123> // 123
AsUInt<-123> // never
AsUInt<123.1> // never
```

### 索引序列 `IntEnumerate<number>`
``` typescript
IntEnumerate<5> // 0 | 1 | 2 | 3 | 4
IntEnumerate<0> // never
IntEnumerate<-1> // never
IntEnumerate<1.1> // never
```

### 数字序列 `IntRange<number, number>`
``` typescript
IntRange<0, 3> // 0 | 1 | 2
IntRange<3, 5> // 3 | 4
IntRange<5, 5> // never
IntRange<5, 3> // never
IntRange<-5, 5> // never
```

### 数字序列(指定长度) `IntList<number, number>`
``` typescript
IntList<0, 3> // 0 | 1 | 2
IntList<3, 5> // 3 | 4 | 5 | 6 | 7 
IntList<5, 3> // 5 | 6 | 7
IntList<-5, 5> // never
```


### 数字符号 `SignalPart<number>`
``` typescript
SignalPart<-1.5> // -1
SignalPart<1> // 1
SignalPart<0> // 1
```

### 整数部分 `IntPart<number>`
``` typescript
IntPart<-1.5> // -1
IntPart<1.5> // 1
IntPart<-1> // -1
```

### 小数部分 `DecimalPart<number>`
``` typescript
DecimalPart<-1.5> // 0.5
DecimalPart<1.5> // 0.5
DecimalPart<-1> // 0
```

### 是否为负数 `IsNegative<number>`
``` typescript
IsNegative<-1> // true
IsNegative<1> // false
IsNegative<0> // false
```

### 是否为正数 `IsPositive<number>`
``` typescript
IsPositive<-1> // false
IsPositive<1> // true
IsPositive<0> // false
```

### 加一 `AddOne<number>`
``` typescript
AddOne<0> // 1
AddOne<1> // 2
AddOne<-1> // never
AddOne<1.2> // never
```

### 减一 `MinusOne<number>`
``` typescript
MinusOne<1> // 0
MinusOne<10> // 9
MinusOne<0> // never
MinusOne<1.5> // never
```

### 数组长度 `ArrayLength<any[]>`
``` typescript
ArrayLength<[1,2,3]> // 3
ArrayLength<any[]> // number
```

### 字符串长度 `StringLength<string>`
``` typescript
StringLength<'123'> // 3
StringLength<string> // number
```

### 数组前N项 `TakeArray<any[], number>`
``` typescript
TakeArray<[1, 2, 3], 2> // [1, 2]
```

### 数组忽略前N项 `SkipArray<any[], number>`
``` typescript
SkipArray<[1, 2, 3], 2> // [3]
```

### 子数组 `Slice<any[], number, number>`
``` typescript
Slice<[1, 2, 3, 4, 5], 1, 3> // [2, 3]
```

### 左子串 `TakeString<string, number>`
``` typescript
TakeString<'abcdefg', 3> // 'abc'
```

### 右字串 `SkipString<string, number>`
``` typescript
SkipString<'abcdefg', 3> // 'defg'
```

### 子串 `Substring<string, number, number>`
``` typescript
Substring<'abcdefg', 2, 4> // 'cd'
```

### 绝对值 `Abs<number>`
``` typescript
Abs<-1> // 1
Abs<1> // 1
Abs<0> // 0
```

### 负号 `Negative<number>`
``` typescript
Nagative<-2> // 2
Nagative<2> // -2
Nagative<0> // 0
```

### 大于 `GreaterThan<number, number>`

`GT<number, number>`
``` typescript
GreatThen<5, 2> // true
GreatThen<2, 5> // false
GreatThen<5, 5> // false
```

### 大于等于 `GreaterThanOrEquals<number, number>`

`GE<number, number>`
``` typescript
GreatThenOrEquals<5, 2> // true
GreatThenOrEquals<5, 5> // true
GreatThenOrEquals<5, 6> // false
```

### 小于 `LessThan<number, number>`

`LT<number, number>`
``` typescript
LessThen<5, 2> // false
LessThen<2, 5> // true
LessThen<5, 5> // false
```

### 小于等于 `LessThanOrEquals<number, number>`

`LE<number, number>`
``` typescript
LessThenOrEquals<5, 2> // false
LessThenOrEquals<5, 5> // true
LessThenOrEquals<5, 6> // true
```

### 等于 `Equals<number, number>`

`EQ<number, number>`
``` typescript
Equals<5, 5> // true
Equals<5, 2> // false
```

### 不等于 `NotEquals<number, number>`

`NE<number, number>`
``` typescript
NotEquals<5, 5> // false
NotEquals<5, 2> // true
```

### 数组左侧填充 `FillLeft<any[], number, any>`
``` typescript
FillLeft<[1, 2, 3], 5, 0> // [0, 0, 1, 2, 3]
FillLeft<[1, 2, 3], 2, 0> // [1, 2, 3]
```

### 数组右侧填充 `FillRight<any[], number, any>`
``` typescript
FillRight<[1, 2, 3], 5, 0> // [1, 2, 3, 0, 0]
FillRight<[1, 2, 3], 2, 0> // [1, 2, 3]
```

### 字符串左侧填充 `PadLeft<string, number, string = ' '>`
``` typescript
PadLeft<'5', 3, '0'> // '005'
PadLeft<'5', 3> // '  5'
PadLeft<'555', 3> // '555'
PadLeft<'55555', 3> // '55555'
```

### 字符串右侧填充 `PadRight<string, number, string = ' '>`
``` typescript
PadRight<'5', 3, '0'> // '500'
PadRight<'5', 3> // '5  '
PadRight<'555', 3> // '555'
PadRight<'55555', 3> // '55555'
```

### 清楚左侧字符 `TrimLeft<string, string = ' '>`
``` typescript
TrimLeft<' 123'> // '123'
TrimLeft<'0123', '0'> // '123'
TrimLeft<'0123'> // '0123'
```

### 清楚右侧侧字符 `TrimRight<string, string = ' '>`
``` typescript
TrimRight<'123 '> // '123'
TrimRight<'1230', '0'> // '123'
TrimRight<'1230'> // '1230'
```

### 默认字符串 `DefaultIfEmpty<string, string>`
``` typescript
DefaultIfEmpty<'123', '234'> // '123'
DefaultIfEmpty<'', '234'> // '234'
```

### 整数求和 `AddInt<number, number>`
``` typescript
AddInt<0, 0> // 0
AddInt<10, 20> // 30
AddInt<5, 550> // 555
```

### 整数求差 `MinusInt<number, number>`
``` typescript
MinusInt<0, 0> // 0
MinusInt<10, 20> // -10
MinusInt<550, 5> // 545
```

### 数组转联合类型 `ArrayToUnion<any[]>`
``` typescript
ArrayToUnion<[1, 2, 3]> // 1 | 2 | 3
ArrayToUnion<[ '1', '2', '3' ]> // '1' | '2' | '3'
ArrayToUnion<[ boolean, number, false, null ]> // boolean | number | null
ArrayToUnion<[ true, false ]> // boolean
```

### 最大值 `Max<number, number>` `Max<number[]>`
``` typescript
Max<1, 23> // 23
Max<[1, 23]> // 23
Max<[1, 23, 5]> // 23
Max<[]> // never
```

### 最小值 `Min<number, number>` `Min<number[]>`
``` typescript
Min<1, 23> // 1
Min<[1, 23]> // 1
Min<[8, 23, 5]> // 5
Min<[]> // never
```

### 指定长度数组 `GenerateArray<type, number>`
``` typescript
GenerateArray<any, 2> // [any, any]
GenerateArray<any, 0> // []
GenerateArray<boolean, 1> // [boolean]
```

