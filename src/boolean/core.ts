/**
 * @zh 布尔值.
 * @en Boolean.
 * @example Boolean<true> // true
 * @example Boolean<false> // false
 * @example Boolean<''> // false
 * @example Boolean<0> // false
 * @example Boolean<undefined> // false
 * @example Boolean<null> // false
 * @example Boolean<1> // true
 * @example Boolean<'0'> // true
 * @example Boolean<{}> // true
 * @example Boolean<[]> // true
 * @example Boolean<boolean> // boolean
 * @example Boolean<number> // boolean
 * @example Boolean<string> // boolean
 * @example Boolean<object> // true
 * @example Boolean<unknown[]> // true
 */
export type Boolean<T> = 
	T extends boolean ? T : T extends '' | 0 | undefined | null ? false : T extends object | unknown[] ? true : 0 extends T ? boolean : '' extends T ? boolean : true;

/**
 * @zh 取否.
 * @en Not.
 * For boolean
 * @example Not<true> // false
 * @example Not<false> // true
 * @example Not<boolean> // never
 */
export type Not<T extends boolean> =
	boolean extends T ? 
		never :
		T extends true ? false : true;

/**
 * @zh 或.
 * @en Or.
 * For boolean
 * @usage Or<boolean[]>
 * @usage Or<boolean, boolean>
 * @example Or<true, true> // true
 * @example Or<true, false> // true
 * @example Or<false, true> // true
 * @example Or<false, false> // false
 * @example Or<[true, true, true]> // true
 * @example Or<[false, true, false]> // true
 * @example Or<[false, false, false]> // false
 * @example Or<boolean, true> // never
 */
export type Or<A extends boolean | readonly boolean[], B extends (A extends boolean ? boolean : never) = never> =
	boolean extends A ?
		never :
	boolean extends B ?
		never :
	A extends boolean ?
		B extends boolean ? 
			A extends true ? true : 
			B extends true ? true : 
			false :
		A :
	A extends [] ? 
		B :
	A extends [ infer F extends boolean, ...infer R extends readonly boolean[] ] ?
		R extends [] ? boolean extends F ? never : F : Or<Or<R>, F> : 
	never ;


/**
 * @zh 与.
 * @en And.
 * For boolean
 * @usage And<boolean[]>
 * @usage And<boolean, boolean>
 * @example And<true, true> // true
 * @example And<true, false> // false
 * @example And<false, true> // false
 * @example And<false, false> // false
 * @example And<[true, true, true]> // true
 * @example And<[false, true, false]> // false
 * @example And<[false, false, false]> // false
 * @example And<boolean, true> // never
 */
export type And<A extends boolean | readonly boolean[], B extends (A extends boolean ? boolean : never) = never> =
	boolean extends A ?
		never :
	boolean extends B ?
		never :
	A extends boolean ?
		B extends boolean ? 
			A extends false ? false : 
			B extends false ? false : 
			true :
		A :
	A extends [] ? 
		B :
	A extends [ infer F extends boolean, ...infer R extends readonly boolean[] ] ?
		R extends [] ? boolean extends F ? never : F : And<And<R>, F> : 
	never ;

/**
 * @zh 异或.
 * @en Xor.
 * For boolean
 * @usage Xor<boolean[]>
 * @usage Xor<boolean, boolean>
 * @example Xor<true, true> // true
 * @example Xor<true, false> // false
 * @example Xor<false, true> // false
 * @example Xor<false, false> // true
 * @example Xor<[true, true, true]> // true
 * @example Xor<[false, true, false]> // true
 * @example Xor<[false, false, false]> // false
 * @example Xor<boolean, true> // never
 */
export type Xor<A extends boolean | readonly boolean[], B extends (A extends boolean ? boolean : never) = never> =
	boolean extends A ?
		never :
	boolean extends B ?
		never :
	A extends boolean ?
		B extends boolean ? 
			A extends B ? true : false :
		A :
	A extends [] ? 
		B :
	A extends [ infer F extends boolean, ...infer R extends readonly boolean[] ] ?
		R extends [] ? boolean extends F ? never : F : Xor<Xor<R>, F> : 
	never ;