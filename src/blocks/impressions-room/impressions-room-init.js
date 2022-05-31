import Doughnut from './impressions-room.js';

document.addEventListener('DOMContentLoaded', () => {
    const doughnuts = document.querySelectorAll('.js-impressions-room');

    doughnuts.forEach(domParent => {
        const doughnut = new Doughnut(domParent);
    })
});
