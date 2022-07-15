import ButtonLike from './ButtonLike';
import './button-like.scss';

const buttonLikeNodes = document.querySelectorAll('.js-button-like');
buttonLikeNodes.forEach((element) => new ButtonLike(element));
