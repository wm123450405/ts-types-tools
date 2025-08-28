
/**
 * @zh 是否空对象.
 * @en Is an empty object.
 * @example IsEmptyObject<{}> // true
 * @example IsEmptyObject<{a:1}> // false
 * @example IsEmptyObject<object> // false
 */
export type IsEmptyObject<T extends object> =
	T extends { [ K: string | number | symbol ]: never } ? true : false;
