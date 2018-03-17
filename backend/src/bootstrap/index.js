/**
 * @module backend/src/bootstrap
 * @author Fausto Junqueira <fausto.junqueira@radixeng.com.br>
 */

/**
* Configure the service. Such as database and errors
* @returns void
*/
import config from 'config';
import rdx from 'rdx-framework';
import database from './database';

export default (configObj) => {
  const { ErrorFactory } = rdx.model.error;

  if (!config.has('errors-table')){
    throw new ReferenceError('dont have a errors table declared in config. The key should be "errors-table"');
  }

  ErrorFactory.configure(config.get('errors-table'));

  // Configure database
  database(configObj);
};
