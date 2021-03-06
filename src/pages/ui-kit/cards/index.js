import './cards.scss';
import '../ui-kit.scss';
import '../blocks/ui-header.scss';
import '../../../assets/styles/reset.scss';

import '../../website-pages/login';
import '../../website-pages/registration';
import '../../../blocks/room-order';
import '../../../blocks/room-info';
import '../../../blocks/calendar';
import '../../../blocks/filter';

import Cards from './Cards';

const cardsNodes = document.querySelector('.js-cards');
new Cards(cardsNodes);
