import DemoCalendar from './DemoCalendar';

const demoCalendars = document.querySelectorAll('.js-demo-calendar');
demoCalendars.forEach((element) => new DemoCalendar(element));
