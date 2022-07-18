class NavMenu {
  constructor(domParent) {
    this.$container = domParent;
    this._init();
  }

  _init() {
    this.$items = this.$container.querySelectorAll('.js-nav-menu__item');
    
    this.$items.forEach((item) => {
      if (item.querySelector('.js-nav-menu__subList')) {
        item.addEventListener('click', (event) => {
          if (event.currentTarget.classList.contains('nav-menu__item_active')) {
            event.currentTarget.classList.remove('nav-menu__item_active');
            event.currentTarget.querySelector('.js-nav-menu__submenu')
            .classList.remove('nav-menu__submenu_active');
          } else {
            event.currentTarget.classList.add('nav-menu__item_active');
            event.currentTarget.querySelector('.js-nav-menu__submenu')
            .classList.add('nav-menu__submenu_active');
          }
        });
      }
    });
  }
}

export default NavMenu;
