import navMenuClassNames from './utils/navMenuClassNames';

class NavMenu {
  constructor(domParent) {
    this.$container = domParent;
    this._init();
  }

  _init() {
    this.body = document.body;
    this.$items = this.$container.querySelectorAll('.js-menu-item');
    this._bindEvents();
  }

  _bindEvents() {
    this.$items.forEach((item) => {
      if (item.querySelector('.js-sub-list')) {
        item.addEventListener('click', this._handleMenuItemClick.bind(this));
      }
    });

    this.$items.forEach((item) => {
      if (item.querySelector('.js-sub-list')) {
        item.addEventListener('keydown', this._handleMenuItemKeyDown.bind(this));
      }
    });

    this.body.addEventListener('click', this._handleBodyClick.bind(this));
    this.body.addEventListener('keydown', this._handleBodyKeyDown.bind(this));
  }

  _handleMenuItemClick(event) {
    this._checkOpenNavMenu(event);
  }

  _checkOpenNavMenu(event) {
    if (event.currentTarget.classList.contains(navMenuClassNames.ITEM_ACTIVE)) {
      event.currentTarget.querySelector('.js-sub-list').classList.remove(navMenuClassNames.SUB_LIST_ACTIVE);
      event.currentTarget
        .classList.remove(navMenuClassNames.ITEM_ACTIVE);
      event.currentTarget
        .querySelector('.js-submenu')
        .classList.remove(navMenuClassNames.SUB_MENU_ACTIVE);
    } else {
      event.currentTarget.querySelector('.js-sub-list').classList.add(navMenuClassNames.SUB_LIST_ACTIVE);
      event.currentTarget
        .querySelector('.js-submenu')
        .classList.add(navMenuClassNames.SUB_MENU_ACTIVE);
      event.currentTarget
        .classList.add(navMenuClassNames.ITEM_ACTIVE);
    }
  }

  _handleMenuItemKeyDown(event) {
    if (event.key === 'Enter') {
      this._checkOpenNavMenu(event);
    }
  }

  _handleBodyKeyDown(event) {
    if (event.key === 'Escape') {
      this._closeNavMenu();
    }
  }

  _closeNavMenu() {
    this.$items.forEach((item) => {
      if (item.classList.contains(navMenuClassNames.ITEM_ACTIVE)) {
        item.classList.remove(navMenuClassNames.ITEM_ACTIVE);
        item
          .querySelector('.js-submenu')
          .classList.remove(navMenuClassNames.SUB_MENU_ACTIVE);
        item
          .querySelector('.js-sub-list')
          .classList.remove(navMenuClassNames.SUB_LIST_ACTIVE);
      }
    });
  }

  _handleBodyClick(event) {
    if (!this.$container.contains(event.target)) {
      this._closeNavMenu();
    }
  }
}

export default NavMenu;
