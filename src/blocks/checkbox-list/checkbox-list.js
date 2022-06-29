class CheckboxList {
  constructor(domParent) {
    this.$container = domParent.querySelector('.js-checkbox-list');

    this._init();
  }

  _init() {
    this.$input = this.$container.querySelector('.js-checkbox-list__name');
    this.$arrow = this.$container.querySelector('.arrow-expend-btn');
    this.$menu = this.$container.querySelector('.js-checkbox-list__menu');
    this.isOpen = this.$container.classList.contains('js-checkbox-list-open');

    this._eventOpen();
  }

  _eventOpen() {
    if (this.isOpen) {
      this.$menu.classList.remove('checkbox-list__name_hide');
    } else {
      this.$menu.classList.add('checkbox-list__name_hide');
    }

    this.$input.addEventListener('click', this._openList.bind(this));
    document.addEventListener('click', this._globalOpen.bind(this), true);
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
    if (this.$menu.classList.contains('checkbox-list__name_hide')) {
      this.$menu.classList.remove('checkbox-list__name_hide');
      this._rotateArrow(true);
    } else {
      this.$menu.classList.toggle('checkbox-list__name_hide');
      this._rotateArrow(false);
    }
  }

  _hideList() {
    this.$menu.classList.add('checkbox-list__name_hide');
    this.$arrow.classList.remove('arrow-expend-btn_active');
  }

  _rotateArrow(sideTop) {
    if (sideTop) {
      this.$arrow.classList.add('arrow-expend-btn_active');
    } else {
      this.$arrow.classList.toggle('arrow-expend-btn_active');
    }
  }
}

export default CheckboxList;
