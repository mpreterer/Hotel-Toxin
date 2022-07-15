import './room-details.scss';
import '../../style.scss';
import '../../../assets/styles/Chart.min.css';

import ImpressionsRoom from '../../../blocks/impressions-room/ImpressionsRoom';
import RoomOrder from '../../../blocks/room-order/room-order';
import ButtonLike from '../../../blocks/button-like/ButtonLike';
import NavMenu from '../../../blocks/nav-menu/NavMenu';

class RoomDetails {
  constructor() {
    this._init();
  }

  _init() {
    const {
      buttonLike,
      roomOrder,
      impressions,
    } = this._getElements();
    
    new NavMenu(document);
    buttonLike.forEach((item) => new ButtonLike(item));
    roomOrder.forEach((item) => new RoomOrder(item));
    impressions.forEach((item) => new ImpressionsRoom(item));
  }

  _getElements() {
    return {
      buttonLike: document.querySelectorAll('.js-button-like'),
      roomOrder: document.querySelectorAll('[data-comment-js="js-room-order"]'),
      impressions: document.querySelectorAll('[data-component-js="js-impressions"]'),
    };
  }
}

export default RoomDetails;

new RoomDetails();
