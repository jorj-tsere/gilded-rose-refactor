const Item = require('./Item');
const { MINIMUM_QUALITY } = require('../constants');

class Normal extends Item {
    calculateQuality() {
        return this.sellIn > 0 ? this.quality - 1 : this.quality - 2;
    }

    update() {
        this.sellIn -= 1;
        this.quality = Math.max(MINIMUM_QUALITY, this.calculateQuality());
    }

    isValuebleFor() {
        return true;
    }
}

module.exports = Normal;