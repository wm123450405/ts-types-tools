import type { DistributeUnions, Same } from "../core";
import type { AddOne, GreatThenOrEquals, Min, MinusOne } from "../number";

/**
 * @zh 是否空数组.
 * @en Is an empty array.
 * @example IsEmptyArray<[]> // true
 * @example IsEmptyArray<[1, 2]> // false
 * @example IsEmptyArray<unknown[]> // false
 */
export type IsEmptyArray<T extends readonly unknown[]> =
		T extends [] ? true : false;

/**
 * @zh 反转数组.
 * 反转一个数组
 * @en Reverse an array
 * @example ReverseArray<[1, 2]> // [2, 1]
 */
export type ReverseArray<T extends readonly unknown[]> = 
		T extends [ infer F, ...infer Rest ] ? [ ...ReverseArray<Rest>, F ] : [];

/**
 * @zh 数组长度.
 * 获取数组具体长度的数字类型
 * @en Get the length of an array
 * @example ArrayLength<[1,2,3]> // 3
 * @example ArrayLength<unknown[]> // number
 */
export type ArrayLength<A extends readonly unknown[]> = A['length'];

type SimpleTakeArray<A extends readonly unknown[], N extends number> =
	A extends { length: N } ? A : A extends [ ...infer P, unknown ] ? SimpleTakeArray<P, N> : never;

/**
 * @zh 截取数组前 N 项.
 * 数组前 N 项组成的新的类型数组
 * @en A new array type composed of the first N items
 * @example TakeArray<[1, 2, 3], 2> // [1, 2]
 */
export type TakeArray<A extends readonly unknown[], N extends number> =
    DistributeUnions<[A, N]> extends [infer Ai extends A, infer Ni extends N] ? 
        Ai extends Ai ? Ni extends Ni ? SimpleTakeArray<Ai, Ni> : never : never : never;

type SimpleSkipArray<A extends readonly unknown[], N extends number> =
	N extends 0 ? A : A extends [ unknown, ...infer S ] ? SimpleSkipArray<S, MinusOne<N>> : never;

/**
 * @zh 忽略数组前 N 项.
 * 数组从 N 项开始往后组成的类型数组
 * @en A new array type composed of the items after N
 * @example SkipArray<[1, 2, 3], 2> // [3]
 */
export type SkipArray<A extends readonly unknown[], N extends number> =
    DistributeUnions<[A, N]> extends [infer Ai extends A, infer Ni extends N] ? 
        Ai extends Ai ? Ni extends Ni ? SimpleSkipArray<Ai, Ni> : never : never : never;

/**
 * @zh 提取子数组.
 * 数组从 N 项开始往后至 S 项组成的类型数组
 * @en A new array type composed of the items from N to S
 * @example Slice<[1, 2, 3, 4, 5], 1, 3> // [2, 3]
 */
export type Slice<A extends readonly unknown[], B extends number, E extends number> =
	SkipArray<TakeArray<A, E>, B>;


type SimpleFillLeft<T extends readonly V[], L extends number, I extends V, V = unknown, R extends readonly V[] = T> = 
	GreatThenOrEquals<ArrayLength<R>, L> extends true ? R : SimpleFillLeft<T, L, I, V, [I, ...R]>;

/**
 * @zh 左向填充数组.
 * 向数组左侧添加指定类型, 获取一个指定长度的新数组
 * @en Generate an array of a specified length, adding a specified type to the left
 * @usage FillLeft<unknown[], number, unknown>
 * @example FillLeft<[1, 2], 5, 0> // [0, 0, 0, 1, 2]
 */
export type FillLeft<T extends readonly V[], L extends number, I extends V, V = unknown> = 
	DistributeUnions<[T, L, I]> extends [infer Ti extends T, infer Li extends L, infer Ii extends I] ? 
        Ti extends Ti ? Li extends Li ? 
			boolean extends Ii ? SimpleFillLeft<Ti, Li, Ii> :
			Ii extends Ii ? SimpleFillLeft<Ti, Li, Ii> : never
		 : never : never : never;

		
type SimpleFillRight<T extends readonly V[], L extends number, I extends V, V = unknown, R extends readonly V[] = T> = 
	GreatThenOrEquals<ArrayLength<R>, L> extends true ? R : SimpleFillRight<T, L, I, V, [...R, I]>;

/**
 * @zh 右向填充数组.
 * 向数组右侧添加指定类型, 获取一个指定长度的新数组
 * @usage FillRight<unknown[], number, unknown>
 * @example FillRight<[1, 2], 5, 0> // [1, 2, 0, 0, 0]
 */
export type FillRight<T extends readonly V[], L extends number, I extends V, V = unknown> = 
	DistributeUnions<[T, L, I]> extends [infer Ti extends T, infer Li extends L, infer Ii extends I] ? 
        Ti extends Ti ? Li extends Li ? 
			boolean extends Ii ? SimpleFillLeft<Ti, Li, Ii> :
			Ii extends Ii ? SimpleFillRight<Ti, Li, Ii> : never 
		: never : never : never;

type SimpleGenerateArray<T, L extends number, R extends T[] = []> = 
	GreatThenOrEquals<L, 0> extends true ?
		ArrayLength<R> extends L ? R : SimpleGenerateArray<T, L, [...R, T]>
	: never;

/**
 * @zh 生成指定长度的数组类型
 * @param T 数组元素的类型
 * @param L 数组的长度
 * @usage GenerateArray<unknown, number>
 * @example GenerateArray<unknown, 2> // [unknown, unknown]
 * @example GenerateArray<unknown, 0> // []
 * @example GenerateArray<boolean, 1> // [boolean]
 */
export type GenerateArray<T, L extends number> = 
	DistributeUnions<[L]> extends [infer Li extends L] ? 
		Li extends Li ? SimpleGenerateArray<T, Li> : never : never;

type SimpleSortArray<T extends readonly number[], L extends number[] = [], M extends number = Min<T>> =
	T extends [M, ...infer R extends number[]] ? [M, ...SimpleSortArray<[...L, ...R], []>] : 
	T extends [infer F extends number, ...infer R extends number[]] ? SimpleSortArray<R, [...L, F], M> :
	[];

/**
 * @zh 数组排序.
 * @en Sort an array.
 * @example SortArray<[2, 1, 3]> // [1, 2, 3]
 * @example SortArray<[2, 1, 3, 2, 1, 3]> // [1, 1, 2, 2, 3, 3]
 */
export type SortArray<T extends readonly number[]> =
	DistributeUnions<[T]> extends [infer Ti extends T] ? 
		Ti extends Ti ? SimpleSortArray<Ti> : never : never

/**
 * @zh 是否包含.
 * 判断数组是否包含某个元素
 * @en Include.
 * @example Includes<[1, 2, 3], 2> // true
 * @example Includes<[1, 2, 3], 4> // false
 */
export type Includes<T extends readonly unknown[], V> =
	T extends [infer F, ...infer R extends readonly unknown[]] ?
		Same<F, V> extends true ? true : Includes<R, V> :
	false;
	
/**
 * @zh 是否有满足.
 * 判断数组是否至少有一个元素满足某个条件
 * @en Whether there is a condition that is satisfied
 * @example Some<[1, 2, 3], (((v: 2) => true) & ((v: 1 | 3) => false))> // true
 * @example Some<[3, 3, 3], (((v: 2) => true) & ((v: 1 | 3) => false))> // false
 */
export type Some<T extends readonly unknown[], M extends <V extends T[number]>(v: V) => boolean> =
	T extends [infer F extends T[number], ...infer R extends readonly unknown[]] ?
		M extends ((v: F) => true) ? true : Some<R, M> :
	false;


/**
 * @zh 是否都满足.
 * 判断数组是否都满足某个条件
 * @en Whether all are satisfied
 * @example Every<[1, 2, 3], (((v: 2) => true) & ((v: 1 | 3) => false))> // false
 * @example Every<[2, 2, 2], (((v: 2) => true) & ((v: 1 | 3) => false))> // true
 */
export type Every<T extends readonly unknown[], M extends <V extends T[number]>(v: V) => boolean> =
	T extends [infer F extends T[number], ...infer R extends readonly unknown[]] ?
		M extends ((v: F) => true) ? Every<R, M> : false :
	true;

type SimpleFindIndex<T extends readonly unknown[], M extends <V extends T[number]>(v: V) => boolean, I extends number = 0> =
	T extends [infer F extends T[number], ...infer R extends readonly unknown[]] ?
		M extends ((v: F) => true) ? I : SimpleFindIndex<R, M, AddOne<I>> :
	-1;

/**
 * @zh 寻找索引.
 * 寻找数组中满足某个条件的索引
 * @en Find index.
 * @example FindIndex<[1, 2, 3], (((v: 2) => true) & ((v: 1 | 3) => false))> // 1
 * @example FindIndex<[2, 2, 2], (((v: 2) => true) & ((v: 1 | 3) => false))> // 0
 */
export type FindIndex<T extends readonly unknown[], M extends <V extends T[number]>(v: V) => boolean> =
	DistributeUnions<[T]> extends [infer Ti extends T] ? 
		Ti extends Ti ? SimpleFindIndex<Ti, M> : never : never;

		
type SimpleFindLastIndex<T extends readonly unknown[], M extends <V extends T[number]>(v: V) => boolean, I extends number = 0, L extends number = -1> =
	T extends [infer F extends T[number], ...infer R extends readonly unknown[]] ?
		M extends ((v: F) => true) ? SimpleFindLastIndex<R, M, AddOne<I>, I> : SimpleFindLastIndex<R, M, AddOne<I>, L> :
	L;

/**
 * @zh 寻找最后索引.
 * 寻找数组中满足某个条件的最后索引
 * @en Find last index.
 * @example FindLastIndex<[1, 2, 3], (((v: 2) => true) & ((v: 1 | 3) => false))> // 1
 * @example FindLastIndex<[2, 2, 2], (((v: 2) => true) & ((v: 1 | 3) => false))> // 2
 */
export type FindLastIndex<T extends readonly unknown[], M extends <V extends T[number]>(v: V) => boolean> =
	DistributeUnions<[T]> extends [infer Ti extends T] ? 
		Ti extends Ti ? SimpleFindLastIndex<Ti, M> : never : never;


/**
 * @zh 索引.
 * 获取数组中某个元素的索引
 * @en Index.
 * @example IndexOf<[1, 2, 3], 2> // 1
 * @example IndexOf<[2, 2, 2], 2> // 0
 */		
export type IndexOf<T extends readonly unknown[], V> =
	FindIndex<T, (((v: V) => true) & ((v: T[number]) => false))>;

/**
 * @zh 最后索引.
 * 获取数组中某个元素的最后索引
 * @en Last index.
 * @example LastIndexOf<[1, 2, 3], 2> // 1
 * @example LastIndexOf<[2, 2, 2], 2> // 2
 */		
export type LastIndexOf<T extends readonly unknown[], V> =
	FindLastIndex<T, (((v: V) => true) & ((v: T[number]) => false))>;

