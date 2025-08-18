namespace TypeTools {
	/**
	 * 反转一个字符串
	 * Reverse string
	 * @example Reverse<'abc'> // 'cba'
	 */
	type Reverse<T extends string> = T extends `${infer F}${infer Rest}` ? `${Reverse<Rest>}${F}` : '';

	/**
	 * 数字字符串类型转为数字类型
	 * string -> number
	 * @example ToNumber<'123'> // 123
	 */
	type ToNumber<T extends string> = T extends `${infer N extends number}` ? N : never;

	/**
	 * 数字类型转为数字字符串类型
	 * number -> string
	 * @example ToString<123> // '123'
	 */
	type ToString<T extends number> = `${T}`;

	/**
	 * 是否是整数
	 * Are integers
	 * @example IsInteger<123> // true
	 * @example IsInteger<123.1> // false
	 */
	type IsInt<T extends number> = `${T}` extends `${number | '' | '-'}.${infer D extends number}` ? D extends 0 ? true : false : true;

	/**
	 * 只能是整数
	 * Only integers
	 * @example AsInt<123> // 123
	 * @example AsInt<123.1> // never
	 */
	type AsInt<T extends number> = IsInt<T> extends true ? T : never;

	/**
	 * 是否是非负整数
	 * Are non-negative integers
	 * @example AsUInt<123> // true
	 * @example AsUInt<-123> // false
	 * @example AsUInt<123.1> // false
	 */
	type IsUInt<T extends number> = `${T}` extends `-${number}` ? false : IsInt<T>;

	/**
	 * 只能是非负整数
	 * Only non-negative integers
	 * @example AsUInt<123> // 123
	 * @example AsUInt<-123> // never
	 * @example AsUInt<123.1> // never
	 */
	type AsUInt<T extends number> = IsUInt<T> extends true ? T : never;

	/**
	 * 创建一个从 0 到 N 的数字序列类型,等效于: 0 | 1 | 2 | 3 | ... | N - 1
	 * Create a number sequence type from 0 to N, equivalent to: 0 | 1 | 2 | 3 | ... | N - 1
	 * @param N 数量(非负整数) count(non-negative integer)
	 * @example IntEnumerate<5> // 0 | 1 | 2 | 3 | 4
	 * @example IntEnumerate<0> // never
	 * @example IntEnumerate<-1> // never
	 * @example IntEnumerate<1.1> // never
	 */
	type IntEnumerate<N extends number, Acc extends number[] = []> = 
		IsUInt<N> extends true ?
			Acc['length'] extends N ? Acc[number] : 
			IntEnumerate<N, [...Acc, Acc['length']]> :
			never;
	/**
	 * 创建一个从 F 到 N 的数字序列类型, 等效于: F | F + 1 | F + 2 | .... | N - 1
	 * Create a number sequence type from F to N, equivalent to: F | F + 1 | F + 2 | .... | N - 1
	 * @param F 起始数字(非负整数) start(non-negative integer)
	 * @param N 结束数字(非负整数) end(non-negative integer)
	 * @example IntRange<0, 3> // 0 | 1 | 2
	 * @example IntRange<3, 5> // 3 | 4
	 * @example IntRange<5, 5> // never
	 * @example IntRange<5, 3> // never
	 * @example IntRange<-5, 5> // never
	 */
	type IntRange<F extends number, T extends number> =
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
	type IntPart<N extends number> = 
		ToString<N> extends `${infer I extends number | '' | '-'}.${number}` ? 
			I extends '' ? 0 : I extends '-' ? -0 : I : N;

	/**
	 * 数字的小数部分
	 * Decimal part of a number
	 * @example DecPart<-1.5> // 0.5
	 * @example DecPart<1.5> // 0.5
	 * @example DecPart<-1> // 0
	 */
	type DecPart<N extends number> = 
		ToString<N> extends `${number | '' | '-'}.${number}` ? 
			ToString<N> extends `${number | '' | '-'}.${infer D}` ? ToNumber<`0.${D}`> : 0 :
		0;

	/**
	 * 判断一个数字是否为负数
	 * Check if a number is negative
	 * @example IsNegative<-1> // true
	 * @example IsNegative<1> // false
	 * @example IsNegative<0> // false
	 */
	type IsNegative<N extends number> =
		ToString<N> extends `-${number}` ? true : false;

	/**
	 * 判断一个数字是否为正数
	 * Check if a number is positive
	 * @example IsPositive<-1> // false
	 * @example IsPositive<1> // true
	 * @example IsPositive<0> // false
	 */
	type IsPositive<N extends number> =
		N extends 0 ? false : ToString<N> extends `${number}` ? true : false;
}