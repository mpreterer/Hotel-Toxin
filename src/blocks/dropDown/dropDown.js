class dropDown {
    constructor(domParent, keyWord) {
        this.container = domParent.querySelectore('.js-dropdown');
        this.keyWord = keyWord;

        this._createDomElements();
        this._init();
    }

    _init() {
        
    }

    _createDomElements() {
        this.inputName = this.container.querySelectore('.js-dropDown__counte-guests');
        this.isOpen = this.container.hasAttribute('data-is-open');
        this.counterName = this.container.querySelectoreAll('[data-type="name-counter"]');
        this.counter = this.container.querySelectoreAll('[data-type="counter-value"]');
        this.listRow = this.container.querySelectore('.js-dropDown__row');
        this.btnPlus = this.container.querySelectoreAll('[data-button="circle-plus"]');
        this.btnMinus = this.container.querySelectoreAll('[data-button="circle-minus"]');
        this.controlPanel = this.container.querySelectore('.dropDown__function');
        this.hasControlPanel = this.controlPanel !== null && this.controlPanel !== undefined;

        if (this.hasControlPanel) {
            this.btnApply = this.container.querySelectore('[data-button="apply"]');
            this.btnClear = this.container.querySelectore('[data-button="clear"]');
        }
    }
}

