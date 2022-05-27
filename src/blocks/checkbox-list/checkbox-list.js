class CheckboxList {
    constructor(domParent) {
        this.$container = domParent;

        this._init();
    }

    _init() {
        this.$input = this.$container.querySelector('.js-checkbox-list__name');
        this.$arrow = this.$container.querySelector('.arrow-expend-btn');
        this.$menu = this.$container.querySelector('.js-checkbox-list__menu');
        this.isOpen = this.$container.classList.contains('js-checkbox-list-open');

        console.log(this.isOpen)
        this._event_open();
    }

    _event_open() { 
        if (this.isOpen) {
            this.$menu.classList.remove('checkbox-list__name_hide');
        } else {
            this.$menu.classList.add('checkbox-list__name_hide');
        }

        this.$input.addEventListener('click', this._open_list.bind(this));
        document.addEventListener('click', this._global_open.bind(this), true);
    }

    _global_open(event) {
        const { target } = event;
        const isClickOnList = this.$container.contains(target);
        const hasClickOutSideList = !isClickOnList;
        
        if (hasClickOutSideList) {
          this._hide_list();
        }
    }

    _open_list() {
        if (this.$menu.classList.contains('checkbox-list__name_hide')) {
            this.$menu.classList.remove('checkbox-list__name_hide');
            this._rotate_arrow(true);
        } else {
            this.$menu.classList.toggle('checkbox-list__name_hide');
            this._rotate_arrow(false);
        }
    }

    _hide_list() {
        this.$menu.classList.add('checkbox-list__name_hide');
        this.$arrow.classList.remove('arrow-expend-btn_active');
    }

    _rotate_arrow(side_top) {
        if (side_top) {
            this.$arrow.classList.add('arrow-expend-btn_active');
        } else {
            this.$arrow.classList.toggle('arrow-expend-btn_active');
        }
    }
}

export default CheckboxList;