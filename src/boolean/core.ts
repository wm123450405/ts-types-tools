
/**
 * @zh 取否
 * @en Not for boolean
 * @summary 
 * @zh 取否
 * @en Not
 * @example Not<true> // false
 * @example Not<false> // true
 */
export type Not<T extends boolean> =
	T extends true ? false : true;