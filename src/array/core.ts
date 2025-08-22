import type { DistributeUnions } from "../core";
import type { GreatThenOrEquals, MinusOne } from "../number";

/**
 * 反转一个数组
 * Reverse an array
 * @example ReverseArray<[1, 2]> // [2, 1]
 */
export type ReverseArray<T extends unknown[]> = 
		T extends [ infer F, ...infer Rest ] ? [ ...ReverseArray<Rest>, F ] : [];

/**
 * 获取数组具体长度的数字类型
 * Get the length of an array
 * @example ArrayLength<[1,2,3]> // 3
 * @example ArrayLength<any[]> // number
 */
export type ArrayLength<A extends unknown[]> = A['length'];

export type SimpleTakeArray<A extends unknown[], N extends number> =
	A extends { length: N } ? A : A extends [ ...infer P, unknown ] ? SimpleTakeArray<P, N> : never;

/**
 * 数组前 N 项组成的新的类型数组
 * A new array type composed of the first N items
 * @example TakeArray<[1, 2, 3], 2> // [1, 2]
 */
export type TakeArray<A extends unknown[], N extends number> =
    DistributeUnions<[A, N]> extends [infer Ai extends unknown[], infer Ni extends number] ? 
        Ai extends Ai ? Ni extends Ni ? SimpleTakeArray<Ai, Ni> : never : never : never;

export type SimpleSkipArray<A extends unknown[], N extends number> =
	N extends 0 ? A : A extends [ unknown, ...infer S ] ? SimpleSkipArray<S, MinusOne<N>> : never;

/**
 * 数组从 N 项开始往后组成的类型数组
 * A new array type composed of the items after N
 * @example SkipArray<[1, 2, 3], 2> // [3]
 */
export type SkipArray<A extends unknown[], N extends number> =
    DistributeUnions<[A, N]> extends [infer Ai extends unknown[], infer Ni extends number] ? 
        Ai extends Ai ? Ni extends Ni ? SimpleSkipArray<Ai, Ni> : never : never : never;

/**
 * 数组从 N 项开始往后至 S 项组成的类型数组
 * A new array type composed of the items from N to S
 * @example Slice<[1, 2, 3, 4, 5], 1, 3> // [2, 3]
 */
export type Slice<A extends T[], B extends number, E extends number> =
	SkipArray<TakeArray<A, E>, B>;


type SimpleFillLeft<T extends V[], L extends number, I extends V, V = unknown, R extends V[] = T> = 
	GreatThenOrEquals<ArrayLength<R>, L> extends true ? R : SimpleFillLeft<T, L, I, V, [I, ...R]>;

/**
 * 向数组左侧添加指定类型，获取一个指定长度的新数组
 */
export type FillLeft<T extends V[], L extends number, I extends V, V = unknown> = 
	DistributeUnions<[T, L, I]> extends [infer Ti extends V[], infer Li extends number, infer Ii extends V] ? 
        Ti extends Ti ? Li extends Li ? Ii extends Ii ? SimpleFillLeft<Ti, Li, Ii> : never : never : never : never;

		
type SimpleFillRight<T extends V[], L extends number, I extends V, V = unknown, R extends V[] = T> = 
	GreatThenOrEquals<ArrayLength<T>, L> extends true ? R : SimpleFillRight<T, L, I, V, [...R, I]>;

/**
 * 向数组右侧添加指定类型，获取一个指定长度的新数组
 */
export type FillRight<T extends V[], L extends number, I extends V, V = unknown> = 
	DistributeUnions<[T, L, I]> extends [infer Ti extends V[], infer Li extends number, infer Ii extends V] ? 
        Ti extends Ti ? Li extends Li ? Ii extends Ii ? SimpleFillRight<Ti, Li, Ii> : never : never : never : never;

/**
 * 生成指定长度的数组类型
 * @param T 数组元素的类型
 * @param L 数组的长度
 * @example GenerateArray<any, 2> // [any, any]
 * @example GenerateArray<any, 0> // []
 * @example GenerateArray<boolean, 1> // [boolean]
 */
export type GenerateArray<T, L extends number, R extends T[] = []> = 
	GreatThenOrEquals<L, 0> extends true ?
		ArrayLength<R> extends L ? R : GenerateArray<T, L, [...R, T]>
	: never;
