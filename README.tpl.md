# ts-types-tools
TS中一些方便的类型工具

## 1. 安装

```shell
npm install ts-types-tools --save-dev
```

## 2. 使用

```typescript
import type { IntRange } from 'ts-types-tools';
```

```typescript
type Status = IntRange<0, 5>;  // 0 | 1 | 2 | 3 | 4
```

## 3. 文档