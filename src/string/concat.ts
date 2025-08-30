import type { DistributeUnions } from "../core";
import type { GreatThenOrEquals } from "../number";
import type { StringLength } from "./core";
    
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
 * @usage PadLeft<string, number>
 * @usage PadLeft<string, number, string>
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
 * @usage PadRight<string, number>
 * @usage PadRight<string, number, string>
 * @example PadRight<'5', 3, '0'> // '500'
 * @example PadRight<'5', 3> // '5  '
 * @example PadRight<'555', 3> // '555'
 * @example PadRight<'55555', 3> // '55555'
 */
export type PadRight<T extends string, L extends number, C extends string = ' '> = 
    DistributeUnions<[T, L, C]> extends [infer Ti extends T, infer Li extends L, infer Ci extends C] ? 
        SimplePadRight<Ti, Li, Ci> : never;