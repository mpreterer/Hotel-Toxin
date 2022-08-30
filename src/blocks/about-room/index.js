import AboutRoom from './AboutRoom';

const aboutRooms = document.querySelectorAll('.js-about-room');
aboutRooms.forEach((element) => new AboutRoom(element));
