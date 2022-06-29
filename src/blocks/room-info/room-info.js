import 'slick-carousel/slick/slick.min';
import StarsRating from '../stars-rating/stars-rating';

class RoomInfo {
  constructor(domParent) {
    this.$body = $(domParent).find('.js-room-info');
    this.$slider = this.$body.find('.js-room-info__slider-rooms');

    this._init();
  }

  _init() {
    this._initSlick();
    this._initStars();
  }

  _initSlick() {
    this.$slider.slick({
      dots: true,
    });
  }

  _initStars() {
    const { $body } = this;
    this.starsRating = new StarsRating($body);
  }
}

export default RoomInfo;
