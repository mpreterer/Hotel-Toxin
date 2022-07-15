import RangeDateCalendar from './RangeDateCalendar';
import './range-date-calendar.scss';

const rangeDateNodes = document.querySelectorAll('.js-range-date-calendar');
rangeDateNodes.forEach((element) => new RangeDateCalendar(element));
