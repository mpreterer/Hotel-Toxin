import './cards.scss';
import '../ui-kit.scss';
import '../../style.scss';
import '../blocks/ui-header.scss';
import '../../website-pages/search-room/search-room.scss';
import '../../website-pages/room-details/room-details.scss';
import '../../website-pages/registration/registration.scss';
import '../../website-pages/login/login.scss';
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';

import Filter from '../../../blocks/filter/Filter';
import '../../../blocks/room-order';
import Calendar from '../../../blocks/calendar/Calendar';
import RoomInfo from '../../../blocks/room-info/RoomInfo';

class Cards {
  constructor() {
    this._init();
  }

  _init() {
    const {
      filter,
      calendar,
      roomInfo,
    } = this._getElements();

    filter.forEach((item) => new Filter(item));
    calendar.forEach((item) => new Calendar({
      body: item,
      isOpen: true,
    }));
    roomInfo.forEach((item) => new RoomInfo(item));
  }

  _getElements() {
    return {
      filter: document.querySelectorAll('[data-component-js="js-cards-filter"]'),
      calendar: document.querySelectorAll('[data-component-js="js-calendar-open"]'),
      roomInfo: document.querySelectorAll('[data-component-js="js-card-room"]'),
    };
  }
}

new Cards();
