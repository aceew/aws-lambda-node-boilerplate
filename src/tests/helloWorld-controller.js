/* eslint-env node, mocha */

import sinon from 'sinon';
import chai from 'chai';
const expect = chai.expect;

import { Response } from '../models/response';
import { HelloWorld } from '../controllers/helloWorld';
const helloWorldConcat = new HelloWorld({ message: '' });

describe('Hello World Controller', () => {
  // Each piece of major functionality can go in it's own describe
  describe('String concatenation', () => {
    it('Throws an error response when no array is specified.', (done) => {
      try {
        helloWorldConcat.concat({ foo: 'bar' });
      } catch (err) {
        expect(err).to.be.an('object');
        expect(err.status).to.equal('error');
        expect(err.data).to.equal('An array was not specified');
        done();
      }
    });

    it('Throws an error response when the array is empty.', (done) => {
      try {
        helloWorldConcat.concat([]);
      } catch (err) {
        expect(err).to.be.an('object');
        expect(err.status).to.equal('error');
        expect(err.data).to.equal('Array contained no values');
        done();
      }
    });

    it('Successfuly concatenates strings.', () => {
      const result = helloWorldConcat.concat(['Hello ', 'world!']);
      expect(result).to.equal('Hello world!');
    });
  });

  describe('Get Hello World', () => {
    it('Returns an error response when there is no message specified in the object.', (done) => {
      // The helloWorldConcat object has no data message set so we can use that
      const callback = function callback(err, data) {
        // Sometimes assertions will need to go inside of callbacks.
        expect(data).to.equal(undefined);
        expect(err).to.be.an('object');
        expect(err.status).to.equal('error');
        expect(err.data).to.equal('No message specified');
        done();
      };

      helloWorldConcat.get(callback);
    });

    it('Returns an error response when the concatenation is not successful.', (done) => {
      const helloWorldFailConcat = new HelloWorld({ message: [] });

      // To ensure that the concatenation is not successful we can use a stub to set it's response
      const stub = sinon.stub(HelloWorld.prototype, 'concat');
      stub.throws(new Response('error', 'An array was not specified'));

      const callback = function callback(err, data) {
        expect(data).to.equal(undefined);
        expect(err).to.be.an('object');
        expect(err.status).to.equal('error');
        expect(err.data).to.equal('An array was not specified');
        done();
      };

      helloWorldFailConcat.get(callback);
      stub.restore();
    });

    it('Returns an error response when the message is not a string or array.', (done) => {
      const helloWorldInvalidType = new HelloWorld({ message: { foo: 'bar' } });

      const callback = function callback(err, data) {
        expect(data).to.equal(undefined);
        expect(err).to.be.an('object');
        expect(err.status).to.equal('error');
        expect(err.data).to.equal('Message must be an array or string');
        done();
      };

      helloWorldInvalidType.get(callback);
    });

    it('Returns the message in a response object when it is already a string.', (done) => {
      const helloWorldString = new HelloWorld({ message: 'Hello World!' });

      const callback = function callback(err, data) {
        expect(err).to.equal(undefined);
        expect(data).to.be.an('object');
        expect(data.status).to.equal('success');
        expect(data.data).to.equal('Hello World!');
        done();
      };

      helloWorldString.get(callback);
    });

    it('Returns the concatenated string when the message is an array.', (done) => {
      const helloWorldArray = new HelloWorld({ message: ['Hello ', 'World!'] });

      const callback = function callback(err, data) {
        expect(err).to.equal(undefined);
        expect(data).to.be.an('object');
        expect(data.status).to.equal('success');
        expect(data.data).to.equal('Hello World!');
        done();
      };

      helloWorldArray.get(callback);
    });
  });
});
