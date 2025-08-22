
/**
 * 反转一个数组
 * Reverse an array
 * @example ReverseArray<[1, 2]> // [2, 1]
 */
export type ReverseArray<T extends unknown[]> = 
		T extends [ infer F, ...infer Rest ] ? [ ...ReverseArray<Rest>, F ] : [];

/**
 * 获取数组具体长度的数字类型
 * Get the length of an array
 * @example ArrayLength<[1,2,3]> // 3
 * @example ArrayLength<any[]> // number
 */
export type ArrayLength<A extends unknown[]> = A['length'];