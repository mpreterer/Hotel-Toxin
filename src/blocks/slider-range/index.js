import SliderRange from './SliderRange';
import './slider-range.scss';

const aloneCalendarNodes = document.querySelectorAll('.js-slider-range');
aloneCalendarNodes.forEach((element) => new SliderRange(element));
