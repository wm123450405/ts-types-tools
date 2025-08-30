import type { Not } from "../boolean";
import type { StringLength } from "../string";
import type { Abs, NumberToString, Signal, SignalPart } from "./core";
import type { DecimalPart, IntPart } from "./decimal";
import type { IntChar } from "./int";

type SignalGreanThen<A extends Signal, B extends Signal> =
	A extends B ? false :
		A extends -1 ? false :
		A extends 1 ? B extends -1 ? true : false :
		false;

type IntCharGreatThen<A extends IntChar, B extends IntChar> = 
	A extends B ? false : 
		A extends '0' ? false :
		A extends '1' ? B extends '0' ? true : false :
		A extends '2' ? B extends '0' | '1' ? true : false :
		A extends '3' ? B extends '0' | '1' | '2' ? true : false :
		A extends '4' ? B extends '0' | '1' | '2' | '3' ? true : false :
		A extends '5' ? B extends '0' | '1' | '2' | '3' | '4' ? true : false :
		A extends '6' ? B extends '6' | '7' | '8' | '9' ? false : true :
		A extends '7' ? B extends '7' | '8' | '9' ? false : true :
		A extends '8' ? B extends '8' | '9' ? false : true :
		A extends '9' ? B extends '9' ? false : true :
		false;

type UIntStringGreatThen<A extends string, B extends string> =
	UIntGreatThen<StringLength<A>, StringLength<B>> extends true ? true :
		StringLength<A> extends StringLength<B> ? 
			A extends `${infer AF extends IntChar}${infer AR}` ?
				B extends `${infer BF extends IntChar}${infer BR}` ?
					AF extends BF ? 
						UIntStringGreatThen<AR, BR> :
						IntCharGreatThen<AF, BF> :
					false :
				false :
			false;

type DecimalStringGreatThen<A extends string, B extends string> =
	A extends `0.${infer AR}` ?
		B extends `0.${infer BR}` ?
			DecimalStringGreatThen<AR, BR> :
		false :
		A extends `${infer AF extends IntChar}${infer AR}` ?
			B extends `${infer BF extends IntChar}${infer BR}` ?
				AF extends BF ? 
					UIntStringGreatThen<AR, BR> : 
					IntCharGreatThen<AF, BF> :
				true :
			false;

type UIntGreatThen<A extends number, B extends number> =
	A extends B ? false : UIntStringGreatThen<NumberToString<A>, NumberToString<B>>;
	
type UIntGreatThenOrEquals<A extends number, B extends number> =
	A extends B ? true : UIntStringGreatThen<NumberToString<A>, NumberToString<B>>;

type DecimalGreatThen<A extends number, B extends number> =
	A extends B ? false : DecimalStringGreatThen<NumberToString<A>, NumberToString<B>>;

type DecimalGreatThenOrEquals<A extends number, B extends number> =
	A extends B ? true : DecimalStringGreatThen<NumberToString<A>, NumberToString<B>>;

/**
 * @zh 大于.
 * 比较数字A是否大于B, 若A大于B则返回true, 否则返回false
 * @en If A greater than B, return true, otherwise return false
 * @param A - 待比较的数字A
 * @param B - 待比较的数字B
 * @example GreatThen<5, 2> // true
 * @example GreatThen<2, 5> // false
 * @example GreatThen<5, 5> // false
 */
export type GreatThen<A extends number, B extends number> =
    A extends B ? false : 
        SignalPart<A> extends SignalPart<B> ?
            SignalPart<A> extends -1 ?
                LessThen<Abs<A>, Abs<B>> :
                IntPart<A> extends IntPart<B> ? 
                    DecimalGreatThen<DecimalPart<A>, DecimalPart<B>> : 
                    UIntGreatThen<IntPart<A>, IntPart<B>> : 
            SignalGreanThen<SignalPart<A>, SignalPart<B>>;
                
/** @see {@link GreatThen} */
export type GT<A extends number, B extends number> = GreatThen<A, B>;

/**
 * @zh 大于等于.
 * 比较数字A是否大于等于B, 若A大于等于B则返回true, 否则返回false
 * @en If A is great then or equals B, return true, otherwise return false
 * @param A - 待比较的数字A
 * @param B - 待比较的数字B
 * @example GreatThenOrEquals<5, 2> // true
 * @example GreatThenOrEquals<5, 5> // true
 * @example GreatThenOrEquals<5, 6> // false
 */
export type GreatThenOrEquals<A extends number, B extends number> =
    A extends B ? true : 
        SignalPart<A> extends SignalPart<B> ?
            SignalPart<A> extends -1 ?
                LessThenOrEquals<Abs<A>, Abs<B>> :
                IntPart<A> extends IntPart<B> ? 
                    DecimalGreatThenOrEquals<DecimalPart<A>, DecimalPart<B>> : 
                    UIntGreatThenOrEquals<IntPart<A>, IntPart<B>> :
            SignalGreanThen<SignalPart<A>, SignalPart<B>>;
/** @see {@link GreatThenOrEquals} */
export type GE<A extends number, B extends number> = GreatThenOrEquals<A, B>;

/**
 * @zh 小于.
 * 比较数字A是否小于B, 若A小于B则返回true, 否则返回false
 * @en If A less than B, return true, otherwise return false
 * @param A - 待比较的数字A
 * @param B - 待比较的数字B
 * @example LessThen<5, 2> // false
 * @example LessThen<2, 5> // true
 * @example LessThen<5, 5> // false
 */
export type LessThen<A extends number, B extends number> = Not<GreatThenOrEquals<A, B>>;
/** @see {@link LessThen} */
export type LT<A extends number, B extends number> = LessThen<A, B>;

/**
 * @zh 小于等于.
 * 比较数字A是否小于等于B, 若A小于等于B则返回true, 否则返回false
 * @en If A is less then or equals B, return true, otherwise return false
 * @param A - 待比较的数字A
 * @param B - 待比较的数字B
 * @example LessThenOrEquals<5, 2> // false
 * @example LessThenOrEquals<5, 5> // true
 * @example LessThenOrEquals<5, 6> // true
 */
export type LessThenOrEquals<A extends number, B extends number> = Not<GreatThen<A, B>>;
/** @see {@link LessThenOrEquals} */
export type LE<A extends number, B extends number> = LessThenOrEquals<A, B>;

/**
 * @zh 等于.
 * 比较两个数据是否相同
 * @en If A and B are the same, return true, otherwise return false
 * @param A - 待比较的数据A
 * @param B - 待比较的数据B
 * @example Equals<5, 5> // true
 * @example Equals<5, 2> // false
 */
export type Equals<A, B> = A extends B ? (B extends A ? true : false) : false;
/** @see {@link Equals}*/
export type EQ<A extends number, B extends number> = Equals<A, B>;

/**
 * @zh 不等于.
 * 比较两个数据是否不同
 * @en If A and B are not same, return true, otherwise return false
 * @param A - 待比较的数据A
 * @param B - 待比较的数据B
 * @example NotEquals<5, 5> // false
 * @example NotEquals<5, 2> // true
 */
export type NotEquals<A, B> = Not<Equals<A, B>>;
/** @see {@link NotEquals} */
export type NE<A extends number, B extends number> = NotEquals<A, B>;


/**
 * @zh 最大值.
 * 获取一组数字中的最大数字类型
 * @param A 一个数字，或一组数字
 * @param B 若A为一个数字，这里给定另一个数字，否则不指定数据
 * @usage Max<number[]>
 * @usage Max<number, number>
 * @example Max<1, 23> // 23
 * @example Max<[1, 23]> // 23
 * @example Max<[1, 23, 5]> // 23
 * @example Max<[]> // never
 */
export type Max<A extends number | readonly number[], B extends (A extends number ? number : never) = never> =
	A extends number ?
		B extends number ? 
			GreatThenOrEquals<A, B> extends true ? A : B : 
		A :
	A extends [] ? 
		B :
	A extends [ infer F extends number, ...infer R extends readonly number[] ] ?
		R extends [] ? F : Max<Max<R>, F> : 
	never ;

/**
 * @zh 最小值.
 * 获取一组数字中的最小数字类型
 * @param A 一个数字，或一组数字
 * @param B 若A为一个数字，这里给定另一个数字，否则不指定数据
 * @usage Min<number[]>
 * @usage Min<number, number>
 * @example Min<1, 23> // 1
 * @example Min<[1, 23]> // 1
 * @example Min<[8, 23, 5]> // 5
 * @example Min<[]> // never
 */
export type Min<A extends number | readonly number[], B extends (A extends number ? number : never) = never> =
	A extends number ?
		B extends number ? 
			GreatThenOrEquals<A, B> extends true ? B : A :
		A :
	A extends [] ? 
		B :
	A extends [ infer F extends number, ...infer R extends readonly number[] ] ?
		R extends [] ? F : Min<Min<R>, F> : 
	never ;