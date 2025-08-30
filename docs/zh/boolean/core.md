
### 取否 `Not<boolean>`


``` typescript
Not<true> // false
Not<false> // true
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
```

			