import SliderRange from './SliderRange';

const aloneCalendarNodes = document.querySelectorAll('.js-slider-range');
aloneCalendarNodes.forEach((element) => new SliderRange(element));
