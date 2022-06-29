import './login.scss';
import '../../style.scss';

import NavMenu from '../../../blocks/nav-menu/nav-menu';

class Login {
  constructor() {
    this._init();
  }
    
  _init() {
    new NavMenu(document);
  }
}

new Login();
