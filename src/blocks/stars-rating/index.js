import StarsRating from './StarsRating';

const starsNodes = document.querySelectorAll('.js-stars-rating');
starsNodes.forEach((element) => new StarsRating(element));
