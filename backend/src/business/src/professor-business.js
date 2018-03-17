/**
 * Módulo de dominio do backend da aplicação.
 * @module '@backend/src/business'
 * @author 'lucas.reis,fausto.junqueira'
 */

import {
  Professor
} from '../../entity';
import {
  DummyFilter
} from '../../entity/filter';
import CrudLoggerBusiness from '../../lib/crud-logger-business';

export class ProfessorBusiness extends CrudLoggerBusiness {
  toFilter() {
    this.logger.trace('Professor');
    return () => true;
  }
}

export default new ProfessorBusiness(Professor, DummyFilter);
