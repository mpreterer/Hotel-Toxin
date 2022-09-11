import 'slick-carousel/slick/slick.min';
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';

class SlickCarousel {
  constructor(domParent) {
    this.container = domParent;
    this._init();
  }

  _init() {
    this.container.slick({
      dots: true,
    });
  }
}

export default SlickCarousel;
