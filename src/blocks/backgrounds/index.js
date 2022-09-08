import Backgrounds from './Backgrounds';

const backgroundsSelector = document.querySelectorAll('.js-backgrounds');
backgroundsSelector.forEach((element) => new Backgrounds(element));
