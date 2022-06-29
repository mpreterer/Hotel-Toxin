class DropDown {
    constructor(domParent, keyWords) {
        this.container = domParent.querySelector('.js-dropDown');
        this.keyWords = keyWords;

        this._init();
    }

    _init() {
        this.body = document.querySelector('body');
        this.inputName = this.container.querySelector('.js-dropDown__counte-guests');
        this.open = this.container.querySelector('.js-dropDown__name');
        this.counterPanel = this.container.querySelector('.js-dropDown__drop-block');
        this.itenName = this.container.querySelectorAll('[data-item-name]');
        this.counterContext = this.container.querySelector('.js-dropDown__items');
        this.counterNumber = this.container.querySelectorAll('.js-dropDown__counter');
        this.counterName = this.container.querySelectorAll('.dropDown__dropItem');
        this.appointment = this.container.getAttribute('data-attribute-appointment');
        this.btnPlus = this.container.querySelectorAll('.dropDown__circle-plus');
        this.btnMinus = this.container.querySelectorAll('.dropDown__circle-minus');
        this.controlPanel = this.container.querySelector('.dropDown__function');
        this.hasControlPanel = this.controlPanel !== null && this.controlPanel !== undefined;

        if (this.hasControlPanel) {
            this.btnApply = this.container.querySelector('.js-dropDown_apply');
            this.btnClear = this.container.querySelector('.js-dropDown_clear');
        }
        
        this._check_options();
        this._open_drop_down();
        this._drop_down_counter();
    }

    _open_drop_down() {
        this.open.addEventListener('click', () => {
            if (this.counterPanel.classList.contains('js-drop-close')) {
                this.counterPanel.classList.toggle('js-drop-close');
                this.counterPanel.classList.add('js-drop-open');
                this.open.classList.toggle('dropDown__name_active');
            } else {
                this.counterPanel.classList.toggle('js-drop-open');
                this.counterPanel.classList.add('js-drop-close');
                this.open.classList.toggle('dropDown__name_active');
            }
        })

        if (this.hasControlPanel) {
            this._btn_apply();
        }

        this._close_drop_down_global();
    }

    _close_drop_down_global() {
        this.body.addEventListener('click',(event)=> {
            if (!this.container.contains(event.target)) {
                this.counterPanel.classList.remove('js-drop-open');
                this.counterPanel.classList.add('js-drop-close');
                if (this.open.classList.contains('dropDown__name_active')) {
                    this.open.classList.remove('dropDown__name_active');
                }
            }
        })
    }

    _drop_down_counter() {
        this.counterContext.addEventListener('click', this._drop_down_counter_handler.bind(this));
    }

    _check_options() {
        this._check_btn_minus();
        this._check_input_name();
        
        if (this.hasControlPanel) {
            this._check_btn_clear();
        }
    }

    _check_input_name() {
        let checkCount = [];
        let tempArray = []

        this.counterNumber.forEach(element => {
            checkCount += Number(element.value);
            tempArray.push(element.value);
        });

        if (checkCount > 0) {
            if (this.appointment == 'guests') {
                this._counter_guests(tempArray);
            }
            else if (this.appointment == 'furniture') {
                this._counter_furniture(tempArray);
            }
        }
    }

    _drop_down_counter_handler(event) {
        let target = event.target;

        if(target.classList.contains('js-dropDown-plus')) {
            this._button_plus(target);
        } else if(target.classList.contains('js-dropDown-minus')) {
            this._button_minus(target);
        }

        this._check_btn_minus();
    }

    _button_plus(element) {
        let counterNumb = Number(element.previousElementSibling.value);
        counterNumb++;

        element.previousElementSibling.value = counterNumb;
        this._inset_count_array();
    }

    _button_minus(element) {
        let counterNumb = Number(element.nextSibling.value);
        counterNumb--;

        if (counterNumb < 0) [
            counterNumb = 0
        ]

        element.nextSibling.value = counterNumb;
        this._inset_count_array();
    }

    _check_btn_minus() {
        this.counterNumber.forEach(element => {
            if (Number(element.value) > 0) {
                element.previousElementSibling.disabled = false;
                element.previousElementSibling.classList.add('dropDown__circle-minus');
            } else {
                element.previousElementSibling.disabled = true;
                element.previousElementSibling.classList.remove('dropDown__circle-minus');
            }
        });
        
        if (this.hasControlPanel) {
            this._check_btn_clear();
        }
    }

    _check_btn_clear() {
        let checkCount = 0;

        this.counterNumber.forEach(element => {
            checkCount += Number(element.value);
        });

        if (checkCount > 0) {
            this.btnClear.classList.remove('js-clear-none');
            this.btnClear.addEventListener('click', this._clear_all_counter.bind(this))
        } else {
            this.btnClear.classList.add('js-clear-none');
            this.btnClear.removeEventListener('click', this._clear_all_counter.bind(this))
        }
    }

    _clear_all_counter() {
        this.counterNumber.forEach(element => {
            element.value = 0;
        });

        this.inputName.value = '';
    }

    _inset_count_array() {
        let countArray = [];

        this.counterNumber.forEach(element => {
            countArray.push(element.value)
        });

        return this._validation_string_value(countArray);
    }

    _validation_string_value(countArray) {
        let choice = this.appointment;

        if (choice == 'guests') {
            this._counter_guests(countArray);
        }  else if (choice == 'furniture') {
            this._counter_furniture(countArray);
        }
    }

    _btn_apply() {
        this.btnApply.addEventListener('click', () => {
            this.counterPanel.classList.remove('js-drop-open');
            this.counterPanel.classList.add('js-drop-close');
        })
    }

    _counter_guests(countArray) {
        let adults = Number(countArray.slice(0,1).join());
        let youngs = Number(countArray.slice(1,2).join());
        let child = Number(countArray.slice(2,3).join());
        let guests = adults + youngs + child;

        let strGuests = '';

        if (guests > 0) {
            if (guests == 1 || guests == 21) {
                strGuests = `${guests} ${this.keyWords[0]}`;
            } else if (guests > 1 && guests < 5) {
                strGuests = `${guests} ${this.keyWords[1]}`;
            } else {
                strGuests = `${guests} ${this.keyWords[2]}`;
            }
        }

        this.inputName.value = `${strGuests}`;
    }

    _counter_furniture(countArray) {
        let bedRooms = Number(countArray.slice(0,1).join());
        let bed = Number(countArray.slice(1,2).join());
        let bathRoom = Number(countArray.slice(2,3).join());
        let arrayName = [];

        this.itenName.forEach((item)=>{
            arrayName.push(item);
        })
        
        let strBedRooms = '';
        let strBed = '';
        let strBathRoom = '';

        if (bedRooms > 0) {
            strBedRooms = `${bedRooms} ${arrayName[0].textContent}`;
        }

        if (bed > 0) {
            strBed = `${bed} ${arrayName[1].textContent}`;
        }

        if (bathRoom > 0) {
            strBathRoom = `${bathRoom} ${arrayName[2].textContent}`;
        }

        if (strBedRooms != '' && strBed != '' && strBathRoom != '') {
            strBathRoom = '';
            this.inputName.value = `${strBedRooms}, ${strBed}...`;
        } else if (strBedRooms != '' && strBed != '' && strBathRoom == '') {
            this.inputName.value = `${strBedRooms}, ${strBed}`;
        } else if (strBedRooms != '' && strBed == '' && strBathRoom != '') {
            this.inputName.value = `${strBedRooms}, ${strBathRoom}`;
        } else if (strBedRooms == '' && strBed != '' && strBathRoom != '') {
            this.inputName.value = `${strBed}, ${strBathRoom}`;
        } else if (strBedRooms == '' && strBed == '' && strBathRoom != '') {
            this.inputName.value = `${strBathRoom}`;
        } else if (strBedRooms == '' && strBed != '' && strBathRoom == '') {
            this.inputName.value = `${strBed}`;
        } else if (strBedRooms != '' && strBed == '' && strBathRoom == '') {
            this.inputName.value = `${strBedRooms}`;
        } else {
            this.inputName.value = '';
        }
    }

}

export default DropDown;