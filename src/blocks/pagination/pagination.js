import '../../js/jquery.simplePagination.js';

class Pagination {
    constructor(domParent) {
        this.$body = $(domParent).find('.js-pagination__container');
        this.$container = this.$body.find('.js-pagination__pagination-init');
        this.$max = this.$body.find('.pagination-max');
        this.$min = this.$body.find('.pagination-min');

        this._init();
        this._count_pagination();
    }

    _init() {
        this.$container.pagination({
            items: 57,
            itemsOnPage: 4,
            displayedPages: 3,
            edges: 1,
            prevText: '',
            nextText: ' ',
            onPageClick: this._count_pagination.bind(this),
        });
    }

    _count_pagination(page) {
        // this.$container.addEventListener('click', () => {
        //     this.$max.textContent = this.$container.querySelector('ul li.active span').textContent * 12;
        //     let temp = Number(this.$max.textContent);
        //     this.$min.textContent = temp - 11;
        // })
        console.log(page)
    }
}

export default Pagination;