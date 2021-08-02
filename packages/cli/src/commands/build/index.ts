import { Command } from 'commander'
import * as path from 'path'
import * as fs from 'fs-extra'
import chalk from 'chalk'
import { RollupOptions } from 'rollup'
import { bundle } from '../../utils/bundle'

export const build = new Command('build')
  .description('打包')
  .argument('[file]', '入口文件', './src/index.ts')
  .option('-o --output [output]', '输出目录', './dist')
  .option('-w --watch', '观察模式')
  .action(async (file: string, option: { output: string; watch?: boolean }) => {
    const inputFilePath = path.resolve(file)
    if (!fs.pathExistsSync(inputFilePath)) {
      console.log(chalk.red('Error: 文件 `%s` 不存在，绝对路径：`%s`'), file, inputFilePath)
      return
    }
    await fs.ensureDir(option.output)
    const rollupOption: RollupOptions = {
      input: inputFilePath,
      output: [
        {
          file: path.resolve(option.output, 'index.js'),
          format: 'cjs',
          sourcemap: true,
          exports: 'auto',
        },
        {
          file: path.resolve(option.output, 'index.esm.js'),
          format: 'esm',
          sourcemap: true,
          exports: 'auto',
        },
      ],
    }
    await bundle(rollupOption, !!option.watch)
  })
