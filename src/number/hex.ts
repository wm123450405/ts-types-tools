import type { ArrayLength, FillLeft, GenerateArray, Slice } from "../array";
import type { DistributeUnions } from "../core";
import type { Binary, BinarySize, BinaryToNumber, BinaryType, NumberToBinary } from "./binary";
import type { GreatThenOrEquals, GreatThen } from "./compare";
import type { AddInt, AddOne, IntChars, IntEnumerate, MinusInt } from "./int";

export type HexChars = [...IntChars, 'A', 'B', 'C', 'D', 'E', 'F']

export type HexChar = HexChars[number];

type HexSize = 8;

type HexValue = IntEnumerate<ArrayLength<HexChars>>;

type Hex = GenerateArray<HexChar, HexSize>;

type HexBinary = [BinaryType, BinaryType, BinaryType, BinaryType];

type HexCharToBinary<C extends HexChar> =
	C extends '0' ? [ false, false, false, false ] :
	C extends '1' ? [ false, false, false, true ] :
	C extends '2' ? [ false, false, true, false ] :
	C extends '3' ? [ false, false, true, true ] :
	C extends '4' ? [ false, true, false, false ] :
	C extends '5' ? [ false, true, false, true ] :
	C extends '6' ? [ false, true, true, false ] :
	C extends '7' ? [ false, true, true, true ] :
	C extends '8' ? [ true, false, false, false ] :
	C extends '9' ? [ true, false, false, true ] :
	C extends 'A' ? [ true, false, true, false ] :
	C extends 'B' ? [ true, false, true, true ] :
	C extends 'C' ? [ true, true, false, false ] :
	C extends 'D' ? [ true, true, false, true ] :
	C extends 'E' ? [ true, true, true, false ] :
	C extends 'F' ? [ true, true, true, true ] :
	never;

type BinaryToHexChar<H extends HexBinary> =
	H extends [ false, false, false, false ] ? '0' :
	H extends [ false, false, false, true ] ? '1' :
	H extends [ false, false, true, false ] ? '2' :
	H extends [ false, false, true, true ] ? '3' :
	H extends [ false, true, false, false ] ? '4' :
	H extends [ false, true, false, true ] ? '5' :
	H extends [ false, true, true, false ] ? '6' :
	H extends [ false, true, true, true ] ? '7' :
	H extends [ true, false, false, false ] ? '8' :
	H extends [ true, false, false, true ] ? '9' :
	H extends [ true, false, true, false ] ? 'A' :
	H extends [ true, false, true, true ] ? 'B' :
	H extends [ true, true, false, false ] ? 'C' :
	H extends [ true, true, false, true ] ? 'D' :
	H extends [ true, true, true, false ] ? 'E' :
	H extends [ true, true, true, true ] ? 'F' :
	never;

type SimpleBinaryToHexString<B extends BinaryType[]> =
	B extends [infer F0 extends BinaryType, infer F1 extends BinaryType, infer F2 extends BinaryType, infer F3 extends BinaryType, ...infer R extends BinaryType[]] ?
		`${BinaryToHexChar<[ F0, F1, F2, F3 ]>}${SimpleBinaryToHexString<R>}` : '';
		

/**
 * @zh 十六进制转十六进制字符串
 * @example NumberToHexString<0> // '0x00000000'
 * @example NumberToHexString<35646> // '0x00008B3E'
 */
export type NumberToHexString<H extends number> =
	DistributeUnions<[H]> extends [infer Hi extends H] ? NumberToBinary<Hi> extends infer Bi extends Binary ? `0x${SimpleBinaryToHexString<Bi>}` : never : never;

type SimpleHexStringToBinary<T extends string, R extends BinaryType[] = []> = 
	T extends `0x${infer RT extends string}` ?
		SimpleHexStringToBinary<RT>
	:
		T extends `${infer F extends HexChar}${infer O extends string}` ?
			SimpleHexStringToBinary<O, [...R, ...HexCharToBinary<F>]>
		:
			GreatThen<ArrayLength<R>, BinarySize> extends true ?
				Slice<R, MinusInt<ArrayLength<R>, BinarySize>, ArrayLength<R>>
			: FillLeft<R, BinarySize, '0'>;
		

/**
 * @zh 十六进制字符串转为数字
 * @example HexStringToNumber<'0x00008B3E'> // 35646
 * @example HexStringToNumber<'0x00000000'> // 0
 */
export type HexStringToNumber<T extends string> = 
	DistributeUnions<[T]> extends [infer Ti extends T] ? SimpleHexStringToBinary<Ti> extends infer Bi extends Binary ? BinaryToNumber<Bi> : never : never;
