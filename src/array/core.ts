import type { DistributeUnions } from "../core";
import type { GreatThenOrEquals, Max, Min, MinusOne } from "../number";

/**
 * @zh 是否空数组.
 * @en Is an empty array.
 * @example IsEmptyArray<[]> // true
 * @example IsEmptyArray<[1, 2]> // false
 * @example IsEmptyArray<unknown[]> // false
 */
export type IsEmptyArray<T extends unknown[]> =
		T extends [] ? true : false;

/**
 * @zh 反转数组.
 * 反转一个数组
 * @en Reverse an array
 * @example ReverseArray<[1, 2]> // [2, 1]
 */
export type ReverseArray<T extends unknown[]> = 
		T extends [ infer F, ...infer Rest ] ? [ ...ReverseArray<Rest>, F ] : [];

/**
 * @zh 数组长度.
 * 获取数组具体长度的数字类型
 * @en Get the length of an array
 * @example ArrayLength<[1,2,3]> // 3
 * @example ArrayLength<unknown[]> // number
 */
export type ArrayLength<A extends unknown[]> = A['length'];

type SimpleTakeArray<A extends unknown[], N extends number> =
	A extends { length: N } ? A : A extends [ ...infer P, unknown ] ? SimpleTakeArray<P, N> : never;

/**
 * @zh 截取数组前 N 项.
 * 数组前 N 项组成的新的类型数组
 * @en A new array type composed of the first N items
 * @example TakeArray<[1, 2, 3], 2> // [1, 2]
 */
export type TakeArray<A extends unknown[], N extends number> =
    DistributeUnions<[A, N]> extends [infer Ai extends A, infer Ni extends N] ? 
        Ai extends Ai ? Ni extends Ni ? SimpleTakeArray<Ai, Ni> : never : never : never;

type SimpleSkipArray<A extends unknown[], N extends number> =
	N extends 0 ? A : A extends [ unknown, ...infer S ] ? SimpleSkipArray<S, MinusOne<N>> : never;

/**
 * @zh 忽略数组前 N 项.
 * 数组从 N 项开始往后组成的类型数组
 * @en A new array type composed of the items after N
 * @example SkipArray<[1, 2, 3], 2> // [3]
 */
export type SkipArray<A extends unknown[], N extends number> =
    DistributeUnions<[A, N]> extends [infer Ai extends A, infer Ni extends N] ? 
        Ai extends Ai ? Ni extends Ni ? SimpleSkipArray<Ai, Ni> : never : never : never;

/**
 * @zh 提取子数组.
 * 数组从 N 项开始往后至 S 项组成的类型数组
 * @en A new array type composed of the items from N to S
 * @example Slice<[1, 2, 3, 4, 5], 1, 3> // [2, 3]
 */
export type Slice<A extends unknown[], B extends number, E extends number> =
	SkipArray<TakeArray<A, E>, B>;


type SimpleFillLeft<T extends V[], L extends number, I extends V, V = unknown, R extends V[] = T> = 
	GreatThenOrEquals<ArrayLength<R>, L> extends true ? R : SimpleFillLeft<T, L, I, V, [I, ...R]>;

/**
 * @zh 左向填充数组.
 * 向数组左侧添加指定类型, 获取一个指定长度的新数组
 * @en Generate an array of a specified length, adding a specified type to the left
 * @usage FillLeft<unknown[], number, unknown>
 * @example FillLeft<[1, 2], 5, 0> // [0, 0, 0, 1, 2]
 */
export type FillLeft<T extends V[], L extends number, I extends V, V = unknown> = 
	DistributeUnions<[T, L, I]> extends [infer Ti extends T, infer Li extends L, infer Ii extends I] ? 
        Ti extends Ti ? Li extends Li ? 
			boolean extends Ii ? SimpleFillLeft<Ti, Li, Ii> :
			Ii extends Ii ? SimpleFillLeft<Ti, Li, Ii> : never
		 : never : never : never;

		
type SimpleFillRight<T extends V[], L extends number, I extends V, V = unknown, R extends V[] = T> = 
	GreatThenOrEquals<ArrayLength<R>, L> extends true ? R : SimpleFillRight<T, L, I, V, [...R, I]>;

/**
 * @zh 右向填充数组.
 * 向数组右侧添加指定类型, 获取一个指定长度的新数组
 * @usage FillRight<unknown[], number, unknown>
 * @example FillRight<[1, 2], 5, 0> // [1, 2, 0, 0, 0]
 */
export type FillRight<T extends V[], L extends number, I extends V, V = unknown> = 
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
	DistributeUnions<[T, L]> extends [infer Ti extends T, infer Li extends L] ? 
		boolean extends Ti ? Li extends Li ? SimpleGenerateArray<Ti, Li> : never :
        Ti extends Ti ? Li extends Li ? SimpleGenerateArray<Ti, Li> : never : never : never;

export type SimpleSortArray<T extends number[], L extends number[] = [], M extends number = Min<T>> =
	T extends [M, ...infer R extends number[]] ? [M, ...SimpleSortArray<[...L, ...R], []>] : 
	T extends [infer F extends number, ...infer R extends number[]] ? SimpleSortArray<R, [...L, F], M> :
	[];

/**
 * @zh 数组排序.
 * @en Sort an array.
 * @example SortArray<[2, 1, 3]> // [1, 2, 3]
 * @example SortArray<[2, 1, 3, 2, 1, 3]> // [1, 1, 2, 2, 3, 3]
 */
export type SortArray<T extends number[]> =
	DistributeUnions<[T]> extends [infer Ti extends T] ? 
		Ti extends Ti ? SimpleSortArray<Ti> : never : never