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
    const conditionsKeys = Object.keys(conditions);
    if (conditionsKeys.length === 0) { return new QueryBuilder(this.items); }
    const filteredItems = this.items.filter((item) => {
      return conditionsKeys.every(key => conditions[key] === item[key]);
    });
    return new QueryBuilder(filteredItems);
  }

  get() {
    return this.items;
  }

  count() {
    return this.get().length;
  }
}
module.exports = QueryBuilder;
