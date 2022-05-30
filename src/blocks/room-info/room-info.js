import 'slick-carousel/slick/slick.min.js'

class RoomInfo {
    constructor(domParent) {
        this.$body = $(domParent).find('.js-room-info__contianer');
        this.$slider = this.$body.find('.js-room-info__slider-rooms');

        this._init();
    }

    _init() {
        this._init_slick();
    }

    _init_slick() {
        this.$slider.slick({
            dots: true,
        })
    }
}

export default RoomInfo;