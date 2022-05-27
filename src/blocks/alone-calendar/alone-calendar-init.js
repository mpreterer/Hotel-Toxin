import AloneCalendar from './alone-calendar';

document.addEventListener('DOMContentLoaded', () => {
    const calendars = document.querySelectorAll('.js-alone-calendar');

    calendars.forEach(domParent => {
        const calendar = new AloneCalendar(domParent);
    })
});