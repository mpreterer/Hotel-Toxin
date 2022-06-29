import './login.scss';
import '../../style.scss';

import NavMenu from '../../../blocks/nav-menu/nav-menu.js';

class Login {
    constructor() {
        this._init();
      }
      
    _init() {
        const { 
            registratonCard,
        } = this._get_elements();

        new NavMenu(document);
        registratonCard.forEach((item) => new RegistrationCard(item));
    }   

    _get_elements() {
        return {
            registratonCard: document.querySelectorAll('[data-component-js="js-registration-card"]'),
        };
    }
}

new Login();
