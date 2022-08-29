import typeCheckbox from './utils/checkboxClassNames';

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

    this._eventOpen();
  }

  _eventOpen() {
    if (this.isOpen) {
      this.$menu.classList.remove(typeCheckbox.HIDDEN);
    } else {
      this.$menu.classList.add(typeCheckbox.HIDDEN);
    }

    this.$input.addEventListener('click', this._openList.bind(this));
    document.addEventListener('click', this._globalOpen.bind(this), true);

    this.$container.addEventListener(
      'keydown',
      this._openEventKeyDown.bind(this),
    );
  }

  _openEventKeyDown(event) {
    if (event.key === 'Enter') {
      this._openList();
    }
  }

  _globalOpen(event) {
    const { target } = event;
    const isClickOnList = this.$container.contains(target);
    const hasClickOutSideList = !isClickOnList;

    if (hasClickOutSideList) {
      this._hideList();
    }
  }

  _openList() {
    if (this.$menu.classList.contains(typeCheckbox.HIDDEN)) {
      this.$menu.classList.remove(typeCheckbox.HIDDEN);
      this._rotateArrow(true);
    } else {
      this.$menu.classList.toggle(typeCheckbox.HIDDEN);
      this._rotateArrow(false);
    }
  }

  _hideList() {
    this.$menu.classList.add(typeCheckbox.HIDDEN);
    this.$arrow.classList.remove(typeCheckbox.ARROW_ACTIVE);
  }

  _rotateArrow(sideTop) {
    if (sideTop) {
      this.$arrow.classList.add(typeCheckbox.ARROW_ACTIVE);
    } else {
      this.$arrow.classList.toggle(typeCheckbox.ARROW_ACTIVE);
    }
  }
}

export default CheckboxList;
