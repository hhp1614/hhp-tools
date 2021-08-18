# @hhp-tools/eslint-config

## 简介

统一 `eslint` 配置，支持 `vue`，`js`，`ts` 文件的检查

> 注意：会读取 `prettier` 的设置，建议配合 `prettier` 一起食用

## 使用

安装依赖

```shell
npm i -D @hhp-tools/eslint-config
```

在 `package.json` 中配置

```json
{
  "eslintConfig": {
    "extends": ["@hhp-tools/eslint-config"]
  }
}
```

或者在 `.eslintrc.*` 中配置

```json
{
  "extends": "@hhp-tools/eslint-config"
}
```
