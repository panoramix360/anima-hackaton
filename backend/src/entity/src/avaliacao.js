/**
 * Entity Aula.
 * @module '@backend/src/entity'
 * @author 'lucas.reis,fausto.junqueira'
 */

import rdx from 'rdx-framework';

export default rdx.model.modelBuilder()
  .pouchdb('db-avaliacao')
  .schema({
    "id": "/Avaliacao",
    "type": "object",
    "properties": {
      "_id": { "type": "string" },
      "presenca": { "$ref": "/Presenca", "required": true },
      "estrelas": { "type": "integer", "required": true },
      "descricao": { "type": "string", "required": true }
    }
  })
  .class(class {
    constructor(obj) {
      Object.assign(this, obj);
    }

  });
