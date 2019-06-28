const whereCondition = (items, conditions) => {
  const conditionsKeys = Object.keys(conditions);
  if (conditionsKeys.length === 0) { return items; }
  const filteredItems = items.filter((item) => {
    return conditionsKeys.every(key => conditions[key] === item[key]);
  });
  return filteredItems;
};

module.exports = whereCondition;
