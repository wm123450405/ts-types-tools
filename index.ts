import type { UnionOrIntersectionType, UnionType } from "typescript";

export declare namespace TypesTools {
	type Signal = -1 | 1;

	type IntChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

	type IntChar = IntChars[number];

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
			true :
			C extends '0' ? false : true;

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
				`${IntCharMinus<AF>}${MinusIntReverseString<AR, '', IntCharCarry<AF, '0', BORROW>>}` :
				`${AF}${MinusIntReverseString<AR, ''>}` :
		B extends `${infer BF extends IntChar}${infer BR}` ?
			BORROW extends true ?
				`${IntCharMinus<BF>}${MinusIntReverseString<'', BR, IntCharCarry<'0', BF, BORROW>>}` :
				`${BF}${MinusIntReverseString<'', BR>}` :
		BORROW extends true ? '-' : '';

	/**
	 * 取否
	 * Not for boolean
	 * @example Not<true> // false
	 * @example Not<false> // true
	 */
	export type Not<T extends boolean> =
		T extends true ? false : true;

	/**
	 * 反转一个字符串
	 * Reverse a string or an array
	 * @example Reverse<'abc'> // 'cba'
	 */
	export type ReverseString<T extends string> = 
			T extends `${infer F}${infer Rest}` ? `${Reverse<Rest>}${F}` : '';

	/**
	 * 反转一个数组
	 * Reverse an array
	 * @example Reverse<[1, 2]> // [2, 1]
	 */
	export type ReverseArray<T extends any[]> = 
			T extends [ infer F, ...infer Rest ] ? [ ...Reverse<Rest>, F ] : [];


	/**
	 * 反转一个字符串或数组
	 * Reverse a string or an array
	 * @example Reverse<'abc'> // 'cba'
	 * @example Reverse<[1, 2]> // [2, 1]
	 */
	export type Reverse<T extends string | any[]> = 
		T extends string ? ReverseString<T> : T extends any[] ? ReverseArray<T> : never;

	/**
	 * 数字字符串类型转为数字类型
	 * string -> number
	 * @example ToNumber<'123'> // 123
	 */
	export type StringToNumber<T extends string> = T extends `${infer N extends number}` ? N : never;

	/**
	 * 数字类型转为数字字符串类型
	 * number -> string
	 * @example ToString<123> // '123'
	 */
	export type NumberToString<T extends number> = `${T}`;

	/**
	 * 是否是整数,不能用于判断联合类型
	 * Are integers, cannot be used to determine union types
	 * @example IsInteger<123> // true
	 * @example IsInteger<123.1> // false
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
	 * @example AsUInt<123> // true
	 * @example AsUInt<-123> // false
	 * @example AsUInt<123.1> // false
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

	/**
	 * 创建一个从 0 到 N 的数字序列类型,等效于: 0 | 1 | 2 | 3 | ... | N - 1
	 * Create a number sequence type from 0 to N, equivalent to: 0 | 1 | 2 | 3 | ... | N - 1
	 * @param N 数量(非负整数,非联合类型) count(non-negative integer, non-union type)
	 * @example IntEnumerate<5> // 0 | 1 | 2 | 3 | 4
	 * @example IntEnumerate<0> // never
	 * @example IntEnumerate<-1> // never
	 * @example IntEnumerate<1.1> // never
	 */
	export type IntEnumerate<N extends number, Acc extends number[] = []> = 
		IsUInt<N> extends true ?
			Acc['length'] extends N ? Acc[number] : 
			IntEnumerate<N, [...Acc, Acc['length']]> :
			never;
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
	 * 数字的整数部分
	 * Int part of a number
	 * @example IntPart<-1.5> // -1
	 * @example IntPart<1.5> // 1
	 * @example IntPart<-1> // -1
	 */
	export type IntPart<N extends number> = 
		NumberToString<N> extends `${infer I extends number | '' | '-'}.${number}` ? 
			I extends '' ? 0 : I extends '-' ? -0 : I : N;

	/**
	 * 数字的小数部分
	 * Decimal part of a number
	 * @example DecimalPart<-1.5> // 0.5
	 * @example DecimalPart<1.5> // 0.5
	 * @example DecimalPart<-1> // 0
	 */
	export type DecimalPart<N extends number> = 
		NumberToString<N> extends `${number | '' | '-'}.${number}` ? 
			NumberToString<N> extends `${number | '' | '-'}.${infer D}` ? StringToNumber<`0.${D}`> : 0 :
		0;

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
		N extends 0 ? false : NumberToString<N> extends `${number}` ? true : false;


	/**
	 * 指定整数+1后的数字类型
	 * Create a number type after adding 1 to an integer
	 * @param N 待+1数字类型(非负整数,非联合类型) The number to add one(non-negative integer, non-union type)
	 * @example AddOne<0> // 1
	 * @example AddOne<1> // 2
	 * @example AddOne<-1> // never
	 * @example AddOne<1.2> // never
	 */
	export type AddOne<N extends number> = IsUInt<N> extends true ? 
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
			Rest extends '' ? 10 : StringToNumber<`${AddOne<StringToNumber<ReverseString<Rest>>>}0`> : 
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
	export type MinusOne<N extends number> = IsUInt<N> extends true ? 
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
				Rest extends '1' ? 9 : StringToNumber<`${MinusOne<StringToNumber<ReverseString<Rest>>>}9`> : 
				0:
		never;

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
	 * 获取数组具体长度的数字类型
	 * Get the length of an array
	 * @example ArrayLength<[1,2,3]> // 3
	 * @example ArrayLength<any[]> // number
	 */
	export type ArrayLength<A extends T[], T = any> = A['length'];

	/**
	 * 获取字符串的长度的数字类型
	 * Get the length of a string
	 * @example StringLength<'123'> // 3
	 * @example StringLength<string> // number
	 */
	export type StringLength<A extends string> = A extends '' ? 0 : A extends `${string}${infer R}` ? AddOne<StringLength<R>> : number;

	/**
	 * 数组前 N 项组成的新的类型数组
	 * A new array type composed of the first N items
	 * @example PrefixArray<[1, 2, 3], 2> // [1, 2]
	 */
	export type TakeArray<A extends T[], N extends number, T = any> =
		A extends { length: N } ? A : A extends [ ...infer P, T ] ? TakeArray<P, N> : never;

	/**
	 * 数组从 N 项开始往后组成的类型数组
	 * A new array type composed of the items after N
	 * @example SkipArray<[1, 2, 3], 2> // [3]
	 */
	export type SkipArray<A extends T[], N extends number, T = any> =
		N extends 0 ? A : A extends [ T, ...infer S ] ? SkipArray<S, MinusOne<N>> : never;

	/**
	 * 数组从 N 项开始往后至 S 项组成的类型数组
	 * A new array type composed of the items from N to S
	 * @example Slice<[1, 2, 3, 4, 5], 1, 3> // [2, 3]
	 */
	export type Slice<A extends T[], B extends number, E extends number, T = any> =
		SkipArray<TakeArray<A, E>, B>;

	/**
	 * 字符串前 N 个字符组成的新字符串
	 * A new string composed of the first N characters
	 * @example TakeString<'abcdefg', 3> // 'abc'
	 */
	export type TakeString<A extends string, N extends number> =
		N extends 0 ? '' : A extends `${ infer F }${ infer R }` ? `${ F }${ TakeString<R, MinusOne<N>> }` : '';

	/**
	 * 字符串从 N 项开始往后的所有字符组成的新字符串
	 * A new string composed of all characters after N
	 * @example SkipString<'abcdefg', 3> // 'fg'
	 */
	export type SkipString<A extends string, N extends number> =
		N extends 0 ? A : A extends `${ string }${ infer R }` ? SkipString<R, MinusOne<N>> : '';

	/**
	 * 字符串从 N 开始到 M 的所有字符组成的新字符串
	 * A new string composed of all characters from N to M
	 * @example Substring<'abcdefg', 2, 4> // 'cde'
	 */
	export type Substring<S extends string, B extends number, E extends number> = 
		TakeString<SkipString<S, B>, E>;


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
	export type Negative<N extends number> = NumberToString<N> extends `-${infer AN extends number}` ? AN : StringToNumber<`-${NumberToString<N>}`>;

	/**
	 * 比较数字A是否大于B, 若A大于B则返回true, 否则返回false
	 * If A greater than B, return true, otherwise return false
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
	 * 比较数字A是否大于等于B, 若A大于等于B则返回true, 否则返回false
	 * If A is great then or equals B, return true, otherwise return false
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
	 * 比较数字A是否小于B, 若A小于B则返回true, 否则返回false
	 * If A less than B, return true, otherwise return false
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
	 * 比较数字A是否小于等于B, 若A小于等于B则返回true, 否则返回false
	 * If A is less then or equals B, return true, otherwise return false
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
	 * 比较两个数据是否相同
	 * If A and B are the same, return true, otherwise return false
	 * @param A - 待比较的数据A
	 * @param B - 待比较的数据B
	 * @example Equals<5, 5> // true
	 * @example Equals<5, 2> // false
	 */
	export type Equals<A extends any, B extends any> = [A] extends [B] ? ([B] extends [A] ? true : false) : false;
	/** @see {@link Equals}*/
	export type EQ<A extends number, B extends number> = Equals<A, B>;

	/**
	 * 比较两个数据是否不同
	 * If A and B are not same, return true, otherwise return false
	 * @param A - 待比较的数据A
	 * @param B - 待比较的数据B
	 * @example Equals<5, 5> // false
	 * @example Equals<5, 2> // true
	 */
	export type NotEquals<A extends any, B extends any> = Not<Equals<A, B>>;
	/** @see {@link NotEquals} */
	export type NE<A extends number, B extends number> = NotEquals<A, B>;

	/**
	 * 填充字符串左边
	 * Pad left for a string
	 * @param S - 待填充的字符串
	 * @param N - 填充的个数
	 * @param C - 填充的字符
	 * @example PadLeft<'5', 3, '0'> // '005'
	 * @example PadLeft<'5', 3> // '  5'
	 * @example PadLeft<'555', 3> // '555'
	 * @example PadLeft<'55555', 3> // '55555'
	 */
	export type PadLeft<T extends string, L extends number, C extends string = " "> = 
		GreatThenOrEquals<StringLength<T>, L> extends true ? T :
			PadLeft<`${C}${T}`, L, C>;

	/**
	 * 填充字符串右边
	 * Pad right for a string
	 * @param S - 待填充的 字符串
	 * @param N - 填充的个数
	 * @param C - 填充的 字符
	 * @example PadRight<'5', 3, '0'> // '500'
	 * @example PadRight<'5', 3> // '5  '
	 * @example PadRight<'555', 3> // '555'
	 * @example PadRight<'55555', 3> // '55555'
	 */
	export type PadRight<T extends string, L extends number, C extends string = " "> = 
		GreatThenOrEquals<StringLength<T>, L> extends true ? T :
			PadRight<`${T}${C}`, L, C>;

	/**
	 * 清除字符串左侧的重复字符
	 * @param T - 待清除的字符串
	 * @param C - 需要清除的重复字符
	 * @example TrimLeft<' 123'> // '123'
	 * @example TrimLeft<'0123', '0'> // '123'
	 * @example TrimLeft<'0123'> // '0123'
	 */
	export type TrimLeft<T extends string, C extends string = " "> = 
		T extends `${infer _F extends C}${infer R}` ? TrimLeft<R> : T

	/**
	 * 清除字符串右侧的重复字符
	 * @param T - 待清除的字符串
	 * @param C - 需要清除的重复字符
	 * @example TrimRight<'123 '> // '123'
	 * @example TrimRight<'1230', '0'> // '123'
	 * @example TrimRight<'1230'> // '1230'
	 */
	export type TrimRight<T extends string, C extends string = " "> = 
		T extends C ? "" : SkipString<T, MinusOne<StringLength<T>>> extends C ? TrimRight<TakeString<T, MinusOne<StringLength<T>>>, C> : T

	/**
	 * 如果传入的字符串不存在, 则用默认字符串代替
	 * @param T - 待检查的字符串
	 * @param D - 默认字符串
	 * @example DefaultIfEmpty<'123', '234'> // '123'
	 * @example DefaultIfEmpty<'', '234'> // '234'
	 */
	export type DefaultIfEmpty<T extends string | undefined, D extends string> = 
		T extends undefined ? D : T extends "" ? D : T;

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

	/**
	 * 将具体是数组类型转化未联合类型
	 * @example ArrayToUnion<[1, 2, 3]> // 1 | 2 | 3
	 * @example ArrayToUnion<[ '1', '2', '3' ]> // '1' | '2' | '3'
	 * @example ArrayToUnion<[ boolean, number, false, null ]> // boolean | number | null
	 * @example ArrayToUnion<[ true, false ]> // boolean
	 */
	export type ArrayToUnion<A extends T[], T = any> =
		A extends [ infer F, ...infer R ] ? F | ArrayToUnion<R> : never;

	/**
	 * 获取一组数字中的最大数字类型
	 * @param A 一个数字，或一组数字
	 * @param B 若A为一个数字，这里给定另一个数字，否则不指定数据
	 * @example Max<1, 23> // 23
	 * @example Max<[1, 23]> // 23
	 * @example Max<[1, 23, 5]> // 23
	 * @example Max<[]> // never
	 */
	export type Max<A extends number | number[], B extends (A extends number ? number : never) = never> =
		A extends number ?
			B extends number ? 
				GreatThenOrEquals<A, B> extends true ? A : B
			: A :
		A extends [] ? 
			B :
		A extends [ infer F extends number, ...infer R extends number[] ] ?
			R extends [] ? F : Max<Max<R>, F> 
		: never ;

	/**
	 * 获取一组数字中的最小数字类型
	 * @param A 一个数字，或一组数字
	 * @param B 若A为一个数字，这里给定另一个数字，否则不指定数据
	 * @example Min<1, 23> // 1
	 * @example Min<[1, 23]> // 1
	 * @example Min<[8, 23, 5]> // 5
	 * @example Min<[]> // never
	 */
	export type Min<A extends number | number[], B extends (A extends number ? number : never) = never> =
		A extends number ?
			B extends number ? 
				GreatThenOrEquals<A, B> extends true ? B : A
			: A :
		A extends [] ? 
			B :
		A extends [ infer F extends number, ...infer R extends number[] ] ?
			R extends [] ? F : Min<Min<R>, F> 
		: never ;

	
}