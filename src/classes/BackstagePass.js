const Item = require('./Item');
const { MINIMUM_QUALITY, MAXIMUM_QUALITY} = require('../constants');


class BackstagePass extends Item {
   
    constructor(sellIn, quality) {
        super('Backstage passes to a TAFKAL80ETC concert', sellIn, quality);
    }

    calculateQuality(){
      if(this.sellIn < MINIMUM_QUALITY) return MINIMUM_QUALITY;
      if (this.sellIn <= 5) return this.quality + 3;
      if (this.sellIn <= 10) return this.quality + 2;
      return this.quality + 1;
    }

    update() {
        this.sellIn -= 1;
        this.quality = Math.min(MAXIMUM_QUALITY, this.calculateQuality()); 
    } 

}



module.exports = BackstagePass