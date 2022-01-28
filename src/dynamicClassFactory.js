const Normal = require('./classes/Normal');
const AgedBrie = require('./classes/AgedBrie');
const BackstagePass = require('./classes/BackstagePass');
const Conjured = require('./classes/Conjured');
const Legendary = require('./classes/Legendary');

const classes = {
    AgedBrie,
    BackstagePass,
    Conjured,
    Legendary,
    Normal
};

class DynamicClass {
    constructor(className, opts) {
        if (className !== 'Normal') {
            return new classes[className](opts.sellIn, opts.quality);
        }
        return new classes[className](opts.name, opts.sellIn, opts.quality);
    }
}

module.exports = DynamicClass;