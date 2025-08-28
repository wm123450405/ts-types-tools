
###  `BinaryType`


``` typescript

```

			
###  `BinarySize`


``` typescript

```

			
### Binary format `Binary`


``` typescript
Binary // [boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean]
```

			
### Number to binary `NumberToBinary<number>`


``` typescript
NumberToBinary<0> // [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
```

			
###  `BinaryToNumber<Binary>`


``` typescript

```

			
###  `NumberToBinaryString<Binary | number>`


``` typescript
NumberToBinaryString<0> // '0b00000000000000000000000000000000'
NumberToBinaryString<1> // '0b00000000000000000000000000000001'
```

			
###  `BinaryStringToNumber<string>`


``` typescript
BinaryStringToNumber<'0b00000000000000000000000000000001'> // 1
BinaryStringToNumber<'0b00000000000000000000000000000000'> // 0
```

			