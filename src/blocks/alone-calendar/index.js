import AloneCalendar from './AloneCalendar';

const aloneCalendarNodes = document.querySelectorAll('.js-alone-calendar');
aloneCalendarNodes.forEach((element) => new AloneCalendar(element));
