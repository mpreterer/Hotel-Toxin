import checkboxClassNames from './utils/checkboxClassNames';

class CheckboxList {
  constructor(domParent) {
    this.$container = domParent;

    this._init();
  }

  _init() {
    this.$input = this.$container.querySelector('.js-title-list');
    this.$arrow = this.$container.querySelector('.js-arrow');
    this.$menu = this.$container.querySelector('.js-menu');
    this.isOpen = this.$container.classList.contains('js-list-open');
    this.body = document.body;

    this._eventOpen();
  }

  _eventOpen() {
    if (this.isOpen) {
      this.$menu.classList.remove(checkboxClassNames.HIDDEN);
    } else {
      this.$menu.classList.add(checkboxClassNames.HIDDEN);
    }

    this.$input.addEventListener('click', this._handleTitleListClick.bind(this));
    this.body.addEventListener('click', this._handleBodyClick.bind(this), true);

    this.$container.addEventListener(
      'keydown',
      this._handleCheckboxListKeyDown.bind(this),
    );
  }

  _handleCheckboxListKeyDown(event) {
    if (event.key === 'Enter') {
      this._handleTitleListClick();
    }
  }

  _handleBodyClick(event) {
    const { target } = event;
    const isClickOnList = this.$container.contains(target);
    const hasClickOutSideList = !isClickOnList;

    if (hasClickOutSideList) {
      this._hideList();
    }
  }

  _handleTitleListClick() {
    if (this.$menu.classList.contains(checkboxClassNames.HIDDEN)) {
      this.$menu.classList.remove(checkboxClassNames.HIDDEN);
      this._rotateArrow(true);
    } else {
      this.$menu.classList.toggle(checkboxClassNames.HIDDEN);
      this._rotateArrow(false);
    }
  }

  _hideList() {
    this.$menu.classList.add(checkboxClassNames.HIDDEN);
    this.$arrow.classList.remove(checkboxClassNames.ARROW_ACTIVE);
  }

  _rotateArrow(sideTop) {
    if (sideTop) {
      this.$arrow.classList.add(checkboxClassNames.ARROW_ACTIVE);
    } else {
      this.$arrow.classList.toggle(checkboxClassNames.ARROW_ACTIVE);
    }
  }
}

export default CheckboxList;
