/**
 * Módulo de dominio do backend da aplicação.
 * @module '@backend/src/business'
 * @author 'lucas.reis,fausto.junqueira'
 */

import {
  Avaliacao, Presenca
} from '../../entity';
import {
  DummyFilter
} from '../../entity/filter';
import CrudLoggerBusiness from '../../lib/crud-logger-business';

export class AulaBusiness extends CrudLoggerBusiness {
  toFilter() {
    this.logger.trace('Aula');
    return () => true;
  }

  async avaliar(presencaId, estrelas, descricao) {
    const presenca = await Presenca.get(presencaId);
    const avaliacao = new Avaliacao({presenca,estrelas,descricao});
    return await avaliacao.save();
  }
}

export default new AulaBusiness(Avaliacao, DummyFilter);
