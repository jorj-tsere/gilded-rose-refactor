var Shop = require('../src/gilded_rose.js');
const Item = require('../src/classes/Item');
describe("Gilded Rose", function () {

  it("should foo", function () {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("foo");
  });

});
