import type { DistributeUnions } from '../core';
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


type c = StringLength<'123' | '3456345'> 
