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
  AulaFilter
} from '../../entity/filter';
import {
  groupBy,
  map
} from 'lodash';
import CrudLoggerBusiness from '../../lib/crud-logger-business';

export class AulaBusiness extends CrudLoggerBusiness {

  async consolidado(alunoId) {
    const todasAulas = await Aula.find(() => true);
    const presencaList = await Presenca.find(presenca => presenca.aluno._id === alunoId);
    if (!presencaList || !presencaList.length) {
      return [];
    }
    const presencaPorDisciplina = map(
      groupBy(presencaList, presenca => presenca.aula.disciplina._id),
      presencas => presencas
    );

    const consolidado = map(presencaPorDisciplina, presencas => {
      const aulas = presencas.map(p => p.aula);
      const disciplina = presencas.map(p => p.aula.disciplina)[0];
      const frequencia = aulas.length / todasAulas.filter(x => x.disciplina._id === disciplina._id).length;
      return {
        aulas,
        disciplina,
        frequencia
      };
    });

    return consolidado;
  }

  toFilter(aulaFilter) {
    return aula => {
      return !aulaFilter.profid || aulaFilter.profid === aula.professor._id;
    };
  }
}

export default new AulaBusiness(Aula, AulaFilter);
