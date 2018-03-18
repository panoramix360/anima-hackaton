/**
 * Módulo de dominio do backend da aplicação.
 * @module '@backend/src/business'
 * @author 'lucas.reis,fausto.junqueira'
 */
import {Aula, Aluno, Presenca} from '../../entity';

export class QRCodeBusiness {

  async gerarQrCodeToken(aulaId) {
    const aula = await Aula.get(aulaId);
    return JSON.stringify(aula);
  }

  async validarQrCodeToken(token, aluno) {
    aluno = new Aluno(aluno);
    const aula = new Aula(JSON.parse(token));
    const presenca = new Presenca({aluno,aula});
    return await presenca.save();
  }
}

export default new QRCodeBusiness();
