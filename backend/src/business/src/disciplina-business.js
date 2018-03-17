/**
 * Módulo de dominio do backend da aplicação.
 * @module '@backend/src/business'
 * @author 'lucas.reis,fausto.junqueira'
 */

import rdx from 'rdx-framework';

import {
  Disciplina
} from '../../entity';
import {
  DummyFilter
} from '../../entity/filter';
import CrudLoggerBusiness from '../../lib/crud-logger-business';

export class DisciplinaBusiness extends CrudLoggerBusiness {
  toFilter(filter){
    this.logger.trace('Disciplina');
    return model => true;
  }
}

export default new DisciplinaBusiness(Disciplina, DummyFilter);
