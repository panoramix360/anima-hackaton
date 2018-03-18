/**
 * Módulo de dominio do backend da aplicação.
 * @module '@backend/src/business'
 * @author 'lucas.reis,fausto.junqueira'
 */

import {
  Presenca
} from '../../entity';
import {
  PresencaFilter
} from '../../entity/filter';
import CrudLoggerBusiness from '../../lib/crud-logger-business';

export class PresencaBusiness extends CrudLoggerBusiness {
  toFilter(presencaFilter) {
    return presenca => !presencaFilter.aulaId || presenca.aula._id === presencaFilter.aulaId;
  }

}

export default new PresencaBusiness(Presenca, PresencaFilter);
