import type { DistributeUnions, Same } from "../core";
import type { AddOne } from "../number";

/**
 * @zh 是否包含.
 * 判断数组是否包含某个元素
 * @en Include.
 * @example ArrayIncludes<[1, 2, 3], 2> // true
 * @example ArrayIncludes<[1, 2, 3], 4> // false
 */
export type ArrayIncludes<T extends readonly unknown[], V> =
	T extends [infer F, ...infer R extends readonly unknown[]] ?
		Same<F, V> extends true ? true : ArrayIncludes<R, V> :
	false;
	
/**
 * @zh 是否有满足.
 * 判断数组是否至少有一个元素满足某个条件
 * @en Whether there is a condition that is satisfied
 * @example ArraySome<[1, 2, 3], (((v: 2) => true) & ((v: 1 | 3) => false))> // true
 * @example ArraySome<[3, 3, 3], (((v: 2) => true) & ((v: 1 | 3) => false))> // false
 */
export type ArraySome<T extends readonly unknown[], M extends <V extends T[number]>(v: V) => boolean> =
	T extends [infer F extends T[number], ...infer R extends readonly unknown[]] ?
		M extends ((v: F) => true) ? true : ArraySome<R, M> :
	false;


/**
 * @zh 是否都满足.
 * 判断数组是否都满足某个条件
 * @en Whether all are satisfied
 * @example ArrayEvery<[1, 2, 3], (((v: 2) => true) & ((v: 1 | 3) => false))> // false
 * @example ArrayEvery<[2, 2, 2], (((v: 2) => true) & ((v: 1 | 3) => false))> // true
 */
export type ArrayEvery<T extends readonly unknown[], M extends <V extends T[number]>(v: V) => boolean> =
	T extends [infer F extends T[number], ...infer R extends readonly unknown[]] ?
		M extends ((v: F) => true) ? ArrayEvery<R, M> : false :
	true;

type SimpleArrayFindIndex<T extends readonly unknown[], M extends <V extends T[number]>(v: V) => boolean, I extends number = 0> =
	T extends [infer F extends T[number], ...infer R extends readonly unknown[]] ?
		M extends ((v: F) => true) ? I : SimpleArrayFindIndex<R, M, AddOne<I>> :
	-1;

/**
 * @zh 寻找索引.
 * 寻找数组中满足某个条件的索引
 * @en Find index.
 * @example ArrayFindIndex<[1, 2, 3], (((v: 2) => true) & ((v: 1 | 3) => false))> // 1
 * @example ArrayFindIndex<[2, 2, 2], (((v: 2) => true) & ((v: 1 | 3) => false))> // 0
 */
export type ArrayFindIndex<T extends readonly unknown[], M extends <V extends T[number]>(v: V) => boolean> =
	DistributeUnions<[T]> extends [infer Ti extends T] ? 
		Ti extends Ti ? SimpleArrayFindIndex<Ti, M> : never : never;

		
type SimpleArrayFindLastIndex<T extends readonly unknown[], M extends <V extends T[number]>(v: V) => boolean, I extends number = 0, L extends number = -1> =
	T extends [infer F extends T[number], ...infer R extends readonly unknown[]] ?
		M extends ((v: F) => true) ? SimpleArrayFindLastIndex<R, M, AddOne<I>, I> : SimpleArrayFindLastIndex<R, M, AddOne<I>, L> :
	L;

/**
 * @zh 寻找最后索引.
 * 寻找数组中满足某个条件的最后索引
 * @en Find last index.
 * @example ArrayFindLastIndex<[1, 2, 3], (((v: 2) => true) & ((v: 1 | 3) => false))> // 1
 * @example ArrayFindLastIndex<[2, 2, 2], (((v: 2) => true) & ((v: 1 | 3) => false))> // 2
 */
export type ArrayFindLastIndex<T extends readonly unknown[], M extends <V extends T[number]>(v: V) => boolean> =
	DistributeUnions<[T]> extends [infer Ti extends T] ? 
		Ti extends Ti ? SimpleArrayFindLastIndex<Ti, M> : never : never;


/**
 * @zh 索引.
 * 获取数组中某个元素的索引
 * @en Index.
 * @example ArrayIndexOf<[1, 2, 3], 2> // 1
 * @example ArrayIndexOf<[2, 2, 2], 2> // 0
 */		
export type ArrayIndexOf<T extends readonly unknown[], V> =
	ArrayFindIndex<T, (((v: V) => true) & ((v: T[number]) => false))>;

/**
 * @zh 最后索引.
 * 获取数组中某个元素的最后索引
 * @en Last index.
 * @example ArrayLastIndexOf<[1, 2, 3], 2> // 1
 * @example ArrayLastIndexOf<[2, 2, 2], 2> // 2
 */		
export type ArrayLastIndexOf<T extends readonly unknown[], V> =
	ArrayFindLastIndex<T, (((v: V) => true) & ((v: T[number]) => false))>;

