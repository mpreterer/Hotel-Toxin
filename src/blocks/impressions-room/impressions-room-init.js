import ImpressionsRoom from './ImpressionsRoom';

document.addEventListener('DOMContentLoaded', () => {
  const doughnuts = document.querySelectorAll('.js-impressions-room');

  doughnuts.forEach((domParent) => {
    const doughnut = new ImpressionsRoom(domParent);
  });
});
