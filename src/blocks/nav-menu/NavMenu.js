import typeNavMenu from './utils/navMenuClassNames';

class NavMenu {
  constructor(domParent) {
    this.$container = domParent;
    this._init();
  }

  _init() {
    this.body = document.body;
    this.$items = this.$container.querySelectorAll('.js-nav-menu__item');
    this._bindEvents();
  }

  _bindEvents() {
    this.$items.forEach((item) => {
      if (item.querySelector('.js-nav-menu__sub-list')) {
        item.addEventListener('click', this._openSubMenuClick.bind(this));
      }
    });

    this.$items.forEach((item) => {
      if (item.querySelector('.js-nav-menu__sub-list')) {
        item.addEventListener('keydown', this._openSubMenuKeyDown.bind(this));
      }
    });

    this.body.addEventListener('click', this._globalClose.bind(this));
    this.body.addEventListener('keydown', this._eventCloseWithEsc.bind(this));
  }

  _openSubMenuClick(event) {
    if (event.currentTarget.classList.contains(typeNavMenu.ITEM_ACTIVE)) {
      event.currentTarget.classList.remove(typeNavMenu.ITEM_ACTIVE);
      event.currentTarget
        .querySelector('.js-nav-menu__submenu')
        .classList.remove(typeNavMenu.SUB_MENU_ACTIVE);
    } else {
      event.currentTarget.classList.add(typeNavMenu.ITEM_ACTIVE);
      event.currentTarget
        .querySelector('.js-nav-menu__submenu')
        .classList.add(typeNavMenu.SUB_MENU_ACTIVE);
    }
  }

  _openSubMenuKeyDown(event) {
    if (event.key === 'Enter') {
      if (event.currentTarget.classList.contains(typeNavMenu.ITEM_ACTIVE)) {
        event.currentTarget.classList.remove(typeNavMenu.ITEM_ACTIVE);
        event.currentTarget
          .querySelector('.js-nav-menu__submenu')
          .classList.remove(typeNavMenu.SUB_MENU_ACTIVE);
      } else {
        event.currentTarget.classList.add(typeNavMenu.ITEM_ACTIVE);
        event.currentTarget
          .querySelector('.js-nav-menu__submenu')
          .classList.add(typeNavMenu.SUB_MENU_ACTIVE);
      }
    }
  }

  _eventCloseWithEsc(event) {
    if (event.key === 'Escape') {
      this.$items.forEach((item) => {
        if (item.classList.contains(typeNavMenu.ITEM_ACTIVE)) {
          item.classList.remove(typeNavMenu.ITEM_ACTIVE);
          item
            .querySelector('.js-nav-menu__submenu')
            .classList.remove(typeNavMenu.SUB_MENU_ACTIVE);
        }
      });
    }
  }

  _globalClose(event) {
    if (!this.$container.contains(event.target)) {
      this.$items.forEach((item) => {
        if (item.classList.contains(typeNavMenu.ITEM_ACTIVE)) {
          item.classList.remove(typeNavMenu.ITEM_ACTIVE);
          item
            .querySelector('.js-nav-menu__submenu')
            .classList.remove(typeNavMenu.SUB_MENU_ACTIVE);
        }
      });
    }
  }
}

export default NavMenu;
