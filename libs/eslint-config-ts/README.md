## 简介

统一 `typescript` 的 `eslint` 配置

## 使用

安装依赖

```shell
yarn add -D @hhp-tools/eslint-config
# or
npm i -D @hhp-tools/eslint-config
```

在 `package.json` 中配置

```json
{
  "eslintConfig": {
    "extends": [
      "@hhp-tools/eslint-config-ts"
    ]
  }
}
```

或者在 `.eslintrc.*` 中配置

```json
{
  "extends": "@hhp-tools/eslint-config"
}
```
