import './cards.scss';
import '../ui-kit.scss';
import '../../style.scss';
import '../../website-pages/search-room/searchRoom.scss';
import '../../website-pages/room-details/roomDetails.scss';
import '../../website-pages/registration/Registration.scss';
import '../../website-pages/login/Login.scss';
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';

import Filter from '../../../blocks/filter/filter';
import RoomOrder from '../../../blocks/room-order/room-order';
import Calendar from '../../../blocks/calendar/calendar';
import RoomInfo from '../../../blocks/room-info/room-info';

class Cards {
    constructor() {
        this._init();
    }

    _init() {
        const { 
            filter,
            roomOrder,
            calendar,
            roomInfo
        } = this._get_elements();

        filter.forEach((item) => new Filter(item));
        calendar.forEach((item) => new Calendar({
            body: item,
            isOpen: true,
        }));    
        roomOrder.forEach((item) => new RoomOrder(item));
        roomInfo.forEach((item) => new RoomInfo(item));
    }

    _get_elements() {
        return {
            filter: document.querySelectorAll('[data-component-js="js-cards-filter"]'),
            roomOrder: document.querySelectorAll('[data-component-js="js-cards-range-dates"]'),
            calendar: document.querySelectorAll('[data-component-js="js-calendar-open"]'),
            roomInfo: document.querySelectorAll('[data-component-js="js-card-room"]'),
        };
    }
}

new Cards;
