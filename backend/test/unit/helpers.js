import chai from 'chai';
import td from 'testdouble';
import tdChai from 'testdouble-chai';
import framework from 'rdx-framework';
import rdxPouchdbPlugin from 'rdx-plugin-pouchdb';
import rdxPouchdbCrudPlugin from 'rdx-plugin-pouchdb-crud';

framework.plugins([
  rdxPouchdbPlugin,
  rdxPouchdbCrudPlugin
]);

require('../../src/bootstrap').default({
  options: {
    adapter: 'memory'
  },
  plugins: ['pouchdb-adapter-memory']
});

const app = require('../../src/rest/application').default;

chai.use(tdChai(td));

global.app = app;
global.expect = chai.expect;
global.td = td;


