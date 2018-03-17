/**
 * Módulo de dominio do backend da aplicação.
 * @module '@backend/src/business'
 * @author 'lucas.reis,fausto.junqueira'
 */

import {
  Aluno
} from '../../entity';
import {
  DummyFilter
} from '../../entity/filter';
import CrudLoggerBusiness from '../../lib/crud-logger-business';

export class AlunoBusiness extends CrudLoggerBusiness {
  toFilter() {
    this.logger.trace('Aluno');
    return () => true;
  }
}

export default new AlunoBusiness(Aluno, DummyFilter);
