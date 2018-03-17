/**
 * Configuration handler errors
 * @module backend/src/rest
 * @author Fausto Junqueira <fausto.junqueira@radixeng.com.br>
 */
import rdx from 'rdx-framework';
const { HTTPRequestError, ValidationError, BusinessError } = rdx.model.error;

/**
 * Handler errors of application http
 *
 * @param {RuntimeError|Error|any} err  Error
 * @param {IncomingMessage } req Request object
 * @param {IncomingMessage} res Response
 * @param {callback} next Callback to continue in stack
 */
export default function(err, req, res, next) {
  if(err) {

    // Catch errors of model validation
    if(err instanceof ValidationError) {
      err = new HTTPRequestError(HTTPRequestError.Type.VALIDATION, err.code, err.message, err);
    }

    // catch error of business
    if(err instanceof BusinessError){
      err = new HTTPRequestError(HTTPRequestError.Type.BUSINESS, err.code, err.message, err);
    }

    // Capturar generic erros
    if(!(err instanceof HTTPRequestError)){
      err = new HTTPRequestError(HTTPRequestError.Type.INTERNAL_SERVER, -1, err.message, err);
    }

    // send error
    res.status(err.statusCode).json(err.json());
  }
  next(err);
}
