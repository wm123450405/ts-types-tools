import type { ArrayLength, FillLeft, GenerateArray, Slice } from "../array";
import type { DistributeUnions } from "../core";
import type { GreatThen, GreatThenOrEquals } from "./compare";
import type { AddInt, MinusInt } from "./int";

/**
 * @zh 二进制位类型
 */
export type BinaryType = true | false;

/**
 * @zh 二进制数字的位数
 */
export type BinarySize = 32;

/** 32位 */
type Binarys = [
	0b10000000000000000000000000000000, 
	0b1000000000000000000000000000000, 
	0b100000000000000000000000000000, 
	0b10000000000000000000000000000, 
	0b1000000000000000000000000000, 
	0b100000000000000000000000000, 
	0b10000000000000000000000000, 
	0b1000000000000000000000000, 
	0b100000000000000000000000, 
	0b10000000000000000000000, 
	0b1000000000000000000000, 
	0b100000000000000000000, 
	0b10000000000000000000, 
	0b1000000000000000000, 
	0b100000000000000000, 
	0b10000000000000000, 

	0b1000000000000000, 
	0b100000000000000, 
	0b10000000000000, 
	0b1000000000000, 
	0b100000000000, 
	0b10000000000, 
	0b1000000000, 
	0b100000000, 
	0b10000000, 
	0b1000000, 
	0b100000, 
	0b10000, 
	0b1000, 
	0b100, 
	0b10, 
	0b1
];



/**
 * @zh 数字二进制格式
 * @en Binary format
 * @example Binary // [boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean]
 */
export type Binary = GenerateArray<BinaryType, ArrayLength<Binarys>>;

type SimpleNumberToBinary<N extends number, BS extends number[] = Binarys> = 
	BS extends [ infer H extends number, ...infer L extends number[] ] ?
		GreatThenOrEquals<N, H> extends true ?
			[ true, ...SimpleNumberToBinary<MinusInt<N, H>, L> ]
		:
			[ false, ...SimpleNumberToBinary<N, L> ]
	: []

/**
 * @zh 数字转二进制格式
 * @en Number to binary
 * @example NumberToBinary<0> // [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
 */
export type NumberToBinary<N extends number> =
	DistributeUnions<[N]> extends [infer Ni extends number] ? Ni extends Ni ? SimpleNumberToBinary<Ni> : never : never;

type SimpleBinaryToNumber<B extends Binary, L extends boolean[] = B, BS extends number[] = Binarys, R extends number = 0> = 
	L extends [ infer F extends boolean, ...infer RL extends boolean[] ] ?
		BS extends [ infer H extends number, ...infer RB extends number[] ] ?
			F extends true ?
				RL extends [] ? AddInt<R, H> : SimpleBinaryToNumber<B, RL, RB, AddInt<R, H>>
			:
				RL extends [] ? R : SimpleBinaryToNumber<B, RL, RB, R>
		: R
	: R ;

/** 
 * @zh 二进制转化为数字
 */
export type BinaryToNumber<B extends Binary> = 
	DistributeUnions<[B]> extends [infer Bi extends Binary] ? Bi extends Bi ? SimpleBinaryToNumber<Bi> : never : never;

type SimpleNumberToBinaryString<B extends Binary | number, L extends boolean[] = B extends number ? NumberToBinary<B> : B, R extends string = ''> =
	L extends [ infer F extends boolean, ...infer Rest extends boolean[] ] ?
		Rest extends [] ?
			`${R}${F extends true ? 1 : 0}`
		:
			R extends '' ? 
				SimpleNumberToBinaryString<B, Rest, `0b${F extends true ? 1 : 0}`>
			:
				SimpleNumberToBinaryString<B, Rest, `${R}${F extends true ? 1 : 0}`>
	: never;

/**
 * @zh 二进制转二进制字符串
 */
export type NumberToBinaryString<B extends Binary | number> =
	DistributeUnions<[B]> extends [infer Bi extends Binary | number] ? Bi extends Bi ? SimpleNumberToBinaryString<Bi> : never : never;

type SimpleBinaryStringToBinary<T extends string, R extends boolean[] = []> = 
	T extends `0b${infer RT extends string}` ?
		SimpleBinaryStringToBinary<RT>
	:
		T extends `${infer F extends '0' | '1'}${infer O extends string}` ?
			F extends '0' ?
				SimpleBinaryStringToBinary<O, [...R, false]>
			:
				SimpleBinaryStringToBinary<O, [...R, true]>
		:
			GreatThen<ArrayLength<R>, BinarySize> extends true ?
				Slice<R, MinusInt<ArrayLength<R>, BinarySize>, ArrayLength<R>>
			: FillLeft<R, BinarySize, false>;
		

/**
 * @zh 二进制字符串转为数字
 */
export type BinaryStringToNumber<T extends string> = 
	DistributeUnions<[T]> extends [infer Ti extends string] ? Ti extends Ti ? BinaryToNumber<SimpleBinaryStringToBinary<T>> : never : never;