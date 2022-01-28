const Normal = require('./classes/Normal');
const AgedBrie = require('./classes/AgedBrie');
const BackstagePass = require('./classes/BackstagePass');
const Conjured = require('./classes/Conjured');
const Legendary = require('./classes/Legendary');

class Shop {
  constructor(items = []) {
    this.items = items.map(_item => {
      if (_item.name === 'Backstage passes to a TAFKAL80ETC concert') return new BackstagePass(_item.sellIn, _item.quality);
      if (_item.name === 'Conjured Mana Cake') return new Conjured(_item.sellIn, _item.quality);
      if (_item.name === 'Aged Brie') return new AgedBrie(_item.sellIn, _item.quality);
      if (_item.name === 'Sulfuras, Hand of Ragnaros') return new Legendary(_item.sellIn);
      return new Normal(_item.name, _item.sellIn, _item.quality);
    });
  }

  updateQuality() {
    this.items.forEach((item) => item.update());
    return this.items;
  }
}
module.exports = Shop
