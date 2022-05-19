import dropDown from './dropDown.js';

document.addEventListener('DOMContentLoaded', () => {
    const dropDowns = document.querySelectorAll('.js-dropDown');

    dropDowns.forEach(domParent => {
        const dropdown = new dropDown(domParent);
    })
});
