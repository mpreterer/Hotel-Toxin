import dropDown from './slider-range.js';

document.addEventListener('DOMContentLoaded', () => {
    const sliders = document.querySelectorAll('.js-slider-range');

    sliders.forEach(domParent => {
        const slider = new dropDown(domParent);
    })
});
