import { OutputOptions, Plugin, rollup, RollupOptions, watch } from 'rollup';
import typescript from 'rollup-plugin-typescript2';
import autoExternal from 'rollup-plugin-auto-external';
import externals from 'rollup-plugin-node-externals';
import json from '@rollup/plugin-json';
import { terser } from 'rollup-plugin-terser';
import chalk from 'chalk';
import * as fs from 'fs-extra';

/**
 * 使用 rollup 进行打包
 * @param rollupOptions rollup 配置
 * @param isWatch 是否监听
 */
export async function bundle(rollupOptions: RollupOptions, isWatch: boolean) {
    /** 默认插件 */
    const defaultPlugins = [typescript(), externals(), json(), terser()];
    // 解决运行命令时当前目录没有 package.json 文件的报错
    if (fs.pathExistsSync('./package.json')) {
        defaultPlugins.push(autoExternal());
    }

    rollupOptions.plugins = [...defaultPlugins, ...(rollupOptions.plugins ?? [])];
    // 如果 output 选项不是数组，将其转化为数组
    if (!Array.isArray(rollupOptions.output)) {
        rollupOptions.output = [rollupOptions.output!];
    }

    /** rollup 配置列表 */
    const rollupOptionsList: RollupOptions[] = rollupOptions.output.map(output => {
        return {
            input: rollupOptions.input,
            output,
            plugins: rollupOptions.plugins,
        } as RollupOptions;
    });

    // 是否监听
    if (isWatch) {
        const watcherOptionsList = rollupOptionsList.map(option => {
            // 监听模式排除代码压缩插件
            return {
                ...option,
                plugins: option.plugins?.filter(plugin => (plugin as Plugin)?.name !== 'terser'),
            };
        });
        const watcher = watch(watcherOptionsList);
        watcher.on('event', e => {
            switch (e.code) {
                case 'START':
                    console.log(chalk.blue('正在编译'));
                    break;
                case 'END':
                    console.log(chalk.yellow('编译成功'), chalk.gray('监听文件修改中'));
                    break;
                case 'ERROR':
                    console.log(chalk.red('编译错误'));
                    break;
            }
        });
        return;
    }

    /** rollup 打包列表 */
    const promiseList = rollupOptionsList.map(async option => {
        const bundle = await rollup(option);
        await bundle.write(option.output as OutputOptions);
        await bundle.close();
    });
    await Promise.all(promiseList);
}
