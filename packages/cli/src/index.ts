import { Command } from 'commander'
import pkg from '../package.json'
import { build } from './commands/build'

const main = new Command('hhp-cli')

main.addCommand(build)

main.version(pkg.version).parse()
