var Shop = require('../src/gilded_rose.js');
const Item = require('../src/classes/Item');

const { MAXIMUM_QUALITY } = require('../src/constants');

describe("Backstage pass", function () {

    it("Quality increase by 1 before sell in date is over 10", function () {
        const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 14, 10)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(11);
    });

    it("Quality increase by 2 when sell in date is from 6 to 10 (included)", function () {
        const gildedRose = new Shop([
            new Item('Backstage passes to a TAFKAL80ETC concert', 10, 10),
            new Item('Backstage passes to a TAFKAL80ETC concert', 7, 10)
        ]);
        
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(12);
        expect(items[1].quality).toEqual(12);
    });


    it("Quality increase by 3 when sell in date is under 6", function () {
        const gildedRose = new Shop([
            new Item('Backstage passes to a TAFKAL80ETC concert', 5, 10)
        ]);
        
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(13);
    });

    it("Quality should be zero when sell in date is negative", function () {
        const gildedRose = new Shop([
            new Item('Backstage passes to a TAFKAL80ETC concert', 0, 10)
        ]);
        
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(0);
    });

    it("maximum quality should be " + MAXIMUM_QUALITY, function () {
        const gildedRose = new Shop([
            new Item('Backstage passes to a TAFKAL80ETC concert', 5, 49)
        ]);
        
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(MAXIMUM_QUALITY);
    });

   

});
