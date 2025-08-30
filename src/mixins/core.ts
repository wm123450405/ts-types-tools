import type { ArrayLength, IsEmptyArray, ReverseArray } from "../array";
import type { IsEmptyObject } from "../object";
import type { ReverseString, StringLength } from "../string";


/**
 * @zh 反转.
 * 反转一个字符串或数组
 * @en Reverse a string or an array
 * @example Reverse<'abc'> // 'cba'
 * @example Reverse<[1, 2]> // [2, 1]
 */
export type Reverse<T extends string | readonly unknown[]> = 
    T extends string ? ReverseString<T> : T extends readonly unknown[] ? ReverseArray<T> : never;

/**
 * @zh 长度.
 * 获取字符串或数组的长度
 * @en Get the length of a string or an array
 * @example Length<'abc'> // 3
 * @example Length<[1, 2]> // 2
 */
export type Length<T extends string | readonly unknown[]> =
    T extends string ? StringLength<T> : T extends readonly unknown[] ? ArrayLength<T> : never;

/**
 * @zh 是否为空.
 * 判断数据是否为空
 * @en Is a data empty.
 * @example IsEmpty<undefined> // true
 * @example IsEmpty<null> // true
 * @example IsEmpty<''> // true
 * @example IsEmpty<[]> // true
 * @example IsEmpty<{}> // true
 * @example IsEmpty<'fads'> // false
 * @example IsEmpty<[1]> // false
 * @example IsEmpty<{a:1}> // false
 */
export type IsEmpty<T> = 
    T extends undefined | null | '' ? true : T extends readonly unknown[] ? IsEmptyArray<T> : T extends object ? IsEmptyObject<T> : false;