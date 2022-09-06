import navBurgerClassNames from './utils/navBurgerClassNames';

class NavBurger {
  constructor(domParent) {
    this.container = domParent;
    this._init();
  }

  _init() {
    this.body = document.body;
    this.menu = this.container.querySelector('.js-menu-burger');
    this._initEvents();
  }

  _initEvents() {
    this.container.addEventListener('click', this._handleNavBurgerClick.bind(this));
    this.body.addEventListener('click', this._handleBodyClick.bind(this));
  }

  _handleBodyClick(event) {
    if (!this.container.contains(event.target)) {
      this.menu.classList.remove(navBurgerClassNames.BURGER_OPEN);
    }
  }

  _handleNavBurgerClick() {
    if (this.menu.classList.contains(navBurgerClassNames.BURGER_OPEN)) {
      this.menu.classList.remove(navBurgerClassNames.BURGER_OPEN);
    } else {
      this.menu.classList.add(navBurgerClassNames.BURGER_OPEN);
    }
  }
}

export default NavBurger;
