import Calendar from '../calendar/Calendar';

class AloneCalendar {
  constructor(domParent) {
    this.$container = domParent;
    this.body = document.querySelector('body');
    this.$placeholder = this.$container.querySelector('.js-alone-calendar__placeholder');
    this.$calendarBody = this.$container.querySelector('.js-alone-calendar__calendar');
    this.$calendar = this.$container.querySelector('.js-calendar-container');
    this.$inputCalendar = this.$container.querySelector('.js-alone-calendar__calendar-container');
    this.hasOpenCalendar = this.$container.getAttribute('data-is-open');
    this.dateFormat = this.$container.getAttribute('data-format');
    
    this.observers = [];

    this._init();
    this._bindEvent();
  }

  _init() {
    const isOpen = this.hasOpenCalendar === 'true';

    this.calendar = new Calendar({
      body: this.$calendarBody,
      isOpen,
      options: {
        onSelect: (formattedDate) => this._setDate(formattedDate),
        dateFormat: this.dateFormat,
      },
    });

    this._closeCalendarEsc();
  }

  _closeCalendarEsc() {
    this.body.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        this.calendar.hiddenClear();

        if (this.$calendar.classList.contains('js-calendar-container_open')) {
          this.$calendar.classList.remove('js-calendar-container_open');
        }
      }
    });
  }

  _bindEvent() {
    document.addEventListener('click', this._handleGlobalClick.bind(this), true);
    this.$inputCalendar.addEventListener('click', this._handleInputClick.bind(this));
    this.$calendar.querySelector('[data-button-type="clear"]').addEventListener('click', this._checkDate.bind(this));
  }

  _handleGlobalClick(event) {
    const { target } = event;
    const isClickOnInput = this.$container.contains(target);
    const isOpenCalendar = this.calendar.isOpen;
    const isClickOutsideCalendar = !isClickOnInput && isOpenCalendar;

    if (isClickOutsideCalendar) {
      this.calendar.hiddenClear();
    }
  }

  _handleInputClick() {
    this.calendar.checkIsOpen();
  }

  _setDate(date) {
    this.$placeholder.innerHTML = date;
    this._notifyObservers();
    this.calendar.checkClearBtn(date);
  }

  _notifyObservers(data) {
    this.observers.forEach((observer) => observer(data));
  }

  _checkDate() {
    this.$placeholder.innerHTML = 'Выберите дату';
  }
}

export default AloneCalendar;
