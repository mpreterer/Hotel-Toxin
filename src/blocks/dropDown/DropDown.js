class DropDown {
  constructor(domParent) {
    this.container = domParent;
    this._init();
  }

  _init() {
    this.body = document.querySelector('body');
    this.keyWords = this.container.getAttribute('data-key-phrases');
    this.inputName = this.container.querySelector('.js-dropDown__counts-guests');
    this.open = this.container.querySelector('.js-dropDown__name');
    this.counterPanel = this.container.querySelector('.js-dropDown__drop-block');
    this.itemName = this.container.querySelectorAll('[data-item-name]');
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
    
    this._checkOptions();
    this._openDropDown();
    this._dropDownCounter();
  }

  _openDropDown() {
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
    });

    if (this.hasControlPanel) {
      this._btnApply();
    }

    this._closeDropDownGlobal();
  }

  _closeDropDownGlobal() {
    this.body.addEventListener('click', (event) => {
      if (!this.container.contains(event.target)) {
        this.counterPanel.classList.remove('js-drop-open');
        this.counterPanel.classList.add('js-drop-close');
        if (this.open.classList.contains('dropDown__name_active')) {
          this.open.classList.remove('dropDown__name_active');
        }
      }
    });
  }

  _dropDownCounter() {
    this.counterContext.addEventListener('click', this._dropDownCounterHandler.bind(this));
  }

  _checkOptions() {
    this._checkBtnMinus();
    this._checkInputName();
    
    if (this.hasControlPanel) {
      this._checkBtnClear();
    }
  }

  _checkInputName() {
    let checkCount = [];
    const tempArray = [];

    this.counterNumber.forEach((element) => {
      checkCount += Number(element.value);
      tempArray.push(element.value);
    });

    if (checkCount > 0) {
      if (this.appointment === 'guests') {
        this._counterGuests(tempArray);
      } else if (this.appointment === 'furniture') {
        this._counterFurniture(tempArray);
      }
    }
  }

  _dropDownCounterHandler(event) {
    const target = event.target;

    if (target.classList.contains('js-dropDown-plus')) {
      this._buttonPlus(target);
    } else if (target.classList.contains('js-dropDown-minus')) {
      this._buttonMinus(target);
    }

    this._checkBtnMinus();
  }

  _buttonPlus(element) {
    let counterNumb = Number(element.previousElementSibling.value);
    counterNumb++;

    element.previousElementSibling.value = counterNumb;
    this._insetCountArray();
  }

  _buttonMinus(element) {
    let counterNumb = Number(element.nextSibling.value);
    counterNumb--;

    if (counterNumb < 0) {
      counterNumb = 0;
    }

    element.nextSibling.value = counterNumb;
    this._insetCountArray();
  }

  _checkBtnMinus() {
    this.counterNumber.forEach((element) => {
      if (Number(element.value) > 0) {
        element.previousElementSibling.disabled = false;
        element.previousElementSibling.classList.add('dropDown__circle-minus');
      } else {
        element.previousElementSibling.disabled = true;
        element.previousElementSibling.classList.remove('dropDown__circle-minus');
      }
    });
    
    if (this.hasControlPanel) {
      this._checkBtnClear();
    }
  }

  _checkBtnClear() {
    let checkCount = 0;

    this.counterNumber.forEach((element) => {
      checkCount += Number(element.value);
    });

    if (checkCount > 0) {
      this.btnClear.classList.remove('js-clear-none');
      this.btnClear.addEventListener('click', this._clearAllCounter.bind(this))
    } else {
      this.btnClear.classList.add('js-clear-none');
      this.btnClear.removeEventListener('click', this._clearAllCounter.bind(this))
    }
  }

  _clearAllCounter() {
    this.counterNumber.forEach((element) => {
      element.value = 0;
    });

    this.inputName.value = '';
  }

  _insetCountArray() {
    const countArray = [];

    this.counterNumber.forEach((element) => {
      countArray.push(element.value);
    });

    return this._validationStringValue(countArray);
  }

  _validationStringValue(countArray) {
    const choice = this.appointment;

    if (choice === 'guests') {
      this._counterGuests(countArray);
    } else if (choice === 'furniture') {
      this._counterFurniture(countArray);
    }
  }

  _btnApply() {
    this.btnApply.addEventListener('click', () => {
      this.counterPanel.classList.remove('js-drop-open');
      this.counterPanel.classList.add('js-drop-close');
    });
  }

  _counterGuests(countArray) {
    const adults = Number(countArray.slice(0, 1).join());
    const youngs = Number(countArray.slice(1, 2).join());
    const child = Number(countArray.slice(2, 3).join());
    const guests = adults + youngs + child;

    let strGuests = '';
    const arrayPhrases = this.keyWords.replace(/"/g, "").replace("[", "").replace("]", "").split(',');

    if (guests > 0) {
      if (guests === 1 || guests === 21) {
        strGuests = `${guests} ${arrayPhrases[0]}`;
      } else if (guests > 1 && guests < 5) {
        strGuests = `${guests} ${arrayPhrases[1]}`;
      } else {
        strGuests = `${guests} ${arrayPhrases[2]}`;
      }
    }

    this.inputName.value = `${strGuests}`;
  }

  _counterFurniture(countArray) {
    const bedRooms = Number(countArray.slice(0, 1).join());
    const bed = Number(countArray.slice(1, 2).join());
    const bathRoom = Number(countArray.slice(2, 3).join());
    const arrayName = [];

    this.itemName.forEach((item) => {
      arrayName.push(item);
    });
    
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

    if (strBedRooms !== '' && strBed !== '' && strBathRoom !== '') {
      strBathRoom = '';
      this.inputName.value = `${strBedRooms}, ${strBed}...`;
    } else if (strBedRooms !== '' && strBed !== '' && strBathRoom === '') {
      this.inputName.value = `${strBedRooms}, ${strBed}`;
    } else if (strBedRooms !== '' && strBed === '' && strBathRoom !== '') {
      this.inputName.value = `${strBedRooms}, ${strBathRoom}`;
    } else if (strBedRooms === '' && strBed !== '' && strBathRoom !== '') {
      this.inputName.value = `${strBed}, ${strBathRoom}`;
    } else if (strBedRooms === '' && strBed === '' && strBathRoom !== '') {
      this.inputName.value = `${strBathRoom}`;
    } else if (strBedRooms === '' && strBed !== '' && strBathRoom === '') {
      this.inputName.value = `${strBed}`;
    } else if (strBedRooms !== '' && strBed === '' && strBathRoom === '') {
      this.inputName.value = `${strBedRooms}`;
    } else {
      this.inputName.value = '';
    }
  }
}

export default DropDown;
