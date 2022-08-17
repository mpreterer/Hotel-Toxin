import '../../../libs/jquery.simplePagination';

class Pagination {
  constructor(domParent) {
    this.$body = $(domParent);
    this.$container = this.$body.find('.js-pagination__pagination-init');
    this.$maxValue = this.$body.find('.pagination-max');
    this.$minValue = this.$body.find('.pagination-min');
    this.$allOption = this.$body.find('.pagination-all-option');
    this.items = this.$body.attr('data-items');
    this.itemsOnPage = this.$body.attr('data-items-on-page');
    this.displayedPages = this.$body.attr('data-displayed-pages');

    this._init();
  }

  _init() {
    this.$container.pagination({
      items: this.items,
      itemsOnPage: this.itemsOnPage,
      displayedPages: this.displayedPages,
      edges: 1,
      prevText: '',
      nextText: ' ',
      onPageClick: this._countPagination.bind(this),
    });
  }

  _countPagination(page) {
    const { itemsOnPage } = this;
    const max = page * itemsOnPage;
    const min = max - (itemsOnPage - 1);

    this.$minValue.html(min);
    this.$maxValue.html(max);
  }
}

export default Pagination;
