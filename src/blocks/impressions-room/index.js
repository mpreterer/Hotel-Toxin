import ImpressionsRoom from './ImpressionsRoom';

const impressionsNodes = document.querySelectorAll('.js-impressions-room');
impressionsNodes.forEach((element) => new ImpressionsRoom(element));
