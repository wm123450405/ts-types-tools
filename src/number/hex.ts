// import type { ArrayLength, FillLeft, GenerateArray, Slice } from "../array";
// import type { ArrayToUnion, DistributeUnions } from "../core";
// import type { GreatThenOrEquals, GreatThen } from "./compare";
// import type { AddInt, IntChars, IntEnumerate, MinusInt } from "./int";

// export type HexSize = 8;

// export type HexChars = [...IntChars, 'A', 'B', 'C', 'D', 'E', 'F']

// export type HexChar = HexChars[number];

// export type HexValue = IntEnumerate<ArrayLength<HexChars>>;

// type Hexes = [
// 	0x10000000, 
// 	0x1000000, 
// 	0x100000, 
// 	0x10000, 
// 	0x1000, 
// 	0x100, 
// 	0x10, 
// 	0x1
// ];


// export type Hex = GenerateArray<HexChar, HexSize>;

// type HexCharToValue<C extends HexChar> =
// 	C extends 'A' ? 10 :
// 	C extends 'B' ? 11 :
// 	C extends 'C' ? 12 :
// 	C extends 'D' ? 13 :
// 	C extends 'E' ? 14 :
// 	C extends 'F' ? 15 :
// 	C extends `${infer N extends HexValue}` ? N :
// 	never;

// type HexValueToChar<C extends HexValue> = 
// 	C extends 10 ? 'A' :
// 	C extends 11 ? 'B' :
// 	C extends 12 ? 'C' :
// 	C extends 13 ? 'D' :
// 	C extends 14 ? 'E' :
// 	C extends 15 ? 'F' :
// 	`${C}` extends HexChar ? `${C}` : never;


// type SimpleNumberToHex<N extends number, BS extends number[] = Hexes> = 
// 	BS extends [ infer H extends number, ...infer L extends number[] ] ?
// 		GreatThenOrEquals<N, H> extends true ?
// 			[ true, ...SimpleNumberToHex<MinusInt<N, H>, L> ]
// 		:
// 			[ false, ...SimpleNumberToHex<N, L> ]
// 	: []

// /**
//  * @zh 数字转十六进制格式
//  * @en Number to binary
//  * @example NumberToHex<0> // []
//  */
// export type NumberToHex<N extends number> =
// 	DistributeUnions<[N]> extends [infer Ni extends N] ? Ni extends Ni ? SimpleNumberToHex<Ni> : never : never;

// type SimpleHexToNumber<B extends Hex, L extends HexChar[] = B, BS extends number[] = Hexes, R extends number = 0> = 
// 	L extends [ infer F extends HexChar, ...infer RL extends HexChar[] ] ?
// 		BS extends [ infer H extends number, ...infer RB extends number[] ] ?
// 			F extends true ?
// 				RL extends [] ? AddInt<R, H> : SimpleHexToNumber<B, RL, RB, AddInt<R, H>>
// 			:
// 				RL extends [] ? R : SimpleHexToNumber<B, RL, RB, R>
// 		: R
// 	: R ;

// /** 
//  * @zh 十六进制转化为数字
//  */
// export type HexToNumber<B extends Hex> = 
// 	DistributeUnions<[B]> extends [infer Bi extends B] ? Bi extends Bi ? SimpleHexToNumber<Bi> : never : never;

// type SimpleNumberToHexString<B extends Hex | number, L extends HexChar[] = B extends number ? NumberToHex<B> : B, R extends string = ''> =
// 	L extends [ infer F extends HexChar, ...infer Rest extends HexChar[] ] ?
// 		Rest extends [] ?
// 			`${R}${F extends true ? 1 : 0}`
// 		:
// 			R extends '' ? 
// 				SimpleNumberToHexString<B, Rest, `0x${F extends true ? 1 : 0}`>
// 			:
// 				SimpleNumberToHexString<B, Rest, `${R}${F extends true ? 1 : 0}`>
// 	: never;

// /**
//  * @zh 十六进制转十六进制字符串
//  * @example NumberToHexString<0> // '0x00000000'
//  * @example NumberToHexString<1> // '0x00000001'
//  */
// export type NumberToHexString<B extends Hex | number> =
// 	DistributeUnions<[B]> extends [infer Bi extends B] ? Bi extends Bi ? SimpleNumberToHexString<Bi> : never : never;

// type SimpleHexStringToHex<T extends string, R extends HexValue[] = []> = 
// 	T extends `0x${infer RT extends string}` ?
// 		SimpleHexStringToHex<RT>
// 	:
// 		T extends `${infer F extends HexChar}${infer O extends string}` ?
// 			SimpleHexStringToHex<O, [...R, HexCharToValue<F>]>
// 		:
// 			GreatThen<ArrayLength<R>, HexSize> extends true ?
// 				Slice<R, MinusInt<ArrayLength<R>, HexSize>, ArrayLength<R>>
// 			: FillLeft<R, HexSize, '0'>;
		

// /**
//  * @zh 十六进制字符串转为数字
//  * @example HexStringToNumber<'0x00000001'> // 1
//  * @example HexStringToNumber<'0x00000000'> // 0
//  */
// export type HexStringToNumber<T extends string> = 
// 	DistributeUnions<[T]> extends [infer Ti extends T] ? Ti extends Ti ? HexToNumber<SimpleHexStringToHex<T>> : never : never;

