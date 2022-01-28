const Item = require('./Item');
const { MINIMUM_QUALITY } = require('../constants');


class Conjured extends Item {

    constructor(sellIn, quality) {
        super('Conjured Mana Cake', sellIn, quality);
    }

    calculateQuality() {
        return this.sellIn > 0 ? this.quality - 2 : this.quality - 4;
    }

    update() {
        this.sellIn -= 1;
        this.quality = Math.max(MINIMUM_QUALITY, this.calculateQuality());
    }
}

module.exports = Conjured