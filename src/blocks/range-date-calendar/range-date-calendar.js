import Calendar from '../calendar/calendar.js'

class rangeDateCalendar {
    constructor(domParent) {
        this.$container = domParent;
        this.$inputArrival = this.$container.querySelector('[data-mov="arrival"]');
        this.$inputDeparture = this.$container.querySelector('[data-mov="departure"]');
        this.$inputOpen = this.$container.querySelectorAll('.js-range-date-calendar__input');
        this.$containerCalendar = this.$container.querySelector('.js-range-date-calendar__calendar');
        this.$calendar = this.$container.querySelector('.js-calendar-container');
        this.hasOpenCalendar = this.$container.getAttribute('data-is-open');
        this.observers = [];

        this._init();
        this._bindEventListener();
    }

    observeDateChanges(observer) {
        const isCorrectObserver = observer !== undefined && observer !== null;
    
        if (isCorrectObserver) {
          this.observers.push(observer);
        }
    }

    _notify_observers(data) {
        this.observers.forEach((observer) => observer(data));
    }

    _bindEventListener() {
        document.addEventListener('click', this._handle_global_click.bind(this), true);

        this.$inputOpen.forEach(el => {
            el.addEventListener('click', this._handle_input_click.bind(this));
        })

        this.$calendar.querySelector('[data-button-type="clear"]').addEventListener('click', this._check_date.bind(this));
    }

    _check_date() {
        this.$inputArrival.innerHTML = 'ДД.ММ.ГГГГ';
        this.$inputDeparture.innerHTML = 'ДД.ММ.ГГГГ';
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

    _init() {
        const isOpen = this.hasOpenCalendar === 'true';

        this.calendar = new Calendar({
            body: this.$containerCalendar,
            isOpen,
            options: {
                onSelect: (formattedDate) => this._set_date(formattedDate),
            }
        });
    }

    _set_date(date) {
        let dates = date.split(' - ');
        let hasDates = dates !== undefined && dates !== null;
        this.$inputArrival.innerHTML = dates[0];

        if (hasDates) {
            if (dates.length > 1) {
                this.$inputDeparture.innerHTML = dates[1];
            }
        }
        
        this._notify_observers();
    }
}

export default rangeDateCalendar;