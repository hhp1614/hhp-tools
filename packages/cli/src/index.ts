import { Command } from 'commander';
import { build } from './commands/build';
import pkg from '../package.json';

const main = new Command('hhp-cli');

main.addCommand(build);

main.version(pkg.version, '-v, --version', '查看版本');

main.parse();
