import type { ArrayLength, FillLeft, GenerateArray, Slice } from "../array";
import type { GreatThen, GreatThenOrEquals } from "./compare";
import type { AddInt, MinusInt } from "./int";

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
 */
export type Binary = GenerateArray<boolean, ArrayLength<Binarys>>;

/**
 * @zh 数字转二进制格式
 */
export type NumberToBinary<N extends number, BS extends number[] = Binarys> = 
	BS extends [ infer H extends number, ...infer L extends number[] ] ?
		GreatThenOrEquals<N, H> extends true ?
			[ true, ...NumberToBinary<MinusInt<N, H>, L> ]
		:
			[ false, ...NumberToBinary<N, L> ]
	: []

/** 
 * @zh 二进制转化为数字
 */
export type BinaryToNumber<B extends Binary, L extends boolean[] = B, BS extends number[] = Binarys, R extends number = 0> = 
	L extends [ infer F extends boolean, ...infer RL extends boolean[] ] ?
		BS extends [ infer H extends number, ...infer RB extends number[] ] ?
			F extends true ?
				RL extends [] ? AddInt<R, H> : BinaryToNumber<B, RL, RB, AddInt<R, H>>
			:
				RL extends [] ? R : BinaryToNumber<B, RL, RB, R>
		: R
	: R ;


/**
 * @zh 二进制转二进制字符串
 */
export type NumberToBinaryString<B extends Binary | number, L extends boolean[] = B extends number ? NumberToBinary<B> : B, R extends string = ''> =
	L extends [ infer F extends boolean, ...infer Rest extends boolean[] ] ?
		Rest extends [] ?
			`${R}${F extends true ? 1 : 0}`
		:
			R extends '' ? 
				NumberToBinaryString<B, Rest, `0b${F extends true ? 1 : 0}`>
			:
				NumberToBinaryString<B, Rest, `${R}${F extends true ? 1 : 0}`>
	: never;

type BinaryStringToBinary<T extends string, R extends boolean[] = []> = 
	T extends `0b${infer RT extends string}` ?
		BinaryStringToBinary<RT>
	:
		T extends `${infer F extends '0' | '1'}${infer O extends string}` ?
			F extends '0' ?
				BinaryStringToBinary<O, [...R, false]>
			:
				BinaryStringToBinary<O, [...R, true]>
		:
			GreatThen<ArrayLength<R>, BinarySize> extends true ?
				Slice<R, MinusInt<ArrayLength<R>, BinarySize>, ArrayLength<R>>
			: FillLeft<R, BinarySize, false>;
		

/**
 * @zh 二进制字符串转为数字
 */
export type BinaryStringToNumber<T extends string> = BinaryToNumber<BinaryStringToBinary<T>>;