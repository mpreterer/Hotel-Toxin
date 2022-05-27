import CheckboxList from './checkbox-list.js';

document.addEventListener('DOMContentLoaded', () => {
    const checkboxs = document.querySelectorAll('.js-checkbox-list');

    checkboxs.forEach(domParent => {
        const checkbox = new CheckboxList(domParent);
    })
});