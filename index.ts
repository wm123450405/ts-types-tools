export declare namespace TypesTools {
	/**
	 * 反转一个字符串或字符串
	 * Reverse a string or an array
	 * @example Reverse<'abc'> // 'cba'
	 * @example Reverse<[1, 2]> // [2, 1]
	 */
	export type Reverse<T extends string | any[]> = 
		T extends string ?
			T extends `${infer F}${infer Rest}` ? `${Reverse<Rest>}${F}` : '' :
			T extends [ infer F, ...infer Rest ] ? [ ...Reverse<Rest>, F ] : [];

	/**
	 * 数字字符串类型转为数字类型
	 * string -> number
	 * @example ToNumber<'123'> // 123
	 */
	export type ToNumber<T extends string> = T extends `${infer N extends number}` ? N : never;

	/**
	 * 数字类型转为数字字符串类型
	 * number -> string
	 * @example ToString<123> // '123'
	 */
	export type ToString<T extends number> = `${T}`;

	/**
	 * 是否是整数,不能用于判断联合类型
	 * Are integers, cannot be used to determine union types
	 * @example IsInteger<123> // true
	 * @example IsInteger<123.1> // false
	 */
	export type IsInt<T extends number> = ToString<T> extends `${number | '' | '-'}.${infer D extends number}` ? D extends 0 ? true : false : true;

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
	export type IsUInt<T extends number> = ToString<T> extends `-${number}` ? false : IsInt<T>;

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
	 * 数字的整数部分
	 * Int part of a number
	 * @example IntPart<-1.5> // -1
	 * @example IntPart<1.5> // 1
	 * @example IntPart<-1> // -1
	 */
	export type IntPart<N extends number> = 
		ToString<N> extends `${infer I extends number | '' | '-'}.${number}` ? 
			I extends '' ? 0 : I extends '-' ? -0 : I : N;

	/**
	 * 数字的小数部分
	 * Decimal part of a number
	 * @example DecPart<-1.5> // 0.5
	 * @example DecPart<1.5> // 0.5
	 * @example DecPart<-1> // 0
	 */
	export type DecPart<N extends number> = 
		ToString<N> extends `${number | '' | '-'}.${number}` ? 
			ToString<N> extends `${number | '' | '-'}.${infer D}` ? ToNumber<`0.${D}`> : 0 :
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
		ToString<N> extends `-${number}` ? true : false;

	/**
	 * 判断一个数字是否为正数
	 * Check if a number is positive
	 * @param N 待判断数字类型(非联合类型) The number to check(non-union type)
	 * @example IsPositive<-1> // false
	 * @example IsPositive<1> // true
	 * @example IsPositive<0> // false
	 */
	export type IsPositive<N extends number> =
		N extends 0 ? false : ToString<N> extends `${number}` ? true : false;


	/**
	 * 指定整数+1后的数字类型
	 * Create a number type after adding 1 to an integer
	 * @param N 待+1数字类型(非负整数,非联合类型) The number to add one(non-negative integer, non-union type)
	 * @example AddOne<0> // 1
	 * @example AddOne<1> // 2
	 * @example AddOne<-1> // never
	 * @example AddOne<1.2> // never
	 */
	type AddOne<N extends number> = IsUInt<N> extends true ? 
		Reverse<ToString<N>> extends `${infer F}${infer Rest}` ? 
			F extends '8' ? ToNumber<`${Reverse<Rest>}9`> :
			F extends '7' ? ToNumber<`${Reverse<Rest>}8`> :
			F extends '6' ? ToNumber<`${Reverse<Rest>}7`> :
			F extends '5' ? ToNumber<`${Reverse<Rest>}6`> :
			F extends '4' ? ToNumber<`${Reverse<Rest>}5`> :
			F extends '3' ? ToNumber<`${Reverse<Rest>}4`> :
			F extends '2' ? ToNumber<`${Reverse<Rest>}3`> :
			F extends '1' ? ToNumber<`${Reverse<Rest>}2`> :
			F extends '0' ? ToNumber<`${Reverse<Rest>}1`> :
			Rest extends '' ? 10 : ToNumber<`${AddOne<ToNumber<Reverse<Rest>>>}0`> : 
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
	type MinusOne<N extends number> = IsUInt<N> extends true ? 
		N extends 0 ? never :
			Reverse<ToString<N>> extends `${infer F}${infer Rest}` ? 
				F extends '1' ? ToNumber<`${Reverse<Rest>}0`> :
				F extends '2' ? ToNumber<`${Reverse<Rest>}1`> :
				F extends '3' ? ToNumber<`${Reverse<Rest>}2`> :
				F extends '4' ? ToNumber<`${Reverse<Rest>}3`> :
				F extends '5' ? ToNumber<`${Reverse<Rest>}4`> :
				F extends '6' ? ToNumber<`${Reverse<Rest>}5`> :
				F extends '7' ? ToNumber<`${Reverse<Rest>}6`> :
				F extends '8' ? ToNumber<`${Reverse<Rest>}7`> :
				F extends '9' ? ToNumber<`${Reverse<Rest>}8`> :
				Rest extends '1' ? 9 : ToNumber<`${MinusOne<ToNumber<Reverse<Rest>>>}9`> : 
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
	type IntList<S extends number, L extends number, A extends number[] = []> = 
		IsUInt<S> extends true ?
			IsUInt<L> extends true ?
				number extends L ? number : A['length'] extends L ? A[number] : IntList<AddOne<S>, L, [...A, S]> :
			never :
		never;

	// type Substring<S extends string, B extends number, E extends number> = 
	// 	S extends `${string}${infer V}` ?
	// type Slice<T, A extends T[], B extends number, E extends number> =

}