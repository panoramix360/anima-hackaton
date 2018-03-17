import framework from 'rdx-framework';
import rdxPouchdbPlugin from 'rdx-plugin-pouchdb';
import rdxPouchdbCrudPlugin from 'rdx-plugin-pouchdb-crud';

framework.plugins([
  rdxPouchdbPlugin,
  rdxPouchdbCrudPlugin
]);

require('./src/bootstrap').default();

require('./commander');

