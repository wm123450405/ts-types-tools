import type { DistributeUnions } from "../core";
import type { DefaultIfEmpty, ReverseString, TrimRight } from "../string";
import type { GreatThenOrEquals } from "./compare";
import type { Abs, Negative, NumberToString, SignalPart, StringToNumber } from "./core";
import type { IntPart } from "./decimal";

export type IntChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

export type IntChar = IntChars[number];

type IntCharAdd<C extends IntChar, N extends IntChar = '1'> = 
	N extends '1' ?
		C extends '0' ? '1' :
		C extends '1' ? '2' :
		C extends '2' ? '3' :
		C extends '3' ? '4' :
		C extends '4' ? '5' :
		C extends '5' ? '6' :
		C extends '6' ? '7' :
		C extends '7' ? '8' :
		C extends '8' ? '9' :
		'0' :
	N extends '2' ?
		C extends '0' ? '2' :
		C extends '1' ? '3' :
		C extends '2' ? '4' :
		C extends '3' ? '5' :
		C extends '4' ? '6' :
		C extends '5' ? '7' :
		C extends '6' ? '8' :
		C extends '7' ? '9' :
		C extends '8' ? '0' :
		'1' :
	N extends '3' ?
		C extends '0' ? '3' :
		C extends '1' ? '4' :
		C extends '2' ? '5' :
		C extends '3' ? '6' :
		C extends '4' ? '7' :
		C extends '5' ? '8' :
		C extends '6' ? '9' :
		C extends '7' ? '0' :
		C extends '8' ? '1' :
		'2' :
	N extends '4' ?
		C extends '0' ? '4' :
		C extends '1' ? '5' :
		C extends '2' ? '6' :
		C extends '3' ? '7' :
		C extends '4' ? '8' :
		C extends '5' ? '9' :
		C extends '6' ? '0' :
		C extends '7' ? '1' :
		C extends '8' ? '2' :
		'3' :
	N extends '5' ?
		C extends '0' ? '5' :
		C extends '1' ? '6' :
		C extends '2' ? '7' :
		C extends '3' ? '8' :
		C extends '4' ? '9' :
		C extends '5' ? '0' :
		C extends '6' ? '1' :
		C extends '7' ? '2' :
		C extends '8' ? '3' :
		'4' :
	N extends '6' ?
		C extends '0' ? '6' :
		C extends '1' ? '7' :
		C extends '2' ? '8' :
		C extends '3' ? '9' :
		C extends '4' ? '0' :
		C extends '5' ? '1' :
		C extends '6' ? '2' :
		C extends '7' ? '3' :
		C extends '8' ? '4' :
		'5' :
	N extends '7' ?
		C extends '0' ? '7' :
		C extends '1' ? '8' :
		C extends '2' ? '9' :
		C extends '3' ? '0' :
		C extends '4' ? '1' :
		C extends '5' ? '2' :
		C extends '6' ? '3' :
		C extends '7' ? '4' :
		C extends '8' ? '5' :
		'6' :
	N extends '8' ?
		C extends '0' ? '8' :
		C extends '1' ? '9' :
		C extends '2' ? '0' :
		C extends '3' ? '1' :
		C extends '4' ? '2' :
		C extends '5' ? '3' :
		C extends '6' ? '4' :
		C extends '7' ? '5' :
		C extends '8' ? '6' :
		'7' :
	N extends '9' ?
		C extends '0' ? '9' :
		C extends '1' ? '0' :
		C extends '2' ? '1' :
		C extends '3' ? '2' :
		C extends '4' ? '3' :
		C extends '5' ? '4' :
		C extends '6' ? '5' :
		C extends '7' ? '6' :
		C extends '8' ? '7' :
		'8' :
	C;

type IntCharCarry<C extends IntChar, N extends IntChar, O extends boolean = false> = 
	N extends '1' ?
		O extends true ? 
			C extends '8' | '9' ? true : false :
			C extends '9' ? true : false :
	N extends '2' ?
		O extends true ? 
			C extends '7' | '8' | '9' ? true : false :
			C extends '8' | '9' ? true : false :
	N extends '3' ?
		O extends true ? 
			C extends '6' | '7' | '8' | '9' ? true : false :
			C extends '7' | '8' | '9' ? true : false :
	N extends '4' ?
		O extends true ? 
			C extends '5' | '6' | '7' | '8' | '9' ? true : false :
			C extends '6' | '7' | '8' | '9' ? true : false :
	N extends '5' ?
		O extends true ? 
			C extends '0' | '1' | '2' | '3' ? false : true :
			C extends '0' | '1' | '2' | '3' | '4' ? false : true :
	N extends '6' ?
		O extends true ? 
			C extends '0' | '1' | '2' ? false : true :
			C extends '0' | '1' | '2' | '3' ? false : true :
	N extends '7' ?
		O extends true ? 
			C extends '0' | '1' ? false : true :
			C extends '0' | '1' | '2' ? false : true :
	N extends '8' ?
		O extends true ? 
			C extends '0' ? false : true :
			C extends '0' | '1' ? false : true :
	N extends '9' ?
		O extends true ? true :
			C extends '0' ? false : true :
	O extends true ?
		C extends '9' ? true : false :
		false;

type IntCharMinus<C extends IntChar, N extends IntChar = '1'> = 
	N extends '1' ?
		C extends '9' ? '8' :
		C extends '8' ? '7' :
		C extends '7' ? '6' :
		C extends '6' ? '5' :
		C extends '5' ? '4' :
		C extends '4' ? '3' :
		C extends '3' ? '2' :
		C extends '2' ? '1' :
		C extends '1' ? '0' :
		'9' :
	N extends '2' ?
		C extends '9' ? '7' :
		C extends '8' ? '6' :
		C extends '7' ? '5' :
		C extends '6' ? '4' :
		C extends '5' ? '3' :
		C extends '4' ? '2' :
		C extends '3' ? '1' :
		C extends '2' ? '0' :
		C extends '1' ? '9' :
		'8' :
	N extends '3' ?
		C extends '9' ? '6' :
		C extends '8' ? '5' :
		C extends '7' ? '4' :
		C extends '6' ? '3' :
		C extends '5' ? '2' :
		C extends '4' ? '1' :
		C extends '3' ? '0' :
		C extends '2' ? '9' :
		C extends '1' ? '8' :
		'7' :
	N extends '4' ?
		C extends '9' ? '5' :
		C extends '8' ? '4' :
		C extends '7' ? '3' :
		C extends '6' ? '2' :
		C extends '5' ? '1' :
		C extends '4' ? '0' :
		C extends '3' ? '9' :
		C extends '2' ? '8' :
		C extends '1' ? '7' :
		'6' :
	N extends '5' ?
		C extends '9' ? '4' :
		C extends '8' ? '3' :
		C extends '7' ? '2' :
		C extends '6' ? '1' :
		C extends '5' ? '0' :
		C extends '4' ? '9' :
		C extends '3' ? '8' :
		C extends '2' ? '7' :
		C extends '1' ? '6' :
		'5' :
	N extends '6' ?
		C extends '9' ? '3' :
		C extends '8' ? '2' :
		C extends '7' ? '1' :
		C extends '6' ? '0' :
		C extends '5' ? '9' :
		C extends '4' ? '8' :
		C extends '3' ? '7' :
		C extends '2' ? '6' :
		C extends '1' ? '5' :
		'4' :
	N extends '7' ?
		C extends '9' ? '2' :
		C extends '8' ? '1' :
		C extends '7' ? '0' :
		C extends '6' ? '9' :
		C extends '5' ? '8' :
		C extends '4' ? '7' :
		C extends '3' ? '6' :
		C extends '2' ? '5' :
		C extends '1' ? '4' :
		'3' :
	N extends '8' ?
		C extends '9' ? '1' :
		C extends '8' ? '0' :
		C extends '7' ? '9' :
		C extends '6' ? '8' :
		C extends '5' ? '7' :
		C extends '4' ? '6' :
		C extends '3' ? '5' :
		C extends '2' ? '4' :
		C extends '1' ? '3' :
		'2' :
	N extends '9' ?
		C extends '9' ? '0' :
		C extends '8' ? '9' :
		C extends '7' ? '8' :
		C extends '6' ? '7' :
		C extends '5' ? '6' :
		C extends '4' ? '5' :
		C extends '3' ? '4' :
		C extends '2' ? '3' :
		C extends '1' ? '2' :
		'1' :
	C;
	
type IntCharBorrow<C extends IntChar, N extends IntChar, O extends boolean = false> = 
	N extends '1' ?
		O extends true ? 
			C extends '0' | '1' ? true : false :
			C extends '0' ? true : false :
	N extends '2' ?
		O extends true ? 
			C extends '0' | '1' | '2' ? true : false :
			C extends '0' | '1' ? true : false :
	N extends '3' ?
		O extends true ? 
			C extends '0' | '1' | '2' | '3' ? true : false :
			C extends '0' | '1' | '2' ? true : false :
	N extends '4' ?
		O extends true ? 
			C extends '0' | '1' | '2' | '3' | '4' ? true : false :
			C extends '0' | '1' | '2' | '3' ? true : false :
	N extends '5' ?
		O extends true ? 
			C extends '6' | '7' | '8' | '9' ? false : true :
			C extends '5' | '6' | '7' | '8' | '9' ? false : true :
	N extends '6' ?
		O extends true ? 
			C extends '7' | '8' | '9' ? false : true :
			C extends '6' | '7' | '8' | '9' ? false : true :
	N extends '7' ?
		O extends true ? 
			C extends '8' | '9' ? false : true :
			C extends '7' | '8' | '9' ? false : true :
	N extends '8' ?
		O extends true ? 
			C extends '9' ? false : true :
			C extends '8' | '9' ? false : true :
	N extends '9' ?
		O extends true ? true :
			C extends '9' ? false : true :
	O extends true ?
		C extends '0' ? true : false :
		false;

type AddIntReverseString<A extends string, B extends string, CARRY extends boolean = false> = 
	A extends `${infer AF extends IntChar}${infer AR}` ?
		B extends `${infer BF extends IntChar}${infer BR}` ?
			CARRY extends true ? 
				//进位
				`${IntCharAdd<IntCharAdd<AF, BF>>}${AddIntReverseString<AR, BR, IntCharCarry<AF, BF, CARRY>>}` :
				//不进位
				`${IntCharAdd<AF, BF>}${AddIntReverseString<AR, BR, IntCharCarry<AF, BF>>}` :
		CARRY extends true ?
			`${IntCharAdd<AF>}${AddIntReverseString<AR, '', IntCharCarry<AF, '0', CARRY>>}` :
			`${AF}${AddIntReverseString<AR, ''>}` :
	B extends `${infer BF extends IntChar}${infer BR}` ?
		CARRY extends true ?
			`${IntCharAdd<BF>}${AddIntReverseString<'', BR, IntCharCarry<'0', BF, CARRY>>}` :
			`${BF}${AddIntReverseString<'', BR>}` :
	CARRY extends true ? '1' : '';

type MinusIntReverseString<A extends string, B extends string, BORROW extends boolean = false> =
	A extends `${infer AF extends IntChar}${infer AR}` ?
		B extends `${infer BF extends IntChar}${infer BR}` ?
			BORROW extends true ?
				//借位
				`${IntCharMinus<IntCharMinus<AF, BF>>}${MinusIntReverseString<AR, BR, IntCharBorrow<AF, BF, BORROW>>}` :
				//不借位
				`${IntCharMinus<AF, BF>}${MinusIntReverseString<AR, BR, IntCharBorrow<AF, BF>>}` :
		BORROW extends true ?
			`${IntCharMinus<AF>}${MinusIntReverseString<AR, '', IntCharBorrow<AF, '0', BORROW>>}` :
			`${AF}${MinusIntReverseString<AR, ''>}` :
	B extends `${infer BF extends IntChar}${infer BR}` ?
		BORROW extends true ?
			`${IntCharMinus<BF>}${MinusIntReverseString<'', BR, IntCharBorrow<'0', BF, BORROW>>}` :
			`${BF}${MinusIntReverseString<'', BR>}` :
	BORROW extends true ? never : '';


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


/**
 * 两个整数的和
 * Sum of two integers
 * @param A - 待求和的整数
 * @param B - 待求和的整数
 * @example AddInt<0, 0> // 0
 * @example AddInt<10, 20> // 30
 * @example AddInt<5, 550> // 555
 */
export type AddInt<A extends number, B extends number> = 
	SignalPart<A> extends 1 ?
		SignalPart<B> extends 1 ?
			//正常求和
			StringToNumber<ReverseString<AddIntReverseString<ReverseString<NumberToString<IntPart<A>>>, ReverseString<NumberToString<IntPart<B>>>>>> :
			MinusInt<A, Abs<B>> :
		SignalPart<B> extends 1 ?
			MinusInt<B, Abs<A>> :
			Negative<AddInt<Abs<A>, Abs<B>>>;

/**
 * 两个整数的差
 * Minus of two integers
 * @param A - 被减数
 * @param B - 减数
 * @example MinusInt<0, 0> // 0
 * @example MinusInt<10, 20> // -10
 * @example MinusInt<550, 5> // 545
 */
export type MinusInt<A extends number, B extends number> = 
	SignalPart<A> extends 1 ?
		SignalPart<B> extends 1 ?
			GreatThenOrEquals<A, B> extends true ?
				//正常求差
				StringToNumber<ReverseString<DefaultIfEmpty<TrimRight<MinusIntReverseString<ReverseString<NumberToString<IntPart<A>>>, ReverseString<NumberToString<IntPart<B>>>>, '0'>, '0'>>> :
				Negative<MinusInt<B, A>> : 
			AddInt<A, Abs<B>> :
		SignalPart<B> extends 1 ?
			Negative<AddInt<Abs<A>, B>> :
			MinusInt<Abs<B>, Abs<A>>;