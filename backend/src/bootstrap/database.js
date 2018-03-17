/**
 * Configuration of database access
 * @module @backend/src/bootstrap
 * @author Fausto Junqueira <fausto.junqueira@radixeng.com.br>
 */

import _ from 'lodash';
import 'pouchdb-adapter-memory';
import rdx from 'rdx-framework';
import PutWithIDDecorator from "./pouchdb-decorator";

/**
 * Opções default of database
 * @type {PouchdbOptions}
 */
const configurationObjectDefault = {
  options: {
    //adapter: 'memory'
  },
  plugins: ['pouchdb-adapter-memory'],
  decorator: PutWithIDDecorator
}

/**
 * Configure the database
 * @returns void
 */
export default function (configObj = {}) {
  const { pouchdb } = rdx;
  const shallowConfigObj = _.assignIn({}, configurationObjectDefault, configObj);
  pouchdb.configure(shallowConfigObj);
}
