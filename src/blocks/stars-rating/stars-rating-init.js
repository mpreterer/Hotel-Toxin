import StarsRating from './stars-rating'

document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.js-room-info');

    stars.forEach(domParent => {
        const star = new StarsRating(domParent);
    })
});
