const { authenticate } = require('@feathersjs/authentication').hooks;

const beforeCreateModuleRun = require('../../hooks/before-create-modules-run');

const afterCreateModuleRun = require('../../hooks/after-create-modules-run');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
    create: [beforeCreateModuleRun()],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [afterCreateModuleRun()],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
