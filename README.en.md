# ts-types-tools
some type tools for typescript

[中文](./README.md)

## 1. Install

```shell
npm install ts-types-tools --save-dev
```

## 2. Usage

Import types from `ts-types-tools`.
Use it in your code.

```typescript
import type { IntRange } from 'ts-types-tools';

type Status = IntRange<0, 5>;  // 0 | 1 | 2 | 3 | 4
```

```typescript
import type { NumberToString } from 'ts-types-tools';

type Status = NumberToString<'156' | '32'>;  // 156 | 32
```

## 3. Api

### [Core](./docs/en/core/index.md)

### [Boolean](./docs/en/boolean/index.md)

### [String](./docs/en/string/index.md)

### [Number](./docs/en/number/index.md)

### [Array](./docs/en/array/index.md)

### [Object](./docs/en/object/index.md)

### [Function](./docs/zh/function/index.md)

### [Mixins](./docs/en/mixins/index.md)