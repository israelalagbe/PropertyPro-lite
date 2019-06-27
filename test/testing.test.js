const mocha = require('mocha');
const chai = require('chai');
const { describe, it} = mocha;
const { expect , assert} = chai;
describe('Array', () => {
  describe('#indexOf()', () => {
    it('should return -1 when the value is not present', () => {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
    it('should return -1 when the value is not present', () => {
        expect([1, 2, 3].indexOf(4)).eq(-1)
      });
  });
});
