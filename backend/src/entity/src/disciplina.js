/**
 * Entity Disciplina.
 * @module '@backend/src/entity'
 * @author 'lucas.reis,fausto.junqueira'
 */

import rdx from 'rdx-framework';

export default rdx.model.modelBuilder()
  .pouchdb('db-disciplina')
  .schema({
    "id": "/Disciplina",
    "type": "object",
    "properties": {
      "_id": {"type": "string"},
      "nome": { "type": "string", "required": true }
    }
  })
  .class(class {
    constructor(obj){
      Object.assign(this, obj)
    }

  });
