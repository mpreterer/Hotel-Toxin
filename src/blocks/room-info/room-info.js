import 'slick-carousel/slick/slick.min.js'
import StarsRating from '../stars-rating/stars-rating'

class RoomInfo {
    constructor(domParent) {
        this.$body = $(domParent).find('.js-room-info');
        this.$slider = this.$body.find('.js-room-info__slider-rooms');

        this._init();
    }

    _init() {
        this._init_slick();
        this._init_stars();
    }

    _init_slick() {
        this.$slider.slick({
            dots: true,
        })
    }
    
    _init_stars() {
        const { $body } = this;
        this.starsRating = new StarsRating($body);
    }
}

export default RoomInfo;