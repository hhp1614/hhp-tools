# @hhp-tools/cli

## 起步

针对 ts 库打包的零配置 cli

### 安装

```shell
yarn add -D @hhp-tools/cli # 局部安装
npm i -g @hhp-tools/cli # 全局安装
```

### 打包

```shell
hhp-cli build [选项] [入口文件]
```

#### 入口文件

默认 `./src/index.ts`

#### 选项

##### `-o` 或者 `--output`

输出目录，默认 `./dist`

##### `-w` 或者 `--watch`

观察模式，监听文件变化并自动编译
