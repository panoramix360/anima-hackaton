/**
 * Módulo de dominio do backend da aplicação.
 * @module '@backend/src/business'
 * @author 'fausto.junqueira'
 */

import rdx from 'rdx-framework';

import {
  Example
} from '../../entity';
import {
  ExampleFilter
} from '../../entity/filter';
import CrudLoggerBusiness from '../../lib/crud-logger-business';

const {
  ErrorFactory,
  BusinessError
} = rdx.model.error;


export class ExampleBusiness extends CrudLoggerBusiness {

  simpleErrorBusiness() {
    throw ErrorFactory(BusinessError, "ERROR_SIMPLE");
  }

  simpleError() {
    throw new Error('errors gereric');
  }

  toFilter(filter){
    this.logger.trace('junda');
    return model => !filter.name || filter.name === model.name;
  }

}

export default new ExampleBusiness(Example, ExampleFilter);
