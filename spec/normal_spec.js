var Shop = require('../src/gilded_rose.js');
const Item = require('../src/classes/Item');

const { MINIMUM_QUALITY } = require('../src/constants');

describe("Normal Item", function () {

    it("Quality decrease by 1 when sell in date is positive", function () {
        const gildedRose = new Shop([new Item('Random 1', 14, 10)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(9);
    });

    it("Quality decrease by 2 when sell in date <= 0", function () {
        const gildedRose = new Shop([new Item('Random 1', 0, 10)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(8);
    });

    it("Quality will never negative", function () {
        const gildedRose = new Shop([new Item('Random 1', 0, 1)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(MINIMUM_QUALITY);
    });
});
