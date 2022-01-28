const Item = require('./Item');
const { MAXIMUM_QUALITY } = require('../constants');


class AgedBrie extends Item {

    constructor(sellIn, quality) {
        super('Aged Brie', sellIn, quality);
    }

    calculateQuality() {
        return this.sellIn > 0 ? this.quality + 1 : this.quality + 2;
    }

    update() {
        this.sellIn -= 1;
        this.quality = Math.min(MAXIMUM_QUALITY, this.calculateQuality());
    }

}



module.exports = AgedBrie;