const AgedBrie = require('../src/classes/AgedBrie');

describe("Aged Brie", function () {
    it("Name Should be 'Aged Brie'", function () {
        let item = new AgedBrie(20, 12);
        item.update();
        expect(item.name).toEqual('Aged Brie');
    });


    it("Sell date should decrease", function () {
        let item = new AgedBrie(20, 12);
        item.update();
        expect(item.sellIn).toEqual(19);
    });

    it("Quality should increase by 1 before sellIn date >= 0", function () {
        const item = new AgedBrie(20, 12);
        item.update();
        expect(item.quality).toEqual(13);
    });

    it("Quality should increase by 2 after sell in date approches", function () {
        const item = new AgedBrie(0, 10);
        item.update();
        expect(item.quality).toEqual(12);
    });

});
