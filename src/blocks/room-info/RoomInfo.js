import 'slick-carousel/slick/slick.min';
import '../stars-rating';

class RoomInfo {
  constructor(domParent) {
    this.$body = $(domParent);
    this.$slider = this.$body.find('.js-room-info__slider-rooms');

    this._init();
  }

  _init() {
    this._initSlick();
  }

  _initSlick() {
    this.$slider.slick({
      dots: true,
    });
  }
}

export default RoomInfo;
