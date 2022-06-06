import TextField from "../text-input/text-input.js";

class RegistrationCard {
    constructor(domParent) {
        this.container = domParent;
        this.input = this.container.querySelectorAll('.js-registration-card__input');

        this._init();
    }

    _init() {
        this.input.forEach((item) => new TextField(item));
    }
}

export default RegistrationCard;