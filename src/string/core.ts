import type { AddOne } from '../number';

/**
 * 反转一个字符串
 * Reverse a string or an array
 * @example ReverseString<'abc'> // 'cba'
 */
export type ReverseString<T extends string> = 
        T extends `${infer F}${infer Rest}` ? `${ReverseString<Rest>}${F}` : '';

/**
 * 获取字符串的长度的数字类型
 * Get the length of a string
 * @example StringLength<'123'> // 3
 * @example StringLength<string> // number
 */
export type StringLength<A extends string> = A extends '' ? 0 : A extends `${string}${infer R}` ? AddOne<StringLength<R>> : number;

/**
 * 如果传入的字符串不存在, 则用默认字符串代替
 * @param T - 待检查的字符串
 * @param D - 默认字符串
 * @example DefaultIfEmpty<'123', '234'> // '123'
 * @example DefaultIfEmpty<'', '234'> // '234'
 */
export type DefaultIfEmpty<T extends string | undefined | null, D extends string = ''> = 
	T extends undefined | null | '' ? D : T;
