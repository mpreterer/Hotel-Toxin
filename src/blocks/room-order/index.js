import RoomOrder from './RoomOrder';
import './room-order.scss';

const roomOrderNodes = document.querySelectorAll('.js-room-order');
roomOrderNodes.forEach((element) => new RoomOrder(element));
