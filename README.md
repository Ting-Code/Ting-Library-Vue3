# Vue 3 + Typescript + Vite + Pinia + Unocss
# 项目已停止维护，改造为monorepo架构https://github.com/Ting-Code/Ting-Library-Monorepo

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

### 构建生产版本，编写了 sh 脚本可以同时打包线上（Bata）与内测版本（Alpha）

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

## TODO List

### 工程类需求

| 类型 | 内容                   | 完成情况 | 在哪个版本实现的                                   |
| ---- | ---------------------- | -------- | -------------------------------------------------- |
| 构建 | 自动化脚本构建多环境包 | ✅       | [v1](https://gitee.com/TINGCYGF/ting-library-vue3) |
| 架构 | monorepo（pnpm 实现）  | ⬜️      |                                                    |
