import StarsRating from './StarsRating';
import './stars-rating.scss';

const starsNodes = document.querySelectorAll('.js-stars-rating');
starsNodes.forEach((element) => new StarsRating(element));
