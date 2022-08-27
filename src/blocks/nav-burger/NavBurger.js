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
    this.body.addEventListener('click', this._eventGlobalClose.bind(this));
  }

  _eventGlobalClose(event) {
    if (!this.container.contains(event.target)) {
      this.menu.classList.remove('nav-burger__menu-burger_open');
    }
  }

  _eventOpen() {
    if (this.menu.classList.contains('nav-burger__menu-burger_open')) {
      this.menu.classList.remove('nav-burger__menu-burger_open');
    } else {
      this.menu.classList.add('nav-burger__menu-burger_open');
    }
  }
}

export default NavBurger;
