import type { BinaryStringToNumber } from './binary';

export type Signal = -1 | 1;

export type DecimalStringToNumber<T extends string> =
	T extends `${infer N extends number}` ? N : never;

/**
 * @zh 字符串转数字.
 * 数字字符串类型转为数字类型
 * @en string -> number
 * @example StringToNumber<'123'> // 123
 */
export type StringToNumber<T extends string> = 
	T extends `0b${number}` ? 
		BinaryStringToNumber<T>
	:
		DecimalStringToNumber<T>;

/**
 * @zh 数字转字符串.
 * 数字类型转为数字字符串类型
 * @en number -> string
 * @example NumberToString<123> // '123'
 */
export type NumberToString<T extends number> = `${T}`;


/**
 * @zh 符号.
 * 数字的符号部分
 * @en Signal part of a number
 * @example SignalPart<-1.5> // -1
 * @example SignalPart<1> // 1
 * @example SignalPart<0> // 1
 */
export type SignalPart<N extends number> =
	NumberToString<N> extends `-${string}` ? -1 : 1;

/**
 * @zh 是否负数.
 * 判断一个数字是否为负数
 * @en Check if a number is negative
 * @param N 待判断数字类型(非联合类型) The number to check(non-union type)
 * @example IsNegative<-1> // true
 * @example IsNegative<1> // false
 * @example IsNegative<0> // false
 */
export type IsNegative<N extends number> =
	NumberToString<N> extends `-${number}` ? true : false;

/**
 * @zh 是否正数.
 * 判断一个数字是否为正数
 * @en Check if a number is positive
 * @param N 待判断数字类型(非联合类型) The number to check(non-union type)
 * @example IsPositive<-1> // false
 * @example IsPositive<1> // true
 * @example IsPositive<0> // false
 */
export type IsPositive<N extends number> =
    N extends 0 ? false : NumberToString<N> extends `-${number}` ? false : true;

/**
 * @zh 绝对值.
 * @en Absolute value
 * @example Abs<-1> // 1
 * @example Abs<1> // 1
 * @example Abs<0> // 0
 */
export type Abs<N extends number> = NumberToString<N> extends `-${infer AN extends number}` ? AN : N;

/**
 * @zh 负号算法.
 * @en Negative
 * @example Negative<-2> // 2
 * @example Negative<2> // -2
 * @example Negative<0> // 0
 */
export type Negative<N extends number> = N extends 0 ? 0 : NumberToString<N> extends `-${infer AN extends number}` ? AN : `-${NumberToString<N>}` extends `${infer NN extends number}` ? NN : never;
