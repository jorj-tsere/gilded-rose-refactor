var Shop = require('../src/gilded_rose.js');
const Item = require('../src/classes/Item');

describe("Aged Brie", function () {

    it("Name Should be 'Aged Brie'", function () {
        const gildedRose = new Shop([new Item("Aged Brie", 20, 12)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).toEqual('Aged Brie');
    });

    it("Sell date should decrease", function () {
        const gildedRose = new Shop([new Item("Aged Brie", 20, 12)]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).toEqual(19);
    });

    it("Quality should increase by 1 before sellIn date >= 0", function () {
        const gildedRose = new Shop([new Item("Aged Brie", 20, 12)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(13);
    });

    it("Quality should increase by 2 after sell in date approches", function () {
        const gildedRose = new Shop([new Item("Aged Brie", 0, 10)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(12);
    });

});
