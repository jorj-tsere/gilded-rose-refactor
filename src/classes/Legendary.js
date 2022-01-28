const Item = require('./Item');
const { LEGENDARY_QUALITY } = require('../constants');

class LegendaryItem extends Item {
    constructor(sell_in) {
        super('Sulfuras, Hand of Ragnaros', sell_in, LEGENDARY_QUALITY);
    }

    update() {
        // it never alters
    }
}

module.exports = LegendaryItem;