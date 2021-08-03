import { Command } from 'commander'
import { build } from './commands/build'

const main = new Command('hhp-cli')

main.addCommand(build)

main.version(require('../package.json').version, '-v, --version', '查看版本')

main.parse()
