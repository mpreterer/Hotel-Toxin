import 'jquery-bar-rating/dist/jquery.barrating.min';
import typeStars from './utils/starsRatingClassNames';

class StarsRating {
  constructor(domParent) {
    this.$container = $(domParent);

    this._findDomElements();
    this._init();
  }

  _findDomElements() {
    this.$starsBtn = this.$container.find('[data-rating-stars]');
    this.valueRating = this.$starsBtn.attr('data-rating');
    this.valueReadonly = this.$starsBtn.attr('data-readonly');
  }

  _init() {
    const isReadonly = this.valueReadonly === 'true';

    this.$starsBtn.barrating({
      theme: 'css-stars',
      initialRating: parseInt(this.valueRating),
      showSelectedRating: false,
      readonly: isReadonly,
    });

    if (isReadonly) {
      this.$container.addClass(typeStars.READONLY);
    }
  }
}

export default StarsRating;
