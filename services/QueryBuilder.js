const whereCondition = require('./whereCondition');

class QueryBuilder {
  /**
 *
 * @param {Array} items
 */
  constructor(items) {
    this.items = items;
  }

  find(id) {
    return this.items.find(item => item.id === id);
  }

  first() {
    return this.items[0];
  }

  /**
   *
   * @param {Object} conditions
   */
  where(conditions) {
    return new QueryBuilder(whereCondition(this.items, conditions));
  }

  get() {
    return [...this.items];
  }

  count() {
    return this.get().length;
  }
}
module.exports = QueryBuilder;
