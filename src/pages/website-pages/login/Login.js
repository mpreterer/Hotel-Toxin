import './login.scss';
import '../../style.scss';

import NavMenu from '../../../blocks/nav-menu/NavMenu';

class Login {
  constructor() {
    this._init();
  }

  _init() {
    new NavMenu(document);
  }

  _getElements() {
    return {
      registratonCard: document.querySelectorAll(
        '[data-component-js="js-registration-card"]'
      )
    };
  }
}

new Login();
