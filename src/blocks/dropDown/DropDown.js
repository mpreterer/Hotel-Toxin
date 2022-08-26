class DropDown {
  constructor(domParent) {
    this.container = domParent;
    this._init();
  }

  _init() {
    this.body = document.querySelector('body');
    this.keyWords = this.container.getAttribute('data-key-phrases');
    this.inputName = this.container.querySelector('.js-drop-down__counts-guests');
    this.open = this.container.querySelector('.js-drop-down__name');
    this.counterPanel = this.container.querySelector('.js-drop-down__drop-block');
    this.itemName = this.container.querySelectorAll('[data-item-name]');
    this.counterContext = this.container.querySelector('.js-drop-down__items');
    this.counterNumber = this.container.querySelectorAll('.js-drop-down__counter');
    this.counterName = this.container.querySelectorAll('.drop-down__dropItem');
    this.appointment = this.container.getAttribute('data-attribute-appointment');
    this.btnPlus = this.container.querySelectorAll('.drop-down__circle-plus');
    this.btnMinus = this.container.querySelectorAll('.drop-down__circle-minus');
    this.controlPanel = this.container.querySelector('.drop-down__control-panel');
    this.hasControlPanel = this.controlPanel !== null && this.controlPanel !== undefined;

    if (this.hasControlPanel) {
      this.btnApply = this.container.querySelector('.js-drop-down_apply');
      this.btnClear = this.container.querySelector('.js-drop-down_clear');
    }

    if (this.appointment === 'guests') {
      this._arrayKeyPhrases();
    }
    
    this._checkOptions();
    this._openDropDown();
    this._openDropDownKeyDown();
    this._dropDownCounter();
  }

  _openDropDownKeyDown() {
    this.container.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        if (this.counterPanel.classList.contains('js-drop_close')) {
          this.counterPanel.classList.toggle('js-drop_close');
          this.counterPanel.classList.add('js-drop_open');
          this.open.classList.toggle('drop-down__name_active');
        } else {
          this.counterPanel.classList.toggle('js-drop_open');
          this.counterPanel.classList.add('js-drop_close');
          this.open.classList.toggle('drop-down__name_active');
        }
      }
    });
  }

  _openDropDown() {
    this.open.addEventListener('click', () => {
      if (this.counterPanel.classList.contains('js-drop_close')) {
        this.counterPanel.classList.toggle('js-drop_close');
        this.counterPanel.classList.add('js-drop_open');
        this.open.classList.toggle('drop-down__name_active');
      } else {
        this.counterPanel.classList.toggle('js-drop_open');
        this.counterPanel.classList.add('js-drop_close');
        this.open.classList.toggle('drop-down__name_active');
      }
    });

    if (this.hasControlPanel) {
      this._btnApply();
    }

    this._closeDropDownGlobal();
  }

  _arrayKeyPhrases() {
    const arrayPhrases = this.keyWords.replace(/"/g, '').replace('[', '').replace(']', '').split(',');
    const arrayCorrectPhrases = [arrayPhrases[0], arrayPhrases[1], arrayPhrases[2]];

    this.keyWordsArray = arrayCorrectPhrases;
  }

  _closeDropDownGlobal() {
    this.body.addEventListener('click', (event) => {
      if (!this.container.contains(event.target)) {
        this.counterPanel.classList.remove('js-drop_open');
        this.counterPanel.classList.add('js-drop_close');
        if (this.open.classList.contains('drop-down__name_active')) {
          this.open.classList.remove('drop-down__name_active');
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
    const { target } = event;

    if (target.classList.contains('js-drop-down__plus')) {
      this._buttonPlus(target);
    } else if (target.classList.contains('js-drop-down__minus')) {
      this._buttonMinus(target);
    }

    this._checkBtnMinus();
  }

  _buttonPlus(element) {
    const elementSelector = element;
    let counterNumb = Number(elementSelector.previousElementSibling.value);
    counterNumb += 1;

    elementSelector.previousElementSibling.value = counterNumb;
    this._insetCountArray();
  }

  _buttonMinus(element) {
    const elementSelector = element;
    let counterNumb = Number(elementSelector.nextSibling.value);
    counterNumb -= 1;

    if (counterNumb < 0) {
      counterNumb = 0;
    }

    elementSelector.nextSibling.value = counterNumb;
    this._insetCountArray();
  }

  _checkBtnMinus() {
    this.counterNumber.forEach((element) => {
      const elementSelector = element;
      if (Number(elementSelector.value) > 0) {
        elementSelector.previousElementSibling.disabled = false;
        elementSelector.previousElementSibling.classList.add('drop-down__circle-minus');
      } else {
        elementSelector.previousElementSibling.disabled = true;
        elementSelector.previousElementSibling.classList.remove('drop-down__circle-minus');
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
      this.btnClear.classList.remove('js-not-clear');
      this.btnClear.addEventListener('click', this._clearAllCounter.bind(this));
    } else {
      this.btnClear.classList.add('js-not-clear');
      this.btnClear.removeEventListener('click', this._clearAllCounter.bind(this));
    }
  }

  _clearAllCounter() {
    this.counterNumber.forEach((element) => {
      const elementSelector = element;
      elementSelector.value = 0;
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
      this.counterPanel.classList.remove('js-drop_open');
      this.counterPanel.classList.add('js-drop_close');
    });
  }

  _counterGuests(countArray) {
    const adults = Number(countArray.slice(0, 1).join());
    const youngs = Number(countArray.slice(1, 2).join());
    const child = Number(countArray.slice(2, 3).join());
    const guests = adults + youngs + child;

    let strGuests = '';
    
    if (guests > 0) {
      strGuests = `${guests} ${this._checkEnding(guests, this.keyWordsArray)}`;
    }

    this.inputName.value = `${strGuests}`;
  }

  _checkEnding(checkEnding, textForms) {
    const checkEndingValue = Math.abs(checkEnding) % 100;
    const resEndingNumber = checkEndingValue % 10;
    if (checkEndingValue > 10 && checkEndingValue < 20) { return textForms[2]; }
    if (resEndingNumber > 1 && resEndingNumber < 5) { return textForms[1]; }
    if (resEndingNumber === 1) { return textForms[0]; }
    return textForms[2];
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
