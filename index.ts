export declare namespace TypesTools {

	type IntChar = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';

	type IntCharGreatThen<A extends IntChar, B extends IntChar> = 
		A extends B ? false : 
			A extends '0' ? false :
			A extends '1' ? B extends '0' ? true : false :
			A extends '2' ? B extends '0' | '1' ? true : false :
			A extends '3' ? B extends '0' | '1' | '2' ? true : false :
			A extends '4' ? B extends '0' | '1' | '2' | '3' ? true : false :
			A extends '5' ? B extends '0' | '1' | '2' | '3' | '4' ? true : false :
			A extends '6' ? B extends '0' | '1' | '2' | '3' | '4' | '5' ? true : false :
			A extends '7' ? B extends '0' | '1' | '2' | '3' | '4' | '5' | '6' ? true : false :
			A extends '8' ? B extends '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' ? true : false :
			A extends '9' ? B extends '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' ? true : false :
			false;
		
	type IntCharGreatThenOrEquals<A extends IntChar, B extends IntChar> = 
		A extends B ? true : IntCharGreatThen<A, B>;

	type IntStringGreatThen<A extends string, B extends string> =
		IntGreatThen<StringLength<A>, StringLength<B>> extends true ? true :
			StringLength<A> extends StringLength<B> ? 
				A extends `${infer AF extends IntChar}${infer AR}` ?
					B extends `${infer BF extends IntChar}${infer BR}` ?
						IntCharGreatThen<AF, BF> extends true ? true :
							IntStringGreatThen<AR, BR> :
						false :
					false :
				false;
	
	type DecStringGreatThen<A extends string, B extends string> =
		A extends `0.${infer AR}` ?
			B extends `0.${infer BR}` ?
				DecStringGreatThen<AR, BR> :
			false :
			A extends `${infer AF extends IntChar}${infer AR}` ?
				B extends `${infer BF extends IntChar}${infer BR}` ?
					IntCharGreatThen<AF, BF> extends true ? true :
						IntStringGreatThen<AR, BR> :
					true :
				false;

	type IntGreatThen<A extends number, B extends number> =
		A extends B ? false : IntStringGreatThen<ToString<A>, ToString<B>>;
		
	type IntGreatThenOrEquals<A extends number, B extends number> =
		A extends B ? true : IntStringGreatThen<ToString<A>, ToString<B>>;

	type DecGreatThen<A extends number, B extends number> =
		A extends B ? false : DecStringGreatThen<ToString<A>, ToString<B>>;

	type DecGreatThenOrEquals<A extends number, B extends number> =
		A extends B ? true : DecStringGreatThen<ToString<A>, ToString<B>>;

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
	 * 数字的符号部分
	 * Int part of a number
	 * @example IntPart<-1.5> // -1
	 * @example IntPart<1> // 1
	 * @example IntPart<0> // 1
	 */
	export type SignPart<N extends number> =
		ToString<N> extends `-${string}` ? -1 : 1;

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
	export type AddOne<N extends number> = IsUInt<N> extends true ? 
		ReverseString<ToString<N>> extends `${infer F}${infer Rest}` ? 
			F extends '8' ? ToNumber<`${ReverseString<Rest>}9`> :
			F extends '7' ? ToNumber<`${ReverseString<Rest>}8`> :
			F extends '6' ? ToNumber<`${ReverseString<Rest>}7`> :
			F extends '5' ? ToNumber<`${ReverseString<Rest>}6`> :
			F extends '4' ? ToNumber<`${ReverseString<Rest>}5`> :
			F extends '3' ? ToNumber<`${ReverseString<Rest>}4`> :
			F extends '2' ? ToNumber<`${ReverseString<Rest>}3`> :
			F extends '1' ? ToNumber<`${ReverseString<Rest>}2`> :
			F extends '0' ? ToNumber<`${ReverseString<Rest>}1`> :
			Rest extends '' ? 10 : ToNumber<`${AddOne<ToNumber<ReverseString<Rest>>>}0`> : 
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
			ReverseString<ToString<N>> extends `${infer F}${infer Rest}` ? 
				F extends '1' ? ToNumber<`${ReverseString<Rest>}0`> :
				F extends '2' ? ToNumber<`${ReverseString<Rest>}1`> :
				F extends '3' ? ToNumber<`${ReverseString<Rest>}2`> :
				F extends '4' ? ToNumber<`${ReverseString<Rest>}3`> :
				F extends '5' ? ToNumber<`${ReverseString<Rest>}4`> :
				F extends '6' ? ToNumber<`${ReverseString<Rest>}5`> :
				F extends '7' ? ToNumber<`${ReverseString<Rest>}6`> :
				F extends '8' ? ToNumber<`${ReverseString<Rest>}7`> :
				F extends '9' ? ToNumber<`${ReverseString<Rest>}8`> :
				Rest extends '1' ? 9 : ToNumber<`${MinusOne<ToNumber<ReverseString<Rest>>>}9`> : 
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
	 * 比较数字A是否大于B, 若A大于B则返回true, 否则返回false
	 * If A greater than B, return true, otherwise return false
	 * @param A - 待比较的数字A
	 * @param B - 待比较的数字B
	 * @example GreatThen<5, 2> // true
	 * @example GreatThen<2, 5> // false
	 * @example GreatThen<5, 5> // false
	 */
	export type GreatThen<A extends number, B extends number> =
		A extends B ? false : IntPart<A> extends IntPart<B> ? DecGreatThen<DecPart<A>, DecPart<B>> : 
			IntGreatThen<IntPart<A>, IntPart<B>>;
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
		A extends B ? true : IntPart<A> extends IntPart<B> ? DecGreatThenOrEquals<DecPart<A>, DecPart<B>> : 
			IntGreatThenOrEquals<IntPart<A>, IntPart<B>>;
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

	
}