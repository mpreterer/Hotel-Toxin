import navBurgerClassNames from './utils/navBurgerClassNames';

class NavBurger {
  constructor(domParent) {
    this.container = domParent;
    this._init();
  }

  _init() {
    this.body = document.body;
    this.menu = this.container.querySelector('.js-menu-burger');
    this.items = this.container.querySelectorAll('.js-burger-item');
    this.subList = this.container.querySelector('.js-burger-sub-list');
    this.button = this.container.querySelector('.js-burger-button');

    this._initEvents();
  }

  _initEvents() {
    this.button.addEventListener('click', this._handleNavBurgerClick.bind(this));
    this.items.forEach((el) => {
      if (el.querySelector('.js-burger-sub-list')) {
        el.addEventListener('click', this._handleItemClick.bind(this));
      }
    });
    this.body.addEventListener('click', this._handleBodyClick.bind(this));
  }

  _handleItemClick(event) {
    if (event.currentTarget.classList.contains(navBurgerClassNames.ITEM_ACTIVE)) {
      event.currentTarget
        .classList.remove(navBurgerClassNames.ITEM_ACTIVE);
      event.currentTarget.querySelector('.js-burger-sub-list')
        .classList.remove(navBurgerClassNames.SUB_LIST_ACTIVE);
      event.currentTarget
        .querySelector('.js-burger-submenu')
        .classList.remove(navBurgerClassNames.SUB_MENU_OPEN);
    } else {
      event.currentTarget
        .classList.add(navBurgerClassNames.ITEM_ACTIVE);
      event.currentTarget.querySelector('.js-burger-sub-list')
        .classList.add(navBurgerClassNames.SUB_LIST_ACTIVE);
      event.currentTarget
        .querySelector('.js-burger-submenu')
        .classList.add(navBurgerClassNames.SUB_MENU_OPEN);
    }
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
