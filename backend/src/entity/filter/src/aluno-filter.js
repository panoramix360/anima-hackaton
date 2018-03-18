/**
 * Módulo de entidades do backend da aplicação.
 * @module '@backend/src/entity/filter'
 * @author 'fausto.junqueira'
 */
import rdx from 'rdx-framework';

export default rdx.model.modelBuilder()
  .schema({
    "id": "/AlunoFilter",
    "type": "object",
    "properties": {
      "name": {"type": "string"}
    }
  })
  .class(class {
    constructor(obj) {
      Object.assign(this, obj)
    }

  });
