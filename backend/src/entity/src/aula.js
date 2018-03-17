/**
 * Entity Aula.
 * @module '@backend/src/entity'
 * @author 'lucas.reis,fausto.junqueira'
 */

import rdx from 'rdx-framework';

export default rdx.model.modelBuilder()
  .pouchdb('db-aula')
  .schema({
    "id": "/Aula",
    "type": "object",
    "properties": {
      "_id": {"type": "string"},
      "disciplina": { "$ref": "/Disciplina", "required": true },
      "professor": { "$ref": "/Professor", "required": true },
      "data": { "type": "string", "required": true }
    }
  })
  .class(class {
    constructor(obj){
      Object.assign(this, obj)
    }

  });
