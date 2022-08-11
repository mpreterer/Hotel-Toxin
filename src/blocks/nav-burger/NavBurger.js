class NavBurger {
  constructor(domParent) {
    this.container = domParent;
    this._init();
  }

  _init() {
    this.body = document.querySelector('body');
    this.menu = this.container.querySelector('.js-nav-burger__menu-burger');
    this._initEvents();
  }

  _initEvents() {
    this.container.addEventListener('click', this._eventOpen.bind(this));
    this._eventGlobalClose();
  }

  _eventGlobalClose() {
    this.body.addEventListener('click', (event) => {
      if (!this.container.contains(event.target)) {
        this.menu.classList.remove('js-nav-burger_open');
      }
    });
  }

  _eventOpen() {
    if (this.menu.classList.contains('js-nav-burger_open')) {
      this.menu.classList.remove('js-nav-burger_open');
    } else {
      this.menu.classList.add('js-nav-burger_open');
    }
  }
}

export default NavBurger;
