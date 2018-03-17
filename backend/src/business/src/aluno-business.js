/**
 * Módulo de dominio do backend da aplicação.
 * @module '@backend/src/business'
 * @author 'lucas.reis,fausto.junqueira'
 */

import rdx from 'rdx-framework';

import {
  Aluno
} from '../../entity';
import {
  DummyFilter
} from '../../entity/filter';
import CrudLoggerBusiness from '../../lib/crud-logger-business';

export class AlunoBusiness extends CrudLoggerBusiness {
  toFilter(filter){
    this.logger.trace('Aluno');
    return model => true;
  }
}

export default new AlunoBusiness(Aluno, DummyFilter);
