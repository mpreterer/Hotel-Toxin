import './headerFooter.scss';
import '../../../blocks/header/header.scss';
import '../../../blocks/footer/footer.scss';
import '../../../pages/style.scss';
import NavMenu from '../../../blocks/nav-menu/nav-menu';

class HeaderFooter {
  constructor() {
    this._init();
  }

  _init() {
    const { navMenu } = this._getElement();
    navMenu.forEach((item) => new NavMenu(item));
  }

  _getElement() {
    return {
      navMenu: document.querySelectorAll('[data-component-js="js-header"]'),
    };
  }
}

export default HeaderFooter;

new HeaderFooter();
