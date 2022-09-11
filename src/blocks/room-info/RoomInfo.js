import NoUiSlider from '../../libs/no-ui-slider/NoUiSlider';

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
    new NoUiSlider(this.$slider);
  }
}

export default RoomInfo;
