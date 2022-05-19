class dropDown {
    constructor(domParemt) {
        this.container = domParemt;

        this._init();
    }

    _init() {
        this.inputName = this.container.querySelector('.js-dropDown__counte-guests');
        this.open = this.container.querySelector('.js-dropDown__name');
        this.counterPanel = this.container.querySelector('.js-dropDown__drop-block');
        this.counterContext = this.container.querySelector('.js-dropDown__items');
        this.counterName = this.container.querySelectorAll('.dropDown__dropItem');
        this.counter = this.container.querySelectorAll('.dropDown__counter');
        this.btnPlus = this.container.querySelectorAll('.dropDown__circle-plus');
        this.btnMinus = this.container.querySelectorAll('.dropDown__circle-minus');
        this.controlPanel = this.container.querySelector('.dropDown__function');
        this.hasControlPanel = this.controlPanel !== null && this.controlPanel !== undefined;

        if (this.hasControlPanel) {
            this.btnApply = this.container.querySelector('.dropDown__function-apply');
            this.btnClear = this.container.querySelector('.dropDown__function-clear');
        }
        
        this._open_drop_down();
        this._drop_down_counter();
    }

    _open_drop_down() {
        this.open.addEventListener('click', () => {
            if (this.counterPanel.classList.contains('js-drop-close')) {
                this.counterPanel.classList.toggle('js-drop-close');
                this.counterPanel.classList.add('js-drop-open');
            } else {
                this.counterPanel.classList.toggle('js-drop-open');
                this.counterPanel.classList.add('js-drop-close');
            }
        })
    }

    _drop_down_counter() {
        this.counterContext.addEventListener('click', this._drop_down_counter_handler.bind(this));
    }

    _drop_down_counter_handler(event) {
        let target = event.target;

        if(target.classList.contains('js-dropDown-plus')) {
            this._button_plus(target);
            console.log(target)
        } else if(target.classList.contains('js-dropDown-minus')) {
            this._button_minus(target);
        }
    }

    _button_plus(element) {
        console.log(element.previousElementSibling);
    }

    _button_minus(element) {
        console.log(element.previousElementSibling);
    }


}

export default dropDown;