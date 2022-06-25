import Calendar from '../calendar/calendar.js'

class AloneCalendar {
    constructor(domParent) {
        this.$container = domParent.querySelector('.js-alone-calendar');
        this.$placeholder = this.$container.querySelector('.js-alone-calendar__placeholder');
        this.$calendarBody = this.$container.querySelector('.js-alone-calendar__calendar');
        this.$calendar = this.$container.querySelector('.js-calendar-container');
        this.$inputCalendar = this.$container.querySelector('.js-alone-calendar__calendar-container');
        this.hasOpenCalendar = this.$container.getAttribute('data-is-open');
        this.dateFormat = this.$container.getAttribute('data-format');
        
        this.observers = [];

        this._init();
        this._bind_event();
    }

    _init() {
        const isOpen = this.hasOpenCalendar === 'true';

        this.calendar = new Calendar({
            body: this.$calendarBody,
            isOpen,
            options: {
                onSelect: (formattedDate) => this._set_date(formattedDate),
                dateFormat: this.dateFormat,
            }
        });
    }

    _bind_event() {
        document.addEventListener('click', this._handle_global_click.bind(this), true);
        this.$inputCalendar.addEventListener('click', this._handle_input_click.bind(this));
        this.$calendar.querySelector('[data-button-type="clear"]').addEventListener('click', this._check_date.bind(this));
    }

    _handle_global_click(event) {
        const { target } = event;
        const isClickOnDropdown = this.$calendar.contains(target);
        const isOpenCalendar = this.calendar.isOpen;
        const hasClickOutSideCalendar = !isClickOnDropdown && isOpenCalendar;
        
        if (hasClickOutSideCalendar) {
          this.calendar.hiden_calendar();
        }
    }

    _handle_input_click() {
        this.calendar.check_is_open();
    }

    _set_date(date) {
        this.$placeholder.innerHTML = date;
        this._notify_observers();
    }

    _notify_observers(data) {
        this.observers.forEach((observer) => observer(data));
    }
    
    _check_date() {
        this.$placeholder.innerHTML = 'Выберите дату';
    }
}

export default AloneCalendar;