import SlickCarousel from '../../libs/slick-carousel/SlickCarousel';

class RoomInfo {
  constructor(domParent) {
    this.$body = $(domParent);
    this.$slider = this.$body.find('.js-slider-rooms');

    this._init();
  }

  _init() {
    this._initSlick();
  }

  _initSlick() {
    new SlickCarousel(this.$slider);
  }
}

export default RoomInfo;
