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
    if (this.$heart.classList.contains('fill-heart')) {
      this.$heart.classList.remove('fill-heart');
      this.$container.classList.remove('active-heart');
    } else {
      this.$heart.classList.toggle('fill-heart');
      this.$container.classList.toggle('active-heart');
    }
    
    this.count.innerText -= [1, -1][+this.$container.classList.contains('active-heart')];
  }
}

export default ButtonLike;
