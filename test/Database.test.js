const mocha = require('mocha');
const chai = require('chai');
const DB = require('../services/Database');
const QueryBuilder = require('../services/QueryBuilder');
const { describe, it } = mocha;
const { expect, assert } = chai;

describe('Database', () => {
    describe('#collection()', () => {
        const db = new DB()
        it('Should return an instance of QueryBuilder', () => {
            assert.instanceOf(db.collection('user'), QueryBuilder)
        });
        it("Returned QueryBuilder should contain an empty array", () => {
          assert.isEmpty(db.collection('user').get());
        });
    });
    describe('#autoId()', () => {
        it('Created Id should be a number', () => {
            const db = new DB()
            assert.isNumber(db.autoId())
        });
    });
    describe('#createDocument()', () => {
        it('Created Id should be a number', () => {
            const db = new DB()
            assert.isNumber(db.createDocument('user',{name:"Israel"}).id)
        });
        it('Document Id should be 1', () => {
            const db = new DB()
            assert.equal(db.createDocument('user',{name:"Israel"}).id,1)
        });
        it("All property of document should be returned", () => {
            const db = new DB()
            assert.deepEqual(db.createDocument('user',{name:"Israel"}),{name:"Israel",id:1})
        });
        it('Should store the document in the collection store', () => {
            const db = new DB()
            let document=db.createDocument('user', {name: "Israel"})
            assert.deepEqual(db.collection('user').first(),document)
        });
    });
    describe('#updateDocument()', () => {
        it('Should update the stored document', () => {
            const db = new DB()
            let document=db.createDocument('user', {name: "Israel"})
            db.updateDocument('user', {id: document.id, age: 50})
            assert.deepEqual(db.collection('user').first(),{id: document.id, age: 50, name: "Israel"})
        });
        it('Should throw an error', () => {
            const db = new DB()
            let document=db.createDocument('user', {name: "Israel"})
            assert.throws(()=>{
                db.updateDocument('user', {id: 20, age: 50})
            });
        });
    });
});