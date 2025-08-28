
### 二进制位类型 `BinaryType`


``` typescript

```

			
### 二进制数字的位数 `BinarySize`


``` typescript

```

			
### 数字二进制格式 `Binary`


``` typescript
Binary // [boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean]
```

			
### 数字转二进制格式 `NumberToBinary<number>`


``` typescript
NumberToBinary<0> // [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
```

			
### 二进制转化为数字 `BinaryToNumber<Binary>`


``` typescript

```

			
### 二进制转二进制字符串 `NumberToBinaryString<Binary | number>`


``` typescript
NumberToBinaryString<0> // '0b00000000000000000000000000000000'
NumberToBinaryString<1> // '0b00000000000000000000000000000001'
```

			
### 二进制字符串转为数字 `BinaryStringToNumber<string>`


``` typescript
BinaryStringToNumber<'0b00000000000000000000000000000001'> // 1
BinaryStringToNumber<'0b00000000000000000000000000000000'> // 0
```

			