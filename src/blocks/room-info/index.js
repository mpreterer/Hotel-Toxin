import RoomInfo from './RoomInfo';

const roomsNodes = document.querySelectorAll('.js-room-info');
roomsNodes.forEach((element) => new RoomInfo(element));
