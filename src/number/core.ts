import type { BinaryStringToNumber } from './binary';

export type Signal = -1 | 1;

/**
 * 数字字符串类型转为数字类型
 * string -> number
 * @example StringToNumber<'123'> // 123
 */
export type StringToNumber<T extends string> = 
	T extends `0b${number}` ? 
		BinaryStringToNumber<T>
	:
		T extends `${infer N extends number}` ? N : never;

/**
 * 数字类型转为数字字符串类型
 * number -> string
 * @example NumberToString<123> // '123'
 */
export type NumberToString<T extends number> = `${T}`;


/**
 * 数字的符号部分
 * Signal part of a number
 * @example SignalPart<-1.5> // -1
 * @example SignalPart<1> // 1
 * @example SignalPart<0> // 1
 */
export type SignalPart<N extends number> =
	NumberToString<N> extends `-${string}` ? -1 : 1;

/**
 * 判断一个数字是否为负数
 * Check if a number is negative
 * @param N 待判断数字类型(非联合类型) The number to check(non-union type)
 * @example IsNegative<-1> // true
 * @example IsNegative<1> // false
 * @example IsNegative<0> // false
 */
export type IsNegative<N extends number> =
	NumberToString<N> extends `-${number}` ? true : false;

/**
 * 判断一个数字是否为正数
 * Check if a number is positive
 * @param N 待判断数字类型(非联合类型) The number to check(non-union type)
 * @example IsPositive<-1> // false
 * @example IsPositive<1> // true
 * @example IsPositive<0> // false
 */
export type IsPositive<N extends number> =
    N extends 0 ? false : NumberToString<N> extends `-${number}` ? false : true;

/**
 * 绝对值
 * Absolute value
 * @example Abs<-1> // 1
 * @example Abs<1> // 1
 * @example Abs<0> // 0
 */
export type Abs<N extends number> = NumberToString<N> extends `-${infer AN extends number}` ? AN : N;

/**
 * 负号算法
 * Negative
 * @example Nagative<-2> // 2
 * @example Nagative<2> // -2
 * @example Nagative<0> // 0
 */
export type Negative<N extends number> = N extends 0 ? 0 : NumberToString<N> extends `-${infer AN extends number}` ? AN : `-${NumberToString<N>}` extends `${infer NN extends number}` ? NN : never;
