import Pagination from '../../../blocks/pagination/Pagination';
import DropDown from '../../../blocks/dropDown/DropDown';

class Elements {
  constructor() {
    this._init();
  }

  _init() {
    const {
      dropDown,
      dropDownNoPanel,
      pagination,
    } = this._getElements();

    dropDown.forEach((item) => new DropDown(item, ['гость', 'гостя', 'гостей']));
    dropDownNoPanel.forEach((item) => new DropDown(item));
    pagination.forEach((domParent) => new Pagination(domParent, {
      items: 180,
      itemsOnPage: 12,
      displayedPages: 3,
    }));
  }

  _getElements() {
    return {
      dropDown: document.querySelectorAll('[data-component-js="js-dropDown"]'),
      dropDownNoPanel: document.querySelectorAll('[data-component-js="js-dropDown-without-panel"]'),
      pagination: document.querySelectorAll('[data-component-js="js-pagination"]'),
    };
  }
}

export default Elements;
