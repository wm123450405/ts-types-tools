
/**
 * @zh 取否.
 * @en Not.
 * For boolean
 * @example Not<true> // false
 * @example Not<false> // true
 */
export type Not<T extends boolean> =
	T extends true ? false : true;