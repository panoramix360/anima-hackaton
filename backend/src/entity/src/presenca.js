/**
 * Entity Presenca.
 * @module '@backend/src/entity'
 * @author 'lucas.reis,fausto.junqueira'
 */

import rdx from 'rdx-framework';

export default rdx.model.modelBuilder()
  .pouchdb('db-presenca')
  .schema({
    "id": "/Presenca",
    "type": "object",
    "properties": {
      "_id": {"type": "string"},
      "aula": { "$ref": "/Aula", "required": true },
      "aluno": { "$ref": "/Aluno", "required": true }
    }
  })
  .class(class {
    constructor(obj){
      Object.assign(this, obj)
    }

  });
