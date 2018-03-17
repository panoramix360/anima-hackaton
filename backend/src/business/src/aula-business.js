/**
 * Módulo de dominio do backend da aplicação.
 * @module '@backend/src/business'
 * @author 'lucas.reis,fausto.junqueira'
 */

import {
  Aula
} from '../../entity';
import {
  DummyFilter
} from '../../entity/filter';
import CrudLoggerBusiness from '../../lib/crud-logger-business';

export class AulaBusiness extends CrudLoggerBusiness {
  toFilter() {
    this.logger.trace('Aula');
    return () => true;
  }
}

export default new AulaBusiness(Aula, DummyFilter);
