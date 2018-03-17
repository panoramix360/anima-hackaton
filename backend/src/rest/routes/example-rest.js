/**
 * @module backend/src/rest
 * @api /example
 */

import rdx from 'rdx-framework';
import { exampleBusiness } from "../../business";

const router = rdx.http.router();

router.get('/errors', () => exampleBusiness.simpleError());
router.get('/errors/business', () => exampleBusiness.simpleErrorBusiness());

module.exports = rdx.pouchdb.crud.crudRouter(router, exampleBusiness);
