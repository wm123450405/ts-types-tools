
/**
 * @zh 判断两个类型是否相同
 * @en Determine whether two types are the same
 * @example Same<boolean, boolean> // true
 * @example Same<boolean, number> // false
 */
export type Same<A, B> = 
    (<T>() => T extends A ? 1 : 2) extends
    (<T>() => T extends B ? 1 : 2) ? true : false;