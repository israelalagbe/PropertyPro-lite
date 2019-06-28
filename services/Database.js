/* eslint-disable no-underscore-dangle */
const QueryBuilder = require('./QueryBuilder');
const whereCondition = require('./whereCondition');

class Database {
  constructor() {
    this._store = {};
    this._autoId = 1;
  }

  /**
   *
   * @param {Array} collectionName
   * @returns {Array}
   */
  getStore(collectionName) {
    return this._store[collectionName] || [];
  }

  /**
   *
   * @param {String} collectionName
   * @param {Array} collection
   */
  setStore(collectionName, collection) {
    this._store[collectionName] = collection;
  }

  collection(name) {
    const collectionStore = this.getStore(name);
    return new QueryBuilder(collectionStore);
  }

  createDocument(collectionName, document) {
    const collectionStore = this.getStore(collectionName);
    const newDocument = { ...document, id: this.autoId() };
    this.setStore(collectionName, [...collectionStore, newDocument]);
    return newDocument;
  }

  autoId() {
    return this._autoId++;
  }

  updateDocument(collectionName, document) {
    const collectionStore = this.getStore(collectionName);
    const oldDocumentIndex = collectionStore.findIndex(item => item.id === document.id);
    const oldDocument = collectionStore[oldDocumentIndex];
    if (!oldDocument) { throw new Error('Document to update does not exist'); }
    collectionStore[oldDocumentIndex] = { ...oldDocument, ...document };
    return collectionStore[oldDocumentIndex];
  }
}
module.exports = Database;
