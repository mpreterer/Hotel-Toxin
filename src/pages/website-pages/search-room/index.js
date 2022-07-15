import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';
import './search-room.scss';
import '../../style.scss';
import '../../../../libs/simplePagination.css';

import '../../../blocks/nav-menu';
import '../../../blocks/header';
import '../../../blocks/footer';
import '../../../blocks/alone-calendar';
import '../../../blocks/pagination';
import '../../../blocks/dropDown';
import '../../../blocks/slider-range';
import '../../../blocks/checkbox-list';
import '../../../blocks/custom-checkbox';
import '../../../blocks/checkbox-double-name';
import '../../../blocks/room-info';

import SearchRoom from './SearchRoom';

const searchRoomNode = document.querySelector('.js-search-room');
new SearchRoom(searchRoomNode);
