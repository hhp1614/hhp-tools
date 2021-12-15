import { Command } from 'commander';
import { RollupOptions } from 'rollup';
import addShebang from 'rollup-plugin-add-shebang';
import { bundle } from '../utils/bundle';

const buildCli = new Command('build-cli');

buildCli.command('build').description('打包 cli');
buildCli.option('-w, --watch', '监视模式');
buildCli.action(async (option: { watch?: boolean }) => {
    const rollupOption: RollupOptions = {
        input: './src/index.ts',
        output: {
            file: './dist/bin.js',
            format: 'cjs',
            sourcemap: true,
        },
        plugins: [addShebang({ include: ['./dist/bin.js'] })],
    };
    await bundle(rollupOption, !!option.watch);
});

buildCli.parse();
