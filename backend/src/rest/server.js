/**
 * Create the HTTP server
 * @module @backend/src/rest
 * @author Fausto Junqueira <fausto.junqueira@radixeng.com.br>
 */

import rdx from 'rdx-framework';
import app from './application';
import config from 'config';
if (!config.has('http-server')){
  throw new ReferenceError('dont have a http configuration declared in config file. The key should be "http-server"');
}
export default () => rdx.http.httpServer(app, config.get('http-server'));


