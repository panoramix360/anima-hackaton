/**
 * Módulo de dominio do backend da aplicação.
 * @module '@backend/src/business'
 * @author 'lucas.reis,fausto.junqueira'
 */
import Aula from '../../entity';
import * as jwt from 'jsonwebtoken';

const secret = "YW5pbWEtaGFja2F0b24=";

export class QRCodeBusiness {
  jwtSign(aula) {
    return new Promise(function(resolve, reject) {
      jwt.sign(aula, secret, { expiresIn: "20s" }, function(err, token) {
        if(err) {
          return reject(err);
        }
        resolve(token);
      });
    });
  }

  async gerarQrCodeToken(aulaId) {
    const aula = await Aula.get(aulaId);
    console.log(JSON.stringify(aula));
    var novoToken = await this.jwtSign(aula);
    console.log(novoToken);
    return novoToken;
  }

  validarQrCodeToken() {

  }
}

export default new QRCodeBusiness();