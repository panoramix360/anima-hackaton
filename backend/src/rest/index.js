/**
 * Launch server application
 * @module '@backend/src/rest'
 * @author 'fausto.junqueira'
 */

 /**
 * Configure the program to execute in command line
 *
 * @param {Commander.program} program cli object
 * @returns {Commander.program} program configured with this command
 */

import httpServer from './server';

module.exports = function(program) {
  program.command('rest').action(() =>
    httpServer()

  );
  return program;
};
