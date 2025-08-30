
### Reverse a string or an array `Reverse<string | readonly unknown[]>`


``` typescript
Reverse<'abc'> // 'cba'
Reverse<[1, 2]> // [2, 1]
```

			
### Get the length of a string or an array `Length<string | readonly unknown[]>`


``` typescript
Length<'abc'> // 3
Length<[1, 2]> // 2
```

			
### Is a data empty `IsEmpty<T>`


``` typescript
IsEmpty<undefined> // true
IsEmpty<null> // true
IsEmpty<''> // true
IsEmpty<[]> // true
IsEmpty<{}> // true
IsEmpty<'fads'> // false
IsEmpty<[1]> // false
IsEmpty<{a:1}> // false
```

			