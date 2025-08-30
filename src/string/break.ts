import type { DistributeUnions } from "../core";
import type { MinusOne } from "../number";
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


/**
 * @zh 修剪左侧.
 * 清除字符串左侧的重复字符
 * @param T - 待清除的字符串
 * @param C - 需要清除的重复字符
 * @usage TrimLeft<string>
 * @usage TrimLeft<string, string>
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
 * @usage TrimRight<string>
 * @usage TrimRight<string, string>
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
 * @usage Trim<string>
 * @usage Trim<string, string>
 * @example Trim<' 123 '> // '123'
 * @example Trim<'0123', '0'> // '123'
 * @example Trim<'0123'> // '0123'
 */
export type Trim<T extends string, C extends string = ' '> =
	TrimLeft<TrimRight<T, C>, C>

type SimpleSplit<S extends string, C extends string | undefined = undefined> =
    string extends S ? 
        S[]
    : S extends `${infer L}${C}${infer R}` ? 
            [L, ...SimpleSplit<R, C>]
        :
            S extends C ? [] : [S] 

/**
 * @zh 拆分.
 * @en Split.
 * @usage Split<string>
 * @usage Split<string, string>
 * @example Split<'Hi! How are you?'> // ['Hi! How are you?']
 * @example Split<'Hi! How are you?', 'z'> // ['Hi! How are you?']
 * @example Split<'Hi! How are you?', ' '> // ['Hi!', 'How', 'are', 'you?']
 * @example Split<'Hi! How are you?', ''> // ['H', 'i', '!', ' ', 'H', 'o', 'w', ' ', 'a', 'r', 'e', ' ', 'y', 'o', 'u', '?']
 * @example Split<'', ''> // []
 * @example Split<'The sine in cosine', 'in'> // ['The s', 'e ', ' cos', 'e']
 * @example Split<'Never say never, forever and ever.', 'ver'> // ['Ne', ' say ne', ', fore', ' and e', '.']
 * @example Split<'', 'z'> // ['']
 * @example Split<''> // ['']
 * @example Split<string, 'whatever'> // string[]
 */
export type Split<S extends string, C extends string | undefined = undefined> =
    DistributeUnions<[S, C]> extends [infer Ti extends S, infer Ci extends C] ?
        Ti extends Ti ? Ci extends Ci ? SimpleSplit<Ti, Ci> : never : never : never;

