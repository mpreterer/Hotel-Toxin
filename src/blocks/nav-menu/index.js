import NavMenu from './NavMenu';
import './nav-menu.scss';

const aloneCalendarNodes = document.querySelectorAll('.js-nav-menu');
aloneCalendarNodes.forEach((element) => new NavMenu(element));
