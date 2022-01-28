// var Shop = require('../src/gilded_rose.js');
// const Item = require('../src/classes/Item');

const { LEGENDARY_QUALITY } = require('../src/constants');


const Legendary = require('../src/classes/Legendary');


describe("Legendary", function () {

    it("Name Should be 'Sulfuras, Hand of Ragnaros'", function () {

        const item = new Legendary(0, 0);
        item.update();
        expect(item.name).toEqual('Sulfuras, Hand of Ragnaros');

        // const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 0, 0)]);
        // const items = gildedRose.updateQuality();
        // expect('Sulfuras, Hand of Ragnaros').toEqual(items[0].name);
    });

    it("Quality must be " + LEGENDARY_QUALITY, function () {
        const item = new Legendary(2, 45);
        item.update();
        expect(item.quality).toEqual(LEGENDARY_QUALITY);


        // const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 2, 45)]);
        // const items = gildedRose.updateQuality();
        // expect(items[0].quality).toEqual(LEGENDARY_QUALITY);
    });

    it("Sell in date must be same and should't alter", function () {

        const item = new Legendary(10, 0);
        item.update();
        expect(item.sellIn).toEqual(10);

        // const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 10, 0)]);
        // const items = gildedRose.updateQuality();
        // expect(items[0].sellIn).toEqual(10);
    });

});
