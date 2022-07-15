import DropDown from '../../../blocks/dropDown/DropDown';
import Pagination from '../../../blocks/pagination/Pagination';

class SearchRoom {
  constructor() {
    this._init();
  }
  
  _init() {
    const {
      dropDowns,
      dropDownNoPanel,
      pagination,
    } = this._getElements();

    dropDowns.forEach((item) => new DropDown(item, ['гость', 'гостя', 'гостей']));
    dropDownNoPanel.forEach((item) => new DropDown(item));
    pagination.forEach((domParent) => new Pagination(domParent, {
      items: 180,
      itemsOnPage: 12,
      displayedPages: 3,
    }));
  }

  _getElements() {
    return {
      dropDowns: document.querySelectorAll('[data-component-js="js-dropDown"]'),
      pagination: document.querySelectorAll('[data-component-js="js-pagination"]'),
      dropDownNoPanel: document.querySelectorAll('[data-component-js="js-dropDown-without-panel"]'),
    };
  }
}

export default SearchRoom;
