/**
 * Módulo de dominio do backend da aplicação.
 * @module '@backend/src/business'
 * @author 'lucas.reis,fausto.junqueira'
 */

import rdx from 'rdx-framework';

import {
  Presenca
} from '../../entity';
import {
  DummyFilter
} from '../../entity/filter';
import CrudLoggerBusiness from '../../lib/crud-logger-business';

export class PresencaBusiness extends CrudLoggerBusiness {
  toFilter(filter){
    this.logger.trace('Presenca');
    return model => true;
  }
}

export default new PresencaBusiness(Presenca, DummyFilter);
