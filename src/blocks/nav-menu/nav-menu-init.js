import NavMenu from './nav-menu.js';

document.addEventListener('DOMContentLoaded', () => {
    const navs = document.querySelectorAll('.js-nav-menu');

    navs.forEach(domParent => {
        const nav = new NavMenu(domParent);
    })
});