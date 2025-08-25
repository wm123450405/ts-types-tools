import type { NumberToString, StringToNumber } from "./core";

/**
 * @zh 数字的整数部分.
 * @en Int part of a number
 * @example IntPart<-1.5> // -1
 * @example IntPart<1.5> // 1
 * @example IntPart<-1> // -1
 */
export type IntPart<N extends number> = 
	NumberToString<N> extends `${infer I extends number | '' | '-'}.${number}` ? 
		I extends '' ? 0 : I extends '-' ? -0 : I : N;

/**
 * @zh 数字的小数部分.
 * @en Decimal part of a number
 * @example DecimalPart<-1.5> // 0.5
 * @example DecimalPart<1.5> // 0.5
 * @example DecimalPart<-1> // 0
 */
export type DecimalPart<N extends number> = 
	NumberToString<N> extends `${number | '' | '-'}.${number}` ? 
		NumberToString<N> extends `${number | '' | '-'}.${infer D}` ? StringToNumber<`0.${D}`> : 0 :
	0;
