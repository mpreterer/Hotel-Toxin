import 'paginationjs';

class PaginationJs {
  constructor(params) {
    this.$container = $(params.body);
    this.countPages = params.countPages;
    this.itemsOnPage = params.itemsOnPage;
    this.pageRange = params.pageRange;
    this.hidePrevious = params.hidePrevious;
    this.maxViewPage = params.maxViewPage;
    this.minValue = $(params.selectorMinValue);
    this.maxValue = $(params.selectorMaxValue);
    
    this._init();
  }

  _init() {
    this.paginationPlugin = this.$container.pagination({
      dataSource: this.countPages,
      pageSize: this.itemsOnPage,
      pageRange: this.pageRange,
      autoHidePrevious: this.hidePrevious,
      callback: (data) => this._countPages(data),
    });
  }

  _countPages(data) {
    const page = Number(data);

    const max = page * this.maxViewPage;
    const min = max - (this.maxViewPage - 1);

    this.minValue.html(min);
    this.maxValue.html(max);
  }
}

export default PaginationJs;
