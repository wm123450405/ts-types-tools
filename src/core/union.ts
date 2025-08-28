// import type { Equal, Expect } from '@type-challenges/utils'

type Param<F> = [F] extends [(p: infer P) => void] ? P : never;
type Intersection<T> = Param<T extends unknown ? (p: T) => void : never>;

type PickKeyValues<T, K extends keyof T, V> = [V extends V ? {[K1 in K]: V} : never];

type DistributeObj<T, K extends keyof T = keyof T> = (Intersection<K extends K ? PickKeyValues<T, K, Distribute<T[K]>> : never> & [unknown])[0];

type DistributeArr<A extends unknown[], R extends unknown[] = []> = A extends [infer F, ...infer T]
    ? Distribute<F> extends infer Fi ? boolean extends Fi ? DistributeArr<T, [...R, Fi]> : Fi extends Fi ? DistributeArr<T, [...R, Fi]> : never : never
    : R;

type Distribute<T> = T extends unknown[] ? DistributeArr<T> : T extends object ? DistributeObj<T> : T;

type Normalize<T> = T extends object ? {[K in keyof T]: Normalize<T[K]>} : T;

export type DistributeUnions<T> = Normalize<Distribute<T>>;

// type c = DistributeUnions<[{ x: 'a' | 'b', y: 'c' | 'd' }]>;

// type cases = [
//   Expect<Equal<DistributeUnions<1>, 1>>,
//   Expect<Equal<DistributeUnions<string>, string>>,
//   Expect<Equal<DistributeUnions<1 | 2>, 1 | 2>>,
//   Expect<Equal<DistributeUnions<'b' | { type: 'a' } | [1]>, 'b' | { type: 'a' } | [1]>>,
//   // Already distributed unions should stay the same:
//   Expect<Equal<DistributeUnions<[1]>, [1]>>,
//   Expect<Equal<DistributeUnions<[string]>, [string]>>,
//   Expect<Equal<DistributeUnions<[1 | 2]>, [1] | [2]>>,
//   Expect<Equal<DistributeUnions<['b' | { type: 'a' } | [1]]>, ['b'] | [{ type: 'a' }] | [[1]]>>,
//   // tuples:
//   Expect<Equal<DistributeUnions<[1 | 2, 3]>, [1, 3] | [2, 3]>>,
//   Expect<Equal<DistributeUnions<[1 | 2, 'a' | 'b']>, [1, 'a'] | [1, 'b'] | [2, 'a'] | [2, 'b']>>,
//   Expect<
//   Equal<
//   DistributeUnions<[1 | 2, 'a' | 'b', false | true]>,
//   | [1, 'a', false]
//   | [1, 'a', true]
//   | [1, 'b', false]
//   | [1, 'b', true]
//   | [2, 'a', false]
//   | [2, 'a', true]
//   | [2, 'b', false]
//   | [2, 'b', true]
//   >
//   >,
//   // objects
//   Expect<
//   Equal<
//   DistributeUnions<[{ x: 'a' | 'b', y: 'c' | 'd' }]>,
//   [{ x: 'a', y: 'c' }] | [{ x: 'a', y: 'd' }] | [{ x: 'b', y: 'c' }] | [{ x: 'b', y: 'd' }]
//   >
//   >,
//   Expect<
//   Equal<
//   DistributeUnions<{ type: 'a', value: number | string } | { type: 'b', value: boolean }>,
//   | { type: 'a', value: string }
//   | { type: 'a', value: number }
//   | { type: 'b', value: false }
//   | { type: 'b', value: true }
//   >
//   >,
//   Expect<
//   Equal<
//   DistributeUnions<
//     | {
//       type: 'a'
//       option: { kind: 'none' } | { kind: 'some', value: 'x' | 'y' }
//     }
//     | { type: 'b', msg: string }
//   >,
//   | { type: 'b', msg: string }
//   | { type: 'a', option: { kind: 'none' } }
//   | { type: 'a', option: { kind: 'some', value: 'x' } }
//   | { type: 'a', option: { kind: 'some', value: 'y' } }
//   >
//   >,
//   // mixed structures:
//   Expect<
//   Equal<
//   DistributeUnions<[false | true, { value: 'a' | 'b' }, { x: { y: 2 | 3 } }]>,
//   | [false, { value: 'a' }, { x: { y: 2 } }]
//   | [false, { value: 'a' }, { x: { y: 3 } }]
//   | [false, { value: 'b' }, { x: { y: 2 } }]
//   | [false, { value: 'b' }, { x: { y: 3 } }]
//   | [true, { value: 'a' }, { x: { y: 2 } }]
//   | [true, { value: 'a' }, { x: { y: 3 } }]
//   | [true, { value: 'b' }, { x: { y: 2 } }]
//   | [true, { value: 'b' }, { x: { y: 3 } }]
//   >
//   >,
//   Expect<
//   Equal<
//   DistributeUnions<17 | [10 | { value: 'a' | 'b' }, { x: { y: 2 | 3 } }]>,
//   | 17
//   | [10, { x: { y: 2 } }]
//   | [10, { x: { y: 3 } }]
//   | [{ value: 'a' }, { x: { y: 2 } }]
//   | [{ value: 'a' }, { x: { y: 3 } }]
//   | [{ value: 'b' }, { x: { y: 2 } }]
//   | [{ value: 'b' }, { x: { y: 3 } }]
//   >
//   >,
// ]


/**
 * @zh 将具体是数组类型转化未联合类型
 * @example ArrayToUnion<[1, 2, 3]> // 1 | 2 | 3
 * @example ArrayToUnion<[ '1', '2', '3' ]> // '1' | '2' | '3'
 * @example ArrayToUnion<[ boolean, number, false, null ]> // boolean | number | null
 * @example ArrayToUnion<[ true, false ]> // boolean
 */
export type ArrayToUnion<A extends unknown[]> =
    A[number];
	// A extends [ infer F, ...infer R ] ? F | ArrayToUnion<R> : never;


type SimpleUnionToArray<A, C = A> =
	[A] extends [infer B extends A] ? B extends B ? Exclude<C, B> extends never ? [B] : [B, ...UnionToArray<Exclude<C, B>>] : [] : [];

/**
 * @zh 将联合类型转化成数组类型
 * @example UnionToArray<1 | 2> // [1, 2] | [2, 1]
 * @example UnionToArray<1 | 2 | 3> // [1, 2, 3] | [1, 3, 2] | [2, 1, 3] | [2, 3, 1] | [3, 1, 2] | [3, 2, 1]
 */
export type UnionToArray<A> =
	SimpleUnionToArray<A>;

/**
 * @zh 将联合类型转化成交叉类型
 * @example UnionToIntersection< { a: number } | { b: 1 }> // { a: number } & { b: 1 }
 */
export type UnionToIntersection<U> =
    (U extends U ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never

type OneOfUnion<T> =
    UnionToIntersection<T extends T ? () => T : never> extends () => (infer R) ? R : never

type SimpleUnionToTuple<T, L = OneOfUnion<T>> =
    [T] extends [never] ? [] : [...SimpleUnionToTuple<Exclude<T, L>>, L]

/**
 * @zh 将联合类型转化成元组类型.
 * 顺序随机
 */
export type UnionToTuple<T> =
    SimpleUnionToTuple<T>;