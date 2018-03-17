/**
 * Entity Example.
 * @module '@backend/src/entity'
 * @author 'fausto.junqueira'
 */

import rdx from 'rdx-framework';

export default rdx.model.modelBuilder()
  .pouchdb('db-example', { adapter: 'memory' })
  .schema({
    "id": "/Example",
    "type": "object",
    "properties": {
      "_id": {"type": "string"},
      "name": { "type": "string", "required": true },
      "age": {"type": "number", "required": true}
    }
  })
  .class(class {
    constructor(obj){
      Object.assign(this, obj)
    }

  });
