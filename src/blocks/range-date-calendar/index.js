import RangeDateCalendar from './RangeDateCalendar';

const rangeDateNodes = document.querySelectorAll('.js-range-date-calendar');
rangeDateNodes.forEach((element) => new RangeDateCalendar(element));
