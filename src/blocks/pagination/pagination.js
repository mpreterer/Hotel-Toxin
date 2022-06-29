import '../../js/jquery.simplePagination';

class Pagination {
  constructor(domParent, options) {
    this.$body = $(domParent).find('.js-pagination');
    this.$container = this.$body.find('.js-pagination__pagination-init');
    this.$maxValue = this.$body.find('.pagination-max');
    this.$minValue = this.$body.find('.pagination-min');
    this.$allOption = this.$body.find('.pagination-all-option');
    this.options = options;

    this._init();
  }

  _init() {
    const { items, itemsOnPage, displayedPages } = this.options;
    
    this.$container.pagination({
      items: items,
      itemsOnPage: itemsOnPage,
      displayedPages: displayedPages,
      edges: 1,
      prevText: '',
      nextText: ' ',
      onPageClick: this._countPagination.bind(this),
    });
}

_countPagination(page) {
    const { itemsOnPage } = this.options;
    const max = page * itemsOnPage;
    const min = max - (itemsOnPage - 1);

    this.$minValue.html(min);
    this.$maxValue.html(max);
  }
}

export default Pagination;
