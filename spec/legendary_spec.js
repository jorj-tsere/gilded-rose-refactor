var Shop = require('../src/gilded_rose.js');
const Item = require('../src/classes/Item');

const { LEGENDARY_QUALITY } = require('../src/constants');


describe("Legendary", function () {

    it("Name Should be 'Sulfuras, Hand of Ragnaros'", function () {
        const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 0, 0)]);
        const items = gildedRose.updateQuality();
        expect('Sulfuras, Hand of Ragnaros').toEqual(items[0].name);
    });

    it("Quality must be " + LEGENDARY_QUALITY, function () {
        const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 2, 45)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(LEGENDARY_QUALITY);
    });

    it("Sell in date must be same and should't alter", function () {
        const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 10, 0)]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).toEqual(10);
    });

});
