import AloneCalendar from './AloneCalendar';
import './alone-calendar.scss';

const aloneCalendarNodes = document.querySelectorAll('.js-alone-calendar');
aloneCalendarNodes.forEach((element) => new AloneCalendar(element));
