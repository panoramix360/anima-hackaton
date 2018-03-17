import supertest from 'supertest';
import chai from 'chai';

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

global.app = app;
global.request = supertest(app);
global.expect = chai.expect;


