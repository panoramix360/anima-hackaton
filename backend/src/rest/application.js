/**
 * Módulo de servicos do backend da aplicação.
 * @module @backend/src/rest
 * @author Fausto Junqueira <fausto.junqueira@radixeng.com.br>
 */

import rdx from 'rdx-framework';

import routes from './routes';
import errorsHandler from './errors';

export default rdx.http.application()
  .withRoute(routes)
  .withOnError(errorsHandler)
  .build();
