/**
 * Decoration class to configure the pouchdb
 * @module @backend/src/bootstrap
 * @author Fausto Junqueira <fausto.junqueira@radixeng.com.br>
 */

import rdx from 'rdx-framework';
import uuidV4 from 'uuid/v4';
const { PouchdbDecorator } = rdx.pouchdb;

/**
 * Function of decoration the pouchdb id to input de ID in the objects
 *
 * @class PutWithIDDecorator
 * @extends {PouchdbDecorator}
 */
class PutWithIDDecorator extends PouchdbDecorator {

  constructor(name, options){
    super(name, options);
  }
  /**
   * @overrite
   * Decoration of put to include ID using the uuid/v4
   *
   * @param {any} obj
   * @returns Promise<{id,rev}> Promise of inclusion data
   * @memberof PutWithIDDecorator
   */
  put(obj) {
    obj._id = obj._id || uuidV4();
    return super.put(obj);
  }
}

export default PutWithIDDecorator;
