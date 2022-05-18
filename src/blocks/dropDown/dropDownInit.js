import dropDown from './dropDown.js';

document.addEventListener('DOMContentLoaded', () => {
    const dropDowns = document.querySelectorAll('.js-dropdown');
    
    dropDowns.forEach(element => {
        const dropdown = new dropDown(element);
    });
});