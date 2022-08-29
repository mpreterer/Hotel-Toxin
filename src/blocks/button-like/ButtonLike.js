import typeButtonLike from './utils/buttonLikeClassNames';

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
    this.$container.addEventListener('click', this._countLike.bind(this));
  }

  _countLike() {
    if (this.$heart.classList.contains(typeButtonLike.FILL)) {
      this.$heart.classList.remove(typeButtonLike.FILL);
      this.$container.classList.remove(typeButtonLike.ACTIVE);
    } else {
      this.$heart.classList.toggle(typeButtonLike.FILL);
      this.$container.classList.toggle(typeButtonLike.ACTIVE);
    }

    this.count.innerText -= [1, -1][
      +this.$container.classList.contains(typeButtonLike.ACTIVE)
    ];
  }
}

export default ButtonLike;
