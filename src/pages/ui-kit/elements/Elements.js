import Pagination from '../../../blocks/pagination/Pagination';

class Elements {
  constructor() {
    this._init();
  }

  _init() {
    const {
      pagination,
    } = this._getElements();

    pagination.forEach((domParent) => new Pagination(domParent, {
      items: 180,
      itemsOnPage: 12,
      displayedPages: 3,
    }));
  }

  _getElements() {
    return {
      pagination: document.querySelectorAll('[data-component-js="js-pagination"]'),
    };
  }
}

export default Elements;
