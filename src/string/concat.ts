import type { DistributeUnions } from "../core";
import type { GreatThenOrEquals, MinusOne } from "../number";
import type { StringLength } from "./core";

type SimpleTakeString<A extends string, N extends number> =
	N extends 0 ? '' : A extends `${ infer F }${ infer R }` ? `${ F }${ SimpleTakeString<R, MinusOne<N>> }` : '';

/**
 * @zh 截取
 * 字符串前 N 个字符组成的新字符串
 * A new string composed of the first N characters
 * @example TakeString<'abcdefg', 3> // 'abc'
 */
export type TakeString<A extends string, N extends number> =
	DistributeUnions<[A, N]> extends [infer Ai extends string, infer Ni extends number] ? 
            Ai extends Ai ? Ni extends Ni ? SimpleTakeString<Ai, Ni> : never : never : never;

            
type SimpleSkipString<A extends string, N extends number> =
	N extends 0 ? A : A extends `${ string }${ infer R }` ? SimpleSkipString<R, MinusOne<N>> : '';

/**
 * 字符串从 N 项开始往后的所有字符组成的新字符串
 * A new string composed of all characters after N
 * @example SkipString<'abcdefg', 3> // 'defg'
 */
export type SkipString<A extends string, N extends number> =
	DistributeUnions<[A, N]> extends [infer Ai extends string, infer Ni extends number] ? 
            Ai extends Ai ? Ni extends Ni ? SimpleSkipString<Ai, Ni> : never : never : never;

/**
 * 字符串从 N 开始到 M 的所有字符组成的新字符串
 * A new string composed of all characters from N to M
 * @example Substring<'abcdefg', 2, 4> // 'cd'
 */
export type Substring<S extends string, B extends number, E extends number> = 
	SkipString<TakeString<S, E>, B>;

    
type SimplePadLeft<T extends string, L extends number, C extends string = " "> = 
	GreatThenOrEquals<StringLength<T>, L> extends true ? T :
		SimplePadLeft<`${C}${T}`, L, C>;

/**
 * 填充字符串左边
 * Pad left for a string
 * @param S - 待填充的字符串
 * @param N - 填充的个数
 * @param C - 填充的字符
 * @example PadLeft<'5', 3, '0'> // '005'
 * @example PadLeft<'5', 3> // '  5'
 * @example PadLeft<'555', 3> // '555'
 * @example PadLeft<'55555', 3> // '55555'
 */
export type PadLeft<T extends string, L extends number, C extends string = " "> = 
    DistributeUnions<[T, L, C]> extends [infer Ti extends string, infer Li extends number, infer Ci extends string] ? 
        Ti extends Ti ? Li extends Li ? Ci extends Ci ? SimplePadLeft<Ti, Li, Ci> : never : never : never : never;
        
type SimplePadRight<T extends string, L extends number, C extends string = " "> = 
	GreatThenOrEquals<StringLength<T>, L> extends true ? T :
		SimplePadRight<`${T}${C}`, L, C>;
/**
 * 填充字符串右边
 * Pad right for a string
 * @param S - 待填充的 字符串
 * @param N - 填充的个数
 * @param C - 填充的 字符
 * @example PadRight<'5', 3, '0'> // '500'
 * @example PadRight<'5', 3> // '5  '
 * @example PadRight<'555', 3> // '555'
 * @example PadRight<'55555', 3> // '55555'
 */
export type PadRight<T extends string, L extends number, C extends string = " "> = 
    DistributeUnions<[T, L, C]> extends [infer Ti extends string, infer Li extends number, infer Ci extends string] ? 
        Ti extends Ti ? Li extends Li ? Ci extends Ci ? SimplePadRight<Ti, Li, Ci> : never : never : never : never;

/**
 * 清除字符串左侧的重复字符
 * @param T - 待清除的字符串
 * @param C - 需要清除的重复字符
 * @example TrimLeft<' 123'> // '123'
 * @example TrimLeft<'0123', '0'> // '123'
 * @example TrimLeft<'0123'> // '0123'
 */
export type TrimLeft<T extends string, C extends string = " "> = 
	T extends `${C}${infer R}` ? TrimLeft<R> : T

/**
 * 清除字符串右侧的重复字符
 * @param T - 待清除的字符串
 * @param C - 需要清除的重复字符
 * @example TrimRight<'123 '> // '123'
 * @example TrimRight<'1230', '0'> // '123'
 * @example TrimRight<'1230'> // '1230'
 */
export type TrimRight<T extends string, C extends string = " "> = 
	T extends C ? "" : SkipString<T, MinusOne<StringLength<T>>> extends C ? TrimRight<TakeString<T, MinusOne<StringLength<T>>>, C> : T


export type Trim<T extends string, C extends string = " "> =
	TrimLeft<TrimRight<T, C>, C>