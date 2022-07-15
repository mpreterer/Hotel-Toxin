import Calendar from '../calendar/calendar';

class AloneCalendar {
  constructor(domParent) {
    this.$container = domParent;
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
  }

  _bindEvent() {
    document.addEventListener('click', this._handleGlobalClick.bind(this), true);
    this.$inputCalendar.addEventListener('click', this._handleInputClick.bind(this));
    this.$calendar.querySelector('[data-button-type="clear"]').addEventListener('click', this._checkDate.bind(this));
  }

  _handleGlobalClick(event) {
    const { target } = event;
    const isClickOnDropdown = this.$calendar.contains(target);
    const isOpenCalendar = this.calendar.isOpen;
    const hasClickOutSideCalendar = !isClickOnDropdown && isOpenCalendar;
    
    if (hasClickOutSideCalendar) {
      this.calendar.hiden_calendar();
    }
  }

  _handleInputClick() {
    this.calendar.check_is_open();
  }

  _setDate(date) {
    this.$placeholder.innerHTML = date;
    this._notifyObservers();
  }

  _notifyObservers(data) {
    this.observers.forEach((observer) => observer(data));
  }

  _checkDate() {
    this.$placeholder.innerHTML = 'Выберите дату';
  }
}

export default AloneCalendar;
