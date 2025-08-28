import type { ArrayLength, ReverseArray } from "../array";
import type { ReverseString, StringLength } from "../string";


/**
 * @zh 反转.
 * 反转一个字符串或数组
 * @en Reverse a string or an array
 * @example Reverse<'abc'> // 'cba'
 * @example Reverse<[1, 2]> // [2, 1]
 */
export type Reverse<T extends string | unknown[]> = 
    T extends string ? ReverseString<T> : T extends unknown[] ? ReverseArray<T> : never;

/**
 * @zh 长度.
 * 获取字符串或数组的长度
 * @en Get the length of a string or an array
 * @example Length<'abc'> // 3
 * @example Length<[1, 2]> // 2
 */
export type Length<T extends string | unknown[]> =
    T extends string ? StringLength<T> : T extends unknown[] ? ArrayLength<T> : never;

