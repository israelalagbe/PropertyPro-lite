const mocha = require('mocha');
const chai = require('chai');
const QueryBuilder = require('../services/QueryBuilder');
const { describe, it} = mocha;
const { expect , assert} = chai;

describe('QueryBuilder', () => {
  describe('#find(id)', () => {
    const qb = new QueryBuilder([{id:1}])
    it('Should not return null', () => {
      assert.notEqual(qb.find(1), null)
    });
    it('Should return document with ID 1', () => {
      assert.equal(qb.find(1).id,1);
    });
    it('should return null when the value is not present', () => {
      assert.equal(qb.find(2), null)
    });
  });
  
  describe('#get()', () => {
    const qb = new QueryBuilder([{id:1},{id:2}])
    it('should return an array', () => {
      assert.isArray(qb.get())
    });
    it('should return an array of length 2', () => {
      assert(qb.get().length==2)
    });
  });
  describe('#count()', () => {
    const qb = new QueryBuilder([{id:1},{id:2}])
    it('should return a number', () => {
      assert.isNumber(qb.count())
    });
    it('should return 2', () => {
      assert(qb.count())
    });
  });
  describe('#first', () => {
    const qb = new QueryBuilder([{id:1},{id:2}])
    it('Should not return null', () => {
      assert.notEqual(qb.first(), null)
    });
    it('Should return document with ID 1', () => {
      assert.equal(qb.first().id,1);
    });
    it('should return null when the value is not present', () => {
      const qb = new QueryBuilder([])
      assert.equal(qb.first(), null)
    });
  });
  describe('#where(conditions)', () => {
    const qb = new QueryBuilder([
      {id:1,name:"Israel"},
      {id:2,name:"Steven"},
      {id:3,name:"Samson"}
    ])
    it('should an instance of query builder', () => {
      assert.instanceOf(qb.where({}), QueryBuilder)
    });
    it('result should contain an array of length 3', () => {
      assert.equal(qb.where({}).count(), 3)
    });
    it('result should contain an array of length 1', () => {
      assert.equal(qb.where({id:1,name:"Israel"}).count(), 1)
    });
    it('first item should have name:Israel', () => {
      assert.equal(qb.where({id:1,name:"Israel"}).first().name, "Israel")
    });
  });
});
