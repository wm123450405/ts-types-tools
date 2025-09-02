
### Boolean `Boolean<T>`


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
```

			
### Not `Not<boolean>`
 * For boolean

``` typescript
Not<true> // false
Not<false> // true
```

			
### Or `Or<boolean[]>` `Or<boolean, boolean>`
 * For boolean

``` typescript
Or<true, true> // true
Or<true, false> // true
Or<false, true> // true
Or<false, false> // false
Or<[true, true, true]> // true
Or<[false, true, false]> // true
Or<[false, false, false]> // false
```

			
### And `And<boolean[]>` `And<boolean, boolean>`
 * For boolean

``` typescript
And<true, true> // true
And<true, false> // false
And<false, true> // false
And<false, false> // false
And<[true, true, true]> // true
And<[false, true, false]> // false
And<[false, false, false]> // false
```

			