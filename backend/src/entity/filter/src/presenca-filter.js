/**
 * Módulo de entidades do backend da aplicação.
 * @module '@backend/src/entity/filter'
 * @author 'fausto.junqueira'
 */
import rdx from 'rdx-framework';

export default rdx.model.modelBuilder()
  .schema({
    "id": "/PresencaFilter",
    "type": "object",
    "properties": {
      "aulaId": {"type": "string"}
    }
  })
  .class(class {
    constructor(obj) {
      Object.assign(this, obj)
    }

  });
