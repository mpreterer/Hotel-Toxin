import NavBurger from './NavBurger';

const navBurgers = document.querySelectorAll('.js-nav-burger');
navBurgers.forEach((element) => new NavBurger(element));
