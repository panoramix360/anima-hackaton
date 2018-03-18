/**
 * Módulo de dominio do backend da aplicação.
 * @module '@backend/src/business'
 * @author 'lucas.reis,fausto.junqueira'
 */

import {
  Aula,
  Presenca,
  Disciplina
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
    const presencaPorDisciplina = groupBy(presencaList, presenca => presenca.aula.disciplina._id);

    const consolidado = map(presencaPorDisciplina, (presencas,disciplinaId) => {
      const disciplina = await Disciplina.get(disciplinaId);
      const aulas = presencas.map(p => p.aula);
      const aulastotal = todasAulas.filter(x => x.disciplina._id === disciplina._id).map(a => {
        if(aulas.find(x => a._id === x._id)){
          a.ir = true;
        }
        return a;
      })
      const frequencia = aulas.length / todasAulas.filter(x => x.disciplina._id === disciplina._id).length;
      return {
        aulastotal,
        aulas,
        disciplina,
        frequencia
      };
    });

    return consolidado;
  }

  async alunosPresentes(idAula) {
    const presencasDaAula = await Presenca.find(p => p.aula._id === idAula);
    return presencasDaAula.map(p => p.aluno);
  }

  toFilter(aulaFilter) {
    return aula => {
      return !aulaFilter.profid || aulaFilter.profid === aula.professor._id;
    };
  }
}

export default new AulaBusiness(Aula, AulaFilter);
