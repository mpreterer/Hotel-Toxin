import Filter from './Filter';
import './filter.scss';

const aloneCalendarNodes = document.querySelectorAll('.js-filter');
aloneCalendarNodes.forEach((element) => new Filter(element));
