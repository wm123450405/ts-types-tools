import type { DistributeUnions } from "../core";
import type { ReverseString } from "../string";
import type { NumberToString, StringToNumber } from "./core";

type IntChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

type IntChar = IntChars[number];


/**
 * 是否是整数,不能用于判断联合类型
 * Are integers, cannot be used to determine union types
 * @example IsInt<123> // true
 * @example IsInt<123.1> // false
 */
export type IsInt<T extends number> = NumberToString<T> extends `${number | '' | '-'}.${infer D extends number}` ? D extends 0 ? true : false : true;

/**
 * 只能是整数,不能处理联合类型
 * Only integers, cannot handle union types
 * @example AsInt<123> // 123
 * @example AsInt<123.1> // never
 */
export type AsInt<T extends number> = IsInt<T> extends true ? T : never;

/**
 * 是否是非负整数,不能用于判断联合类型
 * Are non-negative integers, cannot be used to determine union types
 * @example IsUInt<123> // true
 * @example IsUInt<-123> // false
 * @example IsUInt<123.1> // false
 */
export type IsUInt<T extends number> = NumberToString<T> extends `-${number}` ? false : IsInt<T>;

/**
 * 只能是非负整数,不能处理联合类型
 * Only non-negative integers, cannot handle union types
 * @example AsUInt<123> // 123
 * @example AsUInt<-123> // never
 * @example AsUInt<123.1> // never
 */
export type AsUInt<T extends number> = IsUInt<T> extends true ? T : never;

export type SimpleIntEnumerate<N extends number, Acc extends number[] = []> =
	IsUInt<N> extends true ?
		Acc['length'] extends N ? Acc[number] : 
		SimpleIntEnumerate<N, [...Acc, Acc['length']]> :
		never;

/**
 * 创建一个从 0 到 N 的数字序列类型,等效于: 0 | 1 | 2 | 3 | ... | N - 1
 * Create a number sequence type from 0 to N, equivalent to: 0 | 1 | 2 | 3 | ... | N - 1
 * @param N 数量(非负整数,非联合类型) count(non-negative integer, non-union type)
 * @example IntEnumerate<5> // 0 | 1 | 2 | 3 | 4
 * @example IntEnumerate<0> // never
 * @example IntEnumerate<-1> // never
 * @example IntEnumerate<1.1> // never
 */
export type IntEnumerate<N extends number> = 
    DistributeUnions<[N]> extends [infer Ni extends number] ? Ni extends Ni ? SimpleIntEnumerate<Ni> : never : never;

/**
 * 创建一个从 F 到 N 的数字序列类型, 等效于: F | F + 1 | F + 2 | .... | N - 1
 * Create a number sequence type from F to N, equivalent to: F | F + 1 | F + 2 | .... | N - 1
 * @param F 起始数字(非负整数,非联合类型) start(non-negative integer, non-union type)
 * @param N 结束数字(非负整数,非联合类型) end(non-negative integer, non-union type)
 * @example IntRange<0, 3> // 0 | 1 | 2
 * @example IntRange<3, 5> // 3 | 4
 * @example IntRange<5, 5> // never
 * @example IntRange<5, 3> // never
 * @example IntRange<-5, 5> // never
 */
export type IntRange<F extends number, T extends number> =
	IsUInt<F> extends true ?
		IsUInt<T> extends true ?
			Exclude<IntEnumerate<T>, IntEnumerate<F>> :
		never :
	never;

type SimpleAddOne<N extends number> = IsUInt<N> extends true ? 
	ReverseString<NumberToString<N>> extends `${infer F extends IntChar}${infer Rest}` ? 
		F extends '8' ? StringToNumber<`${ReverseString<Rest>}9`> :
		F extends '7' ? StringToNumber<`${ReverseString<Rest>}8`> :
		F extends '6' ? StringToNumber<`${ReverseString<Rest>}7`> :
		F extends '5' ? StringToNumber<`${ReverseString<Rest>}6`> :
		F extends '4' ? StringToNumber<`${ReverseString<Rest>}5`> :
		F extends '3' ? StringToNumber<`${ReverseString<Rest>}4`> :
		F extends '2' ? StringToNumber<`${ReverseString<Rest>}3`> :
		F extends '1' ? StringToNumber<`${ReverseString<Rest>}2`> :
		F extends '0' ? StringToNumber<`${ReverseString<Rest>}1`> :
		Rest extends '' ? 10 : StringToNumber<`${SimpleAddOne<StringToNumber<ReverseString<Rest>>>}0`> : 
		0:
	never

/**
 * 指定整数+1后的数字类型
 * Create a number type after adding 1 to an integer
 * @param N 待+1数字类型(非负整数,非联合类型) The number to add one(non-negative integer, non-union type)
 * @example AddOne<0> // 1
 * @example AddOne<1> // 2
 * @example AddOne<-1> // never
 * @example AddOne<1.2> // never
 */
export type AddOne<N extends number> = 
    DistributeUnions<[N]> extends [infer Ni extends number] ? Ni extends Ni ? SimpleAddOne<Ni> : never : never;

type SimplMinusOne<N extends number> = IsUInt<N> extends true ? 
	N extends 0 ? never :
		ReverseString<NumberToString<N>> extends `${infer F extends IntChar}${infer Rest}` ? 
			F extends '1' ? StringToNumber<`${ReverseString<Rest>}0`> :
			F extends '2' ? StringToNumber<`${ReverseString<Rest>}1`> :
			F extends '3' ? StringToNumber<`${ReverseString<Rest>}2`> :
			F extends '4' ? StringToNumber<`${ReverseString<Rest>}3`> :
			F extends '5' ? StringToNumber<`${ReverseString<Rest>}4`> :
			F extends '6' ? StringToNumber<`${ReverseString<Rest>}5`> :
			F extends '7' ? StringToNumber<`${ReverseString<Rest>}6`> :
			F extends '8' ? StringToNumber<`${ReverseString<Rest>}7`> :
			F extends '9' ? StringToNumber<`${ReverseString<Rest>}8`> :
			Rest extends '1' ? 9 : StringToNumber<`${SimplMinusOne<StringToNumber<ReverseString<Rest>>>}9`> : 
			0:
	never;

/**
 * 指定整数-1后的数字类型
 * Create a type that subtracts one from a number.
 * @param N 待-1数字类型(正整数,非联合类型) The number to add one(positive integer, non-union type)
 * @example MinusOne<1> // 0
 * @example MinusOne<10> // 9
 * @example MinusOne<0> // never
 * @example MinusOne<1.5> // never
 */
export type MinusOne<N extends number> =
    DistributeUnions<[N]> extends [infer Ni extends number] ? Ni extends Ni ? SimplMinusOne<Ni> : never : never;

/**
 * 创建一个从 S 开始的指定数量 L 的数字序列类型, 等效于: F | F + 1 | F + 2 | .... | F + L - 1
 * Create a number sequence type from S and with length L, equivalent to: F | F + 1 | F + 2 | .... | F + L - 1
 * @param S 起始数字(非负整数,非联合类型) start(non-negative integer, non-union type)
 * @param L 序列数量(非负整数,非联合类型) length(non-negative integer, non-union type)
 * @example IntList<0, 3> // 0 | 1 | 2
 * @example IntList<3, 5> // 3 | 4 | 5 | 6 | 7 
 * @example IntList<5, 3> // 5 | 6 | 7
 * @example IntList<-5, 5> // never
 */
export type IntList<S extends number, L extends number, A extends number[] = []> = 
	IsUInt<S> extends true ?
		IsUInt<L> extends true ?
			number extends L ? number : A['length'] extends L ? A[number] : IntList<AddOne<S>, L, [...A, S]> :
		never :
	never;

type a = IntEnumerate<3 | 6>;
type b = IntRange<1, 3 | 10>;
type c = IntList<1, 3 | 10>;