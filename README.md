# Vue 3 + Typescript + Vite + Pinia + Unocss

## 项目启动文档

### 初始化依赖

```
yarn install
```

### 构建开发版本

```
yarn dev
```

### 构建不同开发版本，可以引入不同 env 配置

```
yarn test
yarn bata
```

### 构建生产版本，编写了 sh 脚本可以同时打包线上（Bata-c）与内测版本（Alpha-c）

```
yarn b
```

### 构建不同生产版本，可以引入不同 env 配置

```
yarn build
yarn build:test
yarn build:bata
```

### Lints 检测代码规范与修复

```
yarn lint:lint-staged
```
