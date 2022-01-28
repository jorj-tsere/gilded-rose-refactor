var Shop = require('../src/gilded_rose.js');
const Item = require('../src/classes/Item');

const { MINIMUM_QUALITY } = require('../src/constants');

describe("Conjured", function () {

    it("Quality decrease by 2 when the sell in date is positive", function () {
        const gildedRose = new Shop([new Item('Conjured Mana Cake', 14, 10)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(8);
    });

    it("Quality decrease by 4 when the sell in date <= 0", function () {
        const gildedRose = new Shop([new Item('Conjured Mana Cake', 0, 10)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(6);
    });

    it("Quality value will never negative", function () {
        const gildedRose = new Shop([new Item('Conjured Mana Cake', 0, 2)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(MINIMUM_QUALITY);
    });
});
