class AboutRoom {
  constructor(domParent) {
    this.container = domParent;
    this._init();
  }

  _init() {
    this.icons = this.container.querySelectorAll('.js-about-room-icon');
    this._setIcons();
  }

  _setIcons() {
    this.icons.forEach((el) => {
      el.classList.add(el.getAttribute('data-class'));
    });
  }
}

export default AboutRoom;
