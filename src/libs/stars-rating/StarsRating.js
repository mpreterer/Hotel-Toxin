import 'jquery-bar-rating/dist/jquery.barrating.min';

class StarsRating {
  constructor(params) {
    this.$container = params.body;
    this.theme = params.theme;
    this.initialRating = params.initialRating;
    this.showSelectedRating = params.showSelectedRating;
    this.isReadonly = params.readonly;

    this._init();
  }

  _init() {
    this.starsPlugin = this.$container.barrating({
      theme: this.theme,
      initialRating: this.initialRating,
      showSelectedRating: this.showSelectedRating,
      readonly: this.isReadonly,
    });
  }
}

export default StarsRating;
