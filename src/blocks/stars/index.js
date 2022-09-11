import StarsRating from './Stars';

const starsNodes = document.querySelectorAll('.js-stars');
starsNodes.forEach((element) => new StarsRating(element));
