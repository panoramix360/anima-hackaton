import rdx from 'rdx-framework';
import log4js from 'log4js';
const {
  CrudBusiness
} = rdx.pouchdb.crud;

export default class CrudLoggerBusiness extends CrudBusiness {

  constructor(Entity, FilterEntity) {
    super(Entity, FilterEntity);

    if (this.constructor === CrudLoggerBusiness) {
      throw new Error("Can't instantiate abstract class!");
    }

    Object.defineProperty(this, 'logger', {
      writable: false,
      enumerable: true,
      value: log4js.getLogger(this.constructor.name.replace('Business', ''))
    });
  }

}
