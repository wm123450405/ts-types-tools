# ts-types-tools
TS中一些方便的类型工具

[English](./README.en.md)

## 1. 安装

```shell
npm install ts-types-tools --save-dev
```

## 2. 使用

从`ts-types-tools`中引入
直接在你的代码中使用

```typescript
import type { IntRange } from 'ts-types-tools';

type Status = IntRange<0, 5>;  // 0 | 1 | 2 | 3 | 4
```

```typescript
import type { StringToNumber } from 'ts-types-tools';

type Status = StringToNumber<'156' | '32'>;  // 156 | 32
```

## 3. 文档

### [核心功能](./docs/zh/core/index.md)

### [布尔](./docs/zh/boolean/index.md)

### [字符串](./docs/zh/string/index.md)

### [数字](./docs/zh/number/index.md)

### [数组](./docs/zh/array/index.md)

### [对象](./docs/zh/object/index.md)

### [函数](./docs/zh/function/index.md)

### [综合](./docs/zh/mixins/index.md)
