import buttonLikeClassNames from './utils/buttonLikeClassNames';

class ButtonLike {
  constructor(domParent) {
    this.$container = domParent;
    this.$heart = this.$container.querySelector('.js-button-heart');
    this.count = this.$container.querySelector('.js-counter');

    this._init();
  }

  _init() {
    this._eventButton();
  }

  _eventButton() {
    this.$container.addEventListener('click', this._handleButtonLikeClick.bind(this));
  }

  _handleButtonLikeClick() {
    if (this.$heart.classList.contains(buttonLikeClassNames.FILL)) {
      this.$heart.classList.remove(buttonLikeClassNames.FILL);
      this.$container.classList.remove(buttonLikeClassNames.ACTIVE);
    } else {
      this.$heart.classList.toggle(buttonLikeClassNames.FILL);
      this.$container.classList.toggle(buttonLikeClassNames.ACTIVE);
    }

    this.count.innerText -= [1, -1][
      +this.$container.classList.contains(buttonLikeClassNames.ACTIVE)
    ];
  }
}

export default ButtonLike;
