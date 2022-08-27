class ButtonLike {
  constructor(domParent) {
    this.$container = domParent;
    this.$heart = this.$container.querySelector('.js-button-like__heart');
    this.count = this.$container.querySelector('.js-button-like__txt');

    this._init();
  }

  _init() {
    this._eventButton();
  }

  _eventButton() {
    this.$container.addEventListener('click', this._countLike.bind(this));
  }

  _countLike() {
    if (this.$heart.classList.contains('button-like_fill-heart')) {
      this.$heart.classList.remove('button-like_fill-heart');
      this.$container.classList.remove('button-like_active');
    } else {
      this.$heart.classList.toggle('button-like_fill-heart');
      this.$container.classList.toggle('button-like_active');
    }
    
    this.count.innerText -= [1, -1][+this.$container.classList.contains('button-like_active')];
  }
}

export default ButtonLike;
