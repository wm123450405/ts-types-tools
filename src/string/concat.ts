import type { DistributeUnions } from "../core";
import type { GreatThenOrEquals, MinusOne } from "../number";
import type { StringLength } from "./core";

type SimpleTakeString<A extends string, N extends number> =
	N extends 0 ? '' : A extends `${ infer F }${ infer R }` ? `${ F }${ SimpleTakeString<R, MinusOne<N>> }` : '';

/**
 * @zh 截取字符串前部分.
 * 字符串前 N 个字符组成的新字符串
 * @en A new string composed of the first N characters
 * @example TakeString<'abcdefg', 3> // 'abc'
 */
export type TakeString<A extends string, N extends number> =
	DistributeUnions<[A, N]> extends [infer Ai extends A, infer Ni extends N] ? 
            Ai extends Ai ? Ni extends Ni ? SimpleTakeString<Ai, Ni> : never : never : never;

            
type SimpleSkipString<A extends string, N extends number> =
	N extends 0 ? A : A extends `${ string }${ infer R }` ? SimpleSkipString<R, MinusOne<N>> : '';

/**
 * @zh 忽略字符串前部分.
 * 字符串从 N 项开始往后的所有字符组成的新字符串
 * @en A new string composed of all characters after N
 * @example SkipString<'abcdefg', 3> // 'defg'
 */
export type SkipString<A extends string, N extends number> =
	DistributeUnions<[A, N]> extends [infer Ai extends A, infer Ni extends N] ? 
            Ai extends Ai ? Ni extends Ni ? SimpleSkipString<Ai, Ni> : never : never : never;

/**
 * @zh 截取子字符串.
 * 字符串从 N 开始到 M 的所有字符组成的新字符串
 * @en A new string composed of all characters from N to M
 * @example Substring<'abcdefg', 2, 4> // 'cd'
 */
export type Substring<S extends string, B extends number, E extends number> = 
	SkipString<TakeString<S, E>, B>;

    
type SimplePadLeft<T extends string, L extends number, C extends string = ' '> = 
	GreatThenOrEquals<StringLength<T>, L> extends true ? T :
		SimplePadLeft<`${C}${T}`, L, C>;

/**
 * @zh 左侧填充.
 * 填充字符串左边
 * @en Pad left for a string
 * @param S - 待填充的字符串
 * @param N - 填充的个数
 * @param C - 填充的字符
 * @example PadLeft<'5', 3, '0'> // '005'
 * @example PadLeft<'5', 3> // '  5'
 * @example PadLeft<'555', 3> // '555'
 * @example PadLeft<'55555', 3> // '55555'
 */
export type PadLeft<T extends string, L extends number, C extends string = ' '> = 
    DistributeUnions<[T, L, C]> extends [infer Ti extends T, infer Li extends L, infer Ci extends C] ? 
        Ti extends Ti ? Li extends Li ? Ci extends Ci ? SimplePadLeft<Ti, Li, Ci> : never : never : never : never;
        
type SimplePadRight<T extends string, L extends number, C extends string = ' '> = 
	GreatThenOrEquals<StringLength<T>, L> extends true ? T :
		SimplePadRight<`${T}${C}`, L, C>;
/**
 * @zh 右侧填充.
 * 填充字符串右边
 * @en Pad right for a string
 * @param S - 待填充的 字符串
 * @param N - 填充的个数
 * @param C - 填充的 字符
 * @example PadRight<'5', 3, '0'> // '500'
 * @example PadRight<'5', 3> // '5  '
 * @example PadRight<'555', 3> // '555'
 * @example PadRight<'55555', 3> // '55555'
 */
export type PadRight<T extends string, L extends number, C extends string = ' '> = 
    DistributeUnions<[T, L, C]> extends [infer Ti extends T, infer Li extends L, infer Ci extends C] ? 
        SimplePadRight<Ti, Li, Ci> : never;

/**
 * @zh 修剪左侧.
 * 清除字符串左侧的重复字符
 * @param T - 待清除的字符串
 * @param C - 需要清除的重复字符
 * @example TrimLeft<' 123'> // '123'
 * @example TrimLeft<'0123', '0'> // '123'
 * @example TrimLeft<'0123'> // '0123'
 */
export type TrimLeft<T extends string, C extends string = ' '> = 
	T extends `${C}${infer R}` ? TrimLeft<R> : T

/**
 * @zh 修剪右侧.
 * 清除字符串右侧的重复字符
 * @param T - 待清除的字符串
 * @param C - 需要清除的重复字符
 * @example TrimRight<'123 '> // '123'
 * @example TrimRight<'1230', '0'> // '123'
 * @example TrimRight<'1230'> // '1230'
 */
export type TrimRight<T extends string, C extends string = ' '> = 
	T extends C ? "" : SkipString<T, MinusOne<StringLength<T>>> extends C ? TrimRight<TakeString<T, MinusOne<StringLength<T>>>, C> : T

/**
 * @zh 修剪.
 * 清除字符串的左侧和右侧的重复字符
 * @param T - 待清除的字符串
 * @param C - 需要清除的重复字符
 * @example Trim<' 123 '> // '123'
 * @example Trim<'0123', '0'> // '123'
 * @example Trim<'0123'> // '0123'
 */
export type Trim<T extends string, C extends string = ' '> =
	TrimLeft<TrimRight<T, C>, C>