/**
 * Módulo de dominio do backend da aplicação.
 * @module '@backend/src/business'
 * @author 'lucas.reis,fausto.junqueira'
 */

import {
  Presenca
} from '../../entity';
import {
  DummyFilter
} from '../../entity/filter';
import CrudLoggerBusiness from '../../lib/crud-logger-business';

export class PresencaBusiness extends CrudLoggerBusiness {
  toFilter() {
    this.logger.trace('Presenca');
    return () => true;
  }

}

export default new PresencaBusiness(Presenca, DummyFilter);
