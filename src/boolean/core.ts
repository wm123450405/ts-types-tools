
/**
 * @zh 取否.
 * @en Not.
 * For boolean
 * @example Not<true> // false
 * @example Not<false> // true
 */
export type Not<T extends boolean> =
	T extends true ? false : true;

/**
 * @zh 或.
 * @en Or.
 * For boolean
 * @example Or<true, true> // true
 * @example Or<true, false> // true
 * @example Or<false, true> // true
 * @example Or<false, false> // false
 * @example Or<[true, true, true]> // true
 * @example Or<[false, true, false]> // true
 * @example Or<[false, false, false]> // false
 */
export type Or<A extends boolean | readonly boolean[], B extends (A extends boolean ? boolean : never) = never> =
	A extends boolean ?
		B extends boolean ? 
			A extends true ? true : B extends true ? true : false :
		A :
	A extends [] ? 
		B :
	A extends [ infer F extends boolean, ...infer R extends readonly boolean[] ] ?
		R extends [] ? F : Or<Or<R>, F> : 
	never ;


/**
 * @zh 与.
 * @en And.
 * For boolean
 * @example And<true, true> // true
 * @example And<true, false> // false
 * @example And<false, true> // false
 * @example And<false, false> // false
 * @example And<[true, true, true]> // true
 * @example And<[false, true, false]> // false
 * @example And<[false, false, false]> // false
 */
export type And<A extends boolean | readonly boolean[], B extends (A extends boolean ? boolean : never) = never> =
	A extends boolean ?
		B extends boolean ? 
			A extends false ? false : B extends false ? false : true :
		A :
	A extends [] ? 
		B :
	A extends [ infer F extends boolean, ...infer R extends readonly boolean[] ] ?
		R extends [] ? F : And<And<R>, F> : 
	never ;