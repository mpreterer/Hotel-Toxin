import Calendar from '../calendar/calendar.js'

class rangeDateCalendar {
    constructor(domParent) {
        this.$container = domParent;
        this.body = document.querySelector('body');
        this.$inputArrival = this.$container.querySelector('[data-mov="arrival"]');
        this.$inputDeparture = this.$container.querySelector('[data-mov="departure"]');
        this.$containerCalendar = this.$container.querySelector('.js-range-date-calendar__calendar');

        this._init();
        this._event_open();
    }

    _init() {
        const { calendar } = this;

        this.calendar = new Calendar({
            body: this.$containerCalendar,
            options: {
                onSelect: function onSelect(fd, date) {
                    console.log(1)
                },
            }
        });
    }

    _event_open() {
    }

    _open_calendar() {
    }

    _event_close_calendar_global() {
    }

    _event_set_date() {
    }
}

export default rangeDateCalendar;