import './Registration.scss';
import '../../style.scss';

import RegistrationCard from '../../../blocks/registration-card/registration-card';
import NavMenu from '../../../blocks/nav-menu/nav-menu';

class Registration {
  constructor() {
    this._init();
  }
    
  _init() {
    const {
      registratonCard,
    } = this._getElements();

    new NavMenu(document);
    registratonCard.forEach((item) => new RegistrationCard(item));
  }

  _getElements() {
    return {
      registratonCard: document.querySelectorAll('[data-component-js="js-registration-card"]'),
    };
  }
}

new Registration();
