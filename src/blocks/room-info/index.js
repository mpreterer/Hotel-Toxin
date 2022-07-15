import RoomInfo from './RoomInfo';
import './room-info.scss';

const roomsNodes = document.querySelectorAll('.js-room-info');
roomsNodes.forEach((element) => new RoomInfo(element));
