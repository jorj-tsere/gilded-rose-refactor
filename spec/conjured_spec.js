// var Shop = require('../src/gilded_rose.js');
// const Item = require('../src/classes/Item');

const { MINIMUM_QUALITY } = require('../src/constants');

const Conjured = require('../src/classes/Conjured');

describe("Conjured", function () {

    it("Quality decrease by 2 when the sell in date is positive", function () {

        const item = new Conjured(14, 10);
        item.update();
        expect(item.quality).toEqual(8);

        // const gildedRose = new Shop([new Item('Conjured Mana Cake', 14, 10)]);
        // const items = gildedRose.updateQuality();
        // expect(items[0].quality).toEqual(8);
    });

    it("Quality decrease by 4 when the sell in date <= 0", function () {
        const item = new Conjured(0, 10);
        item.update();
        expect(item.quality).toEqual(6);

        // const gildedRose = new Shop([new Item('Conjured Mana Cake', 0, 10)]);
        // const items = gildedRose.updateQuality();
        // expect(items[0].quality).toEqual(6);
    });

    it("Quality value will never negative", function () {
        const item = new Conjured(0, 2);
        item.update();
        expect(item.quality).toEqual(MINIMUM_QUALITY);

        // const gildedRose = new Shop([new Item('Conjured Mana Cake', 0, 2)]);
        // const items = gildedRose.updateQuality();
        // expect(items[0].quality).toEqual(MINIMUM_QUALITY);
    });
});
