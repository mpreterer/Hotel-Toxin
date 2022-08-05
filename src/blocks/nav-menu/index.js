import NavMenu from './NavMenu';

const aloneCalendarNodes = document.querySelectorAll('.js-nav-menu');
aloneCalendarNodes.forEach((element) => new NavMenu(element));
