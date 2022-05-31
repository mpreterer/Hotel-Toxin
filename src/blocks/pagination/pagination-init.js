import Pagination from './pagination.js';

document.addEventListener('DOMContentLoaded', () => {
    const paginations = document.querySelectorAll('.js-pagination');

    paginations.forEach(domParent => {
        const pagination = new Pagination(domParent, {
            items: 180,
            itemsOnPage: 12,
            displayedPages: 3,
        });
    })
});
