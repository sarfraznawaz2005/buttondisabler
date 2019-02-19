/* global describe, it, before */

import chai from 'chai';
import buttondisabler from '../lib/buttondisabler.js';

chai.expect();

const expect = chai.expect;

let lib;

describe('Given an instance of my buttondisabler library', () => {

  before(() => {
    lib = new buttondisabler();
  });

  describe('when I create new instance', () => {
    it('should have timeout property', () => {
      expect(lib).to.include.keys(['timeout']);
    });
  });

});
