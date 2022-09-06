import dropDownClassNames from './utils/dropDownClassNames';

class DropDown {
  constructor(domParent) {
    this.container = domParent;
    this._init();
  }

  _init() {
    this.body = document.body;
    this.keyWords = this.container.getAttribute('data-key-phrases');
    this.inputName = this.container.querySelector(
      '.js-counts-guests',
    );
    this.open = this.container.querySelector('.js-title');
    this.counterPanel = this.container.querySelector(
      '.js-drop-block',
    );
    this.itemName = this.container.querySelectorAll('[data-item-name]');
    this.counterContext = this.container.querySelector('.js-items');
    this.counterNumber = this.container.querySelectorAll(
      '.js-counter',
    );
    this.appointment = this.container.getAttribute(
      'data-attribute-appointment',
    );
    this.controlPanel = this.container.querySelector(
      '.js-control-panel',
    );
    this.hasControlPanel =
      this.controlPanel !== null && this.controlPanel !== undefined;

    if (this.hasControlPanel) {
      this.btnApply = this.container.querySelector(
        '.js-button-apply',
      );
      this.btnClear = this.container.querySelector(
        '.js-button-clear',
      );
    }

    if (this.appointment === 'guests') {
      this._arrayKeyPhrases();
    }

    this._checkOptions();
    this._bindEvents();
    this._dropDownCounter();
  }

  _bindEvents() {
    this.open.addEventListener('click', this._handleTitleClick.bind(this));
    this.container.addEventListener(
      'keydown',
      this._handleDropDownKeyDown.bind(this),
    );
    this.body.addEventListener('click', this._handleBodyClick.bind(this));

    if (this.hasControlPanel) {
      this.btnApply.addEventListener('click', this._handleButtonApplyClick.bind(this));
    }
  }

  _handleDropDownKeyDown(event) {
    if (event.key === 'Enter') {
      this._checkOpenDropDown();
    }
  }

  _handleTitleClick() {
    this._checkOpenDropDown();
  }

  _checkOpenDropDown() {
    if (this.counterPanel.classList.contains(dropDownClassNames.BLOCK_CLOSE)) {
      this.counterPanel.classList.remove(dropDownClassNames.BLOCK_CLOSE);
      this.counterPanel.classList.add(dropDownClassNames.BLOCK_OPEN);
      this.open.classList.toggle(dropDownClassNames.NAME_ACTIVE);
    } else {
      this.counterPanel.classList.remove(dropDownClassNames.BLOCK_OPEN);
      this.counterPanel.classList.add(dropDownClassNames.BLOCK_CLOSE);
      this.open.classList.toggle(dropDownClassNames.NAME_ACTIVE);
    }
  }

  _arrayKeyPhrases() {
    const arrayPhrases = this.keyWords
      .replace(/"/g, '')
      .replace('[', '')
      .replace(']', '')
      .split(',');
    const arrayCorrectPhrases = [
      arrayPhrases[0],
      arrayPhrases[1],
      arrayPhrases[2],
    ];

    this.keyWordsArray = arrayCorrectPhrases;
  }

  _handleBodyClick(event) {
    if (!this.container.contains(event.target)) {
      this.counterPanel.classList.remove(dropDownClassNames.BLOCK_OPEN);
      this.counterPanel.classList.add(dropDownClassNames.BLOCK_CLOSE);
      this.open.classList.remove(dropDownClassNames.NAME_ACTIVE);
    }
  }

  _dropDownCounter() {
    this.counterContext.addEventListener(
      'click',
      this._handleItemClick.bind(this),
    );
  }

  _checkOptions() {
    this._checkBtnMinus();
    this._checkInputName();

    if (this.hasControlPanel) {
      this._checkBtnClear();
    }
  }

  _checkInputName() {
    const tempArray = [];

    this.counterNumber.forEach((element) => {
      tempArray.push(element.value);
    });

    if (this.appointment === 'guests') {
      this._counterGuests(tempArray);
    } else if (this.appointment === 'furniture') {
      this._counterFurniture(tempArray);
    }
  }

  _handleItemClick(event) {
    const { target } = event;

    if (target.classList.contains('js-button-plus')) {
      this._buttonPlus(target);
    } else if (target.classList.contains('js-button-minus')) {
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
      } else {
        elementSelector.previousElementSibling.disabled = true;
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
      this.btnClear.classList.remove(dropDownClassNames.BTN_TRANSPARENT);
      this.btnClear.addEventListener('click', this._handleButtonClearClick.bind(this));
    } else {
      this.btnClear.classList.add(dropDownClassNames.BTN_TRANSPARENT);
      this.btnClear.removeEventListener(
        'click',
        this._handleButtonClearClick.bind(this),
      );
    }
  }

  _handleButtonClearClick() {
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

  _handleButtonApplyClick() {
    this.counterPanel.classList.remove(dropDownClassNames.BLOCK_OPEN);
    this.counterPanel.classList.add(dropDownClassNames.BLOCK_CLOSE);
    this.open.classList.toggle(dropDownClassNames.NAME_ACTIVE);
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

    const isEndValueCorrectSize = checkEndingValue > 10 && checkEndingValue < 20;
    const isResCorrectSize = resEndingNumber > 1 && resEndingNumber < 5;

    if (isEndValueCorrectSize) {
      return textForms[2];
    }
    if (isResCorrectSize) {
      return textForms[1];
    }
    if (resEndingNumber === 1) {
      return textForms[0];
    }
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

    const isAllSelected = strBedRooms !== '' && strBed !== '' && strBathRoom !== '';
    
    const isBedRoomsNotEmpty = strBedRooms !== '';
    const isBedRoomsEmpty = strBedRooms === '';
    const isBedNotEmpty = strBed !== '';
    const isBedEmpty = strBed === '';
    const isBathRoomNotEmpty = strBathRoom !== '';
    const isBathRoomEmpty = strBathRoom === '';

    if (isAllSelected) {
      strBathRoom = '';
      this.inputName.value = `${strBedRooms}, ${strBed}...`;
    } else if (isBedRoomsNotEmpty && isBedNotEmpty && isBathRoomEmpty) {
      this.inputName.value = `${strBedRooms}, ${strBed}`;
    } else if (isBedRoomsNotEmpty && isBedEmpty && isBathRoomNotEmpty) {
      this.inputName.value = `${strBedRooms}, ${strBathRoom}`;
    } else if (isBedRoomsEmpty && isBedNotEmpty && isBathRoomNotEmpty) {
      this.inputName.value = `${strBed}, ${strBathRoom}`;
    } else {
      this.inputName.value = `${strBed}${strBathRoom}${strBedRooms}`;
    }
  }
}

export default DropDown;
