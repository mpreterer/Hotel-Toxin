import PaginationJs from '../../libs/pagination-js/PaginationJs';

class Pagination {
  constructor(domParent) {
    this.body = domParent;
    this.container = this.body.querySelector('.js-init-pagination');
    this.maxValue = this.body.querySelector('.js-max-value');
    this.minValue = this.body.querySelector('.js-min-value');
    this.allOption = this.body.querySelector('.js-all-option');
    this.items = this.body.getAttribute('data-items');
    this.itemsOnPage = this.body.getAttribute('data-items-on-page');
    this.pageRange = this.body.getAttribute('data-page-range');
    this.countPages = this.body.getAttribute('data-count-pages');

    this._init();
  }

  _init() {
    this.pagination = new PaginationJs({
      body: this.container,
      countPages: this._countingPages(Number(this.countPages)),
      itemsOnPage: Number(this.itemsOnPage),
      pageRange: Number(this.pageRange),
      maxViewPage: Number(this.maxValue.textContent),
      selectorMaxValue: this.maxValue,
      selectorMinValue: this.minValue,
      hidePrevious: true,
    });
  }

  _countingPages(size) {
    const filledArray = Array(size)
      .fill()
      .map((e, count) => count + 1);
    return filledArray;
  }
}

export default Pagination;
