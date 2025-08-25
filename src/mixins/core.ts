import type { ReverseArray } from "../array";
import type { ReverseString } from "../string";


/**
 * @zh 反转.
 * 反转一个字符串或数组
 * @en Reverse a string or an array
 * @example Reverse<'abc'> // 'cba'
 * @example Reverse<[1, 2]> // [2, 1]
 */
export type Reverse<T extends string | unknown[]> = 
    T extends string ? ReverseString<T> : T extends unknown[] ? ReverseArray<T> : never;