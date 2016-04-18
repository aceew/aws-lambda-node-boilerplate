/* eslint-env node, mocha */

import chai from 'chai';
const expect = chai.expect;

import { Response } from '../models/response';

describe('Simple response model constructing', () => {
  it('Constructs an object and returns it.', () => {
    const responseObject = new Response('success', 'Hello World');
    expect(responseObject).to.have.all.keys('status', 'data');
    expect(responseObject.data).to.equal('Hello World');
    expect(responseObject.status).to.equal('success');
  });
});
