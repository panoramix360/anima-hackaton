/**
 * Módulo de dominio do backend da aplicação.
 * @module '@backend/src/business'
 * @author 'lucas.reis,fausto.junqueira'
 */

import rdx from 'rdx-framework';

import {
  Professor
} from '../../entity';
import {
  DummyFilter
} from '../../entity/filter';
import CrudLoggerBusiness from '../../lib/crud-logger-business';

const {
  ErrorFactory,
  BusinessError
} = rdx.model.error;

export class ProfessorBusiness extends CrudLoggerBusiness {

  simpleErrorBusiness() {
    throw ErrorFactory(BusinessError, "ERROR_SIMPLE");
  }

  simpleError() {
    throw new Error('errors gereric');
  }

  toFilter(filter){
    this.logger.trace('Professor');
    return model => true;
  }

}

export default new ProfessorBusiness(Professor, DummyFilter);
