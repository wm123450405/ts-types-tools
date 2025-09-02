
### 布尔值 `Boolean<T>`


``` typescript
Boolean<true> // true
Boolean<false> // false
Boolean<''> // false
Boolean<0> // false
Boolean<undefined> // false
Boolean<null> // false
Boolean<1> // true
Boolean<'0'> // true
Boolean<{}> // true
Boolean<[]> // true
Boolean<boolean> // boolean
Boolean<number> // boolean
Boolean<string> // boolean
Boolean<object> // true
Boolean<unknown[]> // true
```

			
### 取否 `Not<boolean>`


``` typescript
Not<true> // false
Not<false> // true
Not<boolean> // never
```

			
### 或 `Or<boolean[]>` `Or<boolean, boolean>`


``` typescript
Or<true, true> // true
Or<true, false> // true
Or<false, true> // true
Or<false, false> // false
Or<[true, true, true]> // true
Or<[false, true, false]> // true
Or<[false, false, false]> // false
Or<boolean, true> // never
```

			
### 与 `And<boolean[]>` `And<boolean, boolean>`


``` typescript
And<true, true> // true
And<true, false> // false
And<false, true> // false
And<false, false> // false
And<[true, true, true]> // true
And<[false, true, false]> // false
And<[false, false, false]> // false
And<boolean, true> // never
```

			
### 异或 `Xor<boolean[]>` `Xor<boolean, boolean>`


``` typescript
Xor<true, true> // true
Xor<true, false> // false
Xor<false, true> // false
Xor<false, false> // true
Xor<[true, true, true]> // true
Xor<[false, true, false]> // true
Xor<[false, false, false]> // false
Xor<boolean, true> // never
```

			