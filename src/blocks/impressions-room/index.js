import ImpressionsRoom from './ImpressionsRoom';
import './impressions-room.scss';

const impressionsNodes = document.querySelectorAll('.js-impressions-room');
impressionsNodes.forEach((element) => new ImpressionsRoom(element));
