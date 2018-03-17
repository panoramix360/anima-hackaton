/**
 * Module to execute the scheduler task.
 * @module '@backend/src/task'
 * @author 'fausto.junqueira'
 */

import exampleTask from './src/example-task';

export default function (program) {
  program
    .command('task <task>')
    .action(function (task) {
      //talvez usar .options do commander
      //Exemplo: .option('-s --size <size>', 'Pizza size', /^(large|medium|small)$/i, 'medium')
      switch(task) {
        case "example": exampleTask(); break;

        default: break;
      }

    });
}
