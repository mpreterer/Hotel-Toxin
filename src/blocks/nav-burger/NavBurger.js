import typeNavBurger from './utils/navBurgerClassNames';

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
      this.menu.classList.remove(typeNavBurger.BURGER_OPEN);
    }
  }

  _eventOpen() {
    if (this.menu.classList.contains(typeNavBurger.BURGER_OPEN)) {
      this.menu.classList.remove(typeNavBurger.BURGER_OPEN);
    } else {
      this.menu.classList.add(typeNavBurger.BURGER_OPEN);
    }
  }
}

export default NavBurger;
