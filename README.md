# ts-type-tools
some type tools for typescript | TS中一些方便的类型工具

## 1. install

```shell
npm install ts-type-tools --save-dev
```

## 2. usage

```typescript
import type { TypesTools } from 'ts-type-tools';
```

```typescript
type Status = TypesTools.IntRange<0, 5>;  // 0 | 1 | 2 | 3 | 4
```

## 3. api

