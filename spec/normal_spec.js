// var Shop = require('../src/gilded_rose.js');
// const Item = require('../src/classes/Item');

const { MINIMUM_QUALITY } = require('../src/constants');




const Normal = require('../src/classes/Normal');




describe("Normal Item", function () {

    it("Quality decrease by 1 when sell in date is positive", function () {

        const item = new Normal('Random 1', 14, 10);
        item.update();
        expect(item.quality).toEqual(9);

        // const gildedRose = new Shop([new Item('Random 1', 14, 10)]);
        // const items = gildedRose.updateQuality();
        // expect(items[0].quality).toEqual(9);
    });

    it("Quality decrease by 2 when sell in date <= 0", function () {


        const item = new Normal('Random 1', 0, 10);
        item.update();
        expect(item.quality).toEqual(8);

        // const gildedRose = new Shop([new Item('Random 1', 0, 10)]);
        // const items = gildedRose.updateQuality();
        // expect(items[0].quality).toEqual(8);
    });

    it("Quality will never negative", function () {

        const item = new Normal('Random 1', 0, 1);
        item.update();
        expect(item.quality).toEqual(MINIMUM_QUALITY);

        // const gildedRose = new Shop([new Item('Random 1', 0, 1)]);
        // const items = gildedRose.updateQuality();
        // expect(items[0].quality).toEqual(MINIMUM_QUALITY);
    });
});
