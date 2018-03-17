/**
 * Módulo backend da aplicação.
 * @module '@backend'
 * @author 'fausto.junqueira'
 */

import program from 'commander';
import packageJSON from './package.json';

import restCommand from './src/rest';
import schedulerCommand from './src/task';

program
  .version(packageJSON.version, '-v, --version');

restCommand(program);
schedulerCommand(program);

program
  .parse(process.argv);

