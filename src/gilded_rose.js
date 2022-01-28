

const { SPECIALS } = require('../src/constants');
const DynamicClass = require('./dynamicClassFactory');

class Shop {
  constructor(items = []) {
    this.items = items.map(_item => {
      return new DynamicClass(SPECIALS[_item.name] || 'Normal', _item);
    });
  }

  updateQuality() {
    this.items.forEach((item) => item.update());
    return this.items;
  }
}
module.exports = Shop
