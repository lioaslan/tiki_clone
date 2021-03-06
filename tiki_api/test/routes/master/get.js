'use strict';

// Load modules
const Code = require('@hapi/code');
const Lab = require('@hapi/lab');
const Server = require('../../../server');

// Test shortcuts

const { describe, it, before, after } = (exports.lab = Lab.script());
const { expect } = Code;

describe('TestRoutes', () => {
  let server = {};
  before(async (flags) => {
    server = await Server.deployment();
  });

  after(async () => {
    await server.stop();
  });

  describe('Test master get route', () => {
    it('Should return array of root categories', async () => {
      const request = await server.inject({
        method: 'get',
        url: '/master'
      });

      expect(request.statusCode).to.equal(200);
      expect(request.result.categories).to.be.an.array();
    });
  });
});
