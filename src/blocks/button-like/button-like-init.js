import ButtonLike from './button-like.js';

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.js-button-like');

    buttons.forEach(domParent => {
        const button = new ButtonLike(domParent);
    })
});