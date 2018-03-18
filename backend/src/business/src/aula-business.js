/**
 * Módulo de dominio do backend da aplicação.
 * @module '@backend/src/business'
 * @author 'lucas.reis,fausto.junqueira'
 */

import {
  Aula,
  Presenca
} from '../../entity';
import {
  DummyFilter
} from '../../entity/filter';
import { groupBy } from 'lodash';
import CrudLoggerBusiness from '../../lib/crud-logger-business';

export class AulaBusiness extends CrudLoggerBusiness {

  async listAulasDoAluno(alunoId) {
    var presencaList = await Presenca.find((presenca) => { console.log(presenca) });
    console.log(presencaList);
    //presencaList = groupBy(presencaList, (presenca) => presenca.disciplina._id);
    return presencaList;
  }

  toFilter() {
    return () => true;
  }
}

export default new AulaBusiness(Aula, DummyFilter);
