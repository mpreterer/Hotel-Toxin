import StarsRating from '../../libs/stars-rating/StarsRating';

class Stars {
  constructor(domParent) {
    this.container = $(domParent);
    this.showSelectedRating = this.container.attr('data-selected-rating');
    this.starsBtn = this.container.find('[data-stars]');
    this.valueRating = this.starsBtn.attr('data-rating');
    this.valueReadonly = this.starsBtn.attr('data-readonly');

    this._init();
  }

  _init() {
    const isReadonly = this.valueReadonly === 'true';

    this.stars = new StarsRating({
      body: this.starsBtn,
      theme: 'css-stars',
      initialRating: Number(this.valueRating),
      showSelectedRating: false,
      readonly: isReadonly,
    });
  }
}

export default Stars;
