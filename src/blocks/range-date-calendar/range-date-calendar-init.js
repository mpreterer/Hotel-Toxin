import rangeDateCalendar from './range-date-calendar';

document.addEventListener('DOMContentLoaded', () => {
    const calendars = document.querySelectorAll('.js-range-date-calendar');

    calendars.forEach(domParent => {
        const calendar = new rangeDateCalendar(domParent);
    })
});