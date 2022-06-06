import RegistrationCard from './registration-card';

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.js-registration-card');

    cards.forEach(domParent => {
        const card = new RegistrationCard(domParent);
    })
});
