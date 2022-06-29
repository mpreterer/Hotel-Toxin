import 'jquery-bar-rating/dist/jquery.barrating.min';

class StarsRating {
  constructor(domParent) {
    this.$container = $(domParent).find('.js-stars-rating');

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
      this.$container.addClass('rate-button_readonly');
    }
  }
}

export default StarsRating;
