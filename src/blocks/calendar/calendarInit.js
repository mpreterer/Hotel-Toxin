import Calendar from './calendar.js';

document.addEventListener('DOMContentLoaded', () => {
    const calendars = document.querySelectorAll('.js-calendar-container');

    calendars.forEach(domParent => {
        const calendar = new Calendar(domParent);
    })
});