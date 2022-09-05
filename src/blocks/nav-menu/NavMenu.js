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
        item.addEventListener('click', this._openSubMenuClick.bind(this));
      }
    });

    this.$items.forEach((item) => {
      if (item.querySelector('.js-sub-list')) {
        item.addEventListener('keydown', this._openSubMenuKeyDown.bind(this));
      }
    });

    this.body.addEventListener('click', this._globalClose.bind(this));
    this.body.addEventListener('keydown', this._eventCloseWithEsc.bind(this));
  }

  _openSubMenuClick(event) {
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

  _openSubMenuKeyDown(event) {
    if (event.key === 'Enter') {
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
  }

  _eventCloseWithEsc(event) {
    if (event.key === 'Escape') {
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
  }

  _globalClose(event) {
    if (!this.$container.contains(event.target)) {
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
  }
}

export default NavMenu;
