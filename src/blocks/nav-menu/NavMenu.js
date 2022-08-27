class NavMenu {
  constructor(domParent) {
    this.$container = domParent;
    this._init();
  }

  _init() {
    this.body = document.querySelector('body');
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
    if (event.currentTarget.classList.contains('nav-menu__item_active')) {
      event.currentTarget.classList.remove('nav-menu__item_active');
      event.currentTarget.querySelector('.js-nav-menu__submenu').classList.remove('nav-menu__submenu_active');
    } else {
      event.currentTarget.classList.add('nav-menu__item_active');
      event.currentTarget.querySelector('.js-nav-menu__submenu').classList.add('nav-menu__submenu_active');
    }
  }

  _openSubMenuKeyDown(event) {
    if (event.key === 'Enter') {
      if (event.currentTarget.classList.contains('nav-menu__item_active')) {
        event.currentTarget.classList.remove('nav-menu__item_active');
        event.currentTarget.querySelector('.js-nav-menu__submenu').classList.remove('nav-menu__submenu_active');
      } else {
        event.currentTarget.classList.add('nav-menu__item_active');
        event.currentTarget.querySelector('.js-nav-menu__submenu').classList.add('nav-menu__submenu_active');
      }
    }
  }

  _eventCloseWithEsc(event) {
    if (event.key === 'Escape') {
      this.$items.forEach((item) => {
        if (item.classList.contains('nav-menu__item_active')) {
          item.classList.remove('nav-menu__item_active');
          item.querySelector('.js-nav-menu__submenu').classList.remove('nav-menu__submenu_active');
        }
      });
    }
  }

  _globalClose(event) {
    if (!this.$container.contains(event.target)) {
      this.$items.forEach((item) => {
        if (item.classList.contains('nav-menu__item_active')) {
          item.classList.remove('nav-menu__item_active');
          item.querySelector('.js-nav-menu__submenu').classList.remove('nav-menu__submenu_active');
        }
      });
    }
  }
}

export default NavMenu;
