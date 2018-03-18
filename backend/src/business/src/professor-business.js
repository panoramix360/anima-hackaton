/**
 * Módulo de dominio do backend da aplicação.
 * @module '@backend/src/business'
 * @author 'lucas.reis,fausto.junqueira'
 */

import {
  Professor
} from '../../entity';
import {
  ProfessorFilter
} from '../../entity/filter';
import CrudLoggerBusiness from '../../lib/crud-logger-business';

export class ProfessorBusiness extends CrudLoggerBusiness {
  toFilter(filter) {
    return model => !filter.nome || filter.nome == model.nome;
  }
}

export default new ProfessorBusiness(Professor, ProfessorFilter);
