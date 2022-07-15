import ButtonLike from './ButtonLike';

const buttonLikeNodes = document.querySelectorAll('.js-button-like');
buttonLikeNodes.forEach((element) => new ButtonLike(element));
