import RoomOrder from './RoomOrder';

const roomOrderNodes = document.querySelectorAll('.js-room-order');
roomOrderNodes.forEach((element) => new RoomOrder(element));
