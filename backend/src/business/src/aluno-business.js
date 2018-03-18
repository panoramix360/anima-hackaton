/**
 * Módulo de dominio do backend da aplicação.
 * @module '@backend/src/business'
 * @author 'lucas.reis,fausto.junqueira'
 */

import {
  Aluno
} from '../../entity';
import {
  AlunoFilter
} from '../../entity/filter';
import CrudLoggerBusiness from '../../lib/crud-logger-business';

export class AlunoBusiness extends CrudLoggerBusiness {
  toFilter(filter) {
    this.logger.trace('Aluno');
    return model => !filter.nome || filter.nome == model.nome;
  }
}

export default new AlunoBusiness(Aluno, AlunoFilter);
