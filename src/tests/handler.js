/* eslint-env node, mocha */

import sinon from 'sinon';
import chai from 'chai';
const expect = chai.expect;

import { handler } from '../index';
import { HelloWorld } from '../controllers/helloWorld';

describe('Index handler', () => {
  it('Routes to the HelloWorld controller when the operation is getHelloWorld', (done) => {
    // Here we spy on the HelloWorld.prototype.get to make sure the handler routed to the controller
    const eventObject = {
      operation: 'getHelloWorld',
      data: {},
    };

    const spy = sinon.spy(HelloWorld.prototype, 'get');

    const callback = function callback() {
      // assert that the spy was called.
      expect(spy.called).to.equal(true);
      done();
    };

    handler(eventObject, null, callback);
  });

  it('Returns an error callback when the operation was not found', (done) => {
    const eventObject = {};
    const callback = function callback(err, data) {
      expect(data).to.equal(undefined);
      expect(err).to.be.an('object');
      expect(err.status).to.equal('error');
      expect(err.data).to.equal('No operation was specified.');
      done();
    };


    handler(eventObject, null, callback);
  });
});
