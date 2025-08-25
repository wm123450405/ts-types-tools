# ts-types-tools
some type tools for typescript

## 1. Install

```shell
npm install ts-types-tools --save-dev
```

## 2. Usage

```typescript
import type { TypesTools } from 'ts-types-tools';
```

```typescript
type Status = TypesTools.IntRange<0, 5>;  // 0 | 1 | 2 | 3 | 4
```

## 3. Api

### [Core](./docs/en/core/index.md)

### [Boolean](./docs/en/boolean/index.md)

### [String](./docs/en/string/index.md)

### [Number](./docs/en/number/index.md)

### [Array](./docs/en/array/index.md)

### [Mixins](./docs/en/mixins/index.md)