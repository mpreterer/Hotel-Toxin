import Calendar from '../calendar/Calendar';

class RangeDateCalendar {
  constructor(domParent) {
    this.$container = domParent;
    this.body = document.querySelector('body');
    this.arrival = this.$container.querySelector('.js-range-date-calendar__masked-arrival');
    this.$inputArrival = this.arrival.querySelector('[data-masked]');
    this.departure = this.$container.querySelector('.js-range-date-calendar__masked-departure');
    this.$inputDeparture = this.departure.querySelector('[data-masked]');
    this.$inputOpen = this.$container.querySelectorAll('.js-range-date-calendar__input');
    this.$containerCalendar = this.$container.querySelector('.js-range-date-calendar__calendar');
    this.$calendar = this.$container.querySelector('.js-calendar-container');
    this.hasOpenCalendar = this.$container.getAttribute('data-is-open');
    this.observers = [];

    this._init();
    this._bindEventListener();
    this._closeCalendarEsc();
  }

  _notifyObservers(data) {
    this.observers.forEach((observer) => observer(data));
  }

  _bindEventListener() {
    document.addEventListener('click', this._handleGlobalClick.bind(this), true);
    
    this.$inputArrival.addEventListener('click', this._handleInputDateClick.bind(this));
    this.$inputDeparture.addEventListener('click', this._handleInputDateClick.bind(this));
    this.$container.addEventListener('keydown', this._setDateClick.bind(this), true);

    this.$inputOpen.forEach((el) => {
      el.addEventListener('click', this._handleInputClick.bind(this));
    });

    this.$calendar.querySelector('[data-button-type="clear"]').addEventListener('click', this._checkDate.bind(this));
  }

  _setDateClick() {
    const valueInputDeparture = this.$inputDeparture.value.split('.').join('');
    const isOnlyNumbersDeparture = /^\d+$/.test(valueInputDeparture);
    const dateYearsDeparture = this.$inputDeparture.value.split('.')[2];
    const dateMonthDeparture = this.$inputDeparture.value.split('.')[1] - 1;
    const dateDayDeparture = this.$inputDeparture.value.split('.')[0];

    const valueInputArrival = this.$inputArrival.value.split('.').join('');
    const isOnlyNumbersArrival = /^\d+$/.test(valueInputArrival);
    const dateYearsArrival = this.$inputArrival.value.split('.')[2];
    const dateMonthArrival = this.$inputArrival.value.split('.')[1] - 1;
    const dateDayArrival = this.$inputArrival.value.split('.')[0];
    
    const attributeArrival = this.arrival.getAttribute('data-complete');
    const attributeDeparture = this.departure.getAttribute('data-complete');
    const calendarDate = this.calendar.$body.data('datepicker');
    
    if (valueInputArrival.length === 8 && this.$inputArrival.value !== '' && isOnlyNumbersArrival && attributeArrival === 'false') {
      calendarDate.selectDate(new Date(dateYearsArrival, dateMonthArrival, dateDayArrival));
      this.arrival.setAttribute('data-complete', 'true');
    }

    if (valueInputDeparture.length === 8 && this.$inputDeparture.value !== '' && isOnlyNumbersDeparture && attributeDeparture === 'false') {
      calendarDate.selectDate(new Date(dateYearsDeparture, dateMonthDeparture, dateDayDeparture));
      this.departure.setAttribute('data-complete', 'true');
    }
  }

  _handleInputDateClick() {
    this.calendar.showCalendar();
  }

  _checkDate() {
    this.$inputArrival.value = '';
    this.$inputDeparture.value = '';
  }

  _handleGlobalClick(event) {
    const { target } = event;
    const isClickOnInput = this.$container.contains(target);
    const isOpenCalendar = this.calendar.isOpen;
    const isClickOutsideCalendar = !isClickOnInput && isOpenCalendar;

    if (isClickOutsideCalendar) {
      this.calendar.hiddenClear();
      this.departure.setAttribute('data-complete', 'false');
      this.arrival.setAttribute('data-complete', 'false');
    }
  }

  _closeCalendarEsc() {
    this.body.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        this.calendar.hiddenClear();
      }
    });
  }
  
  _handleInputClick() {
    this.calendar.checkIsOpen();
  }

  _init() {
    const isOpen = this.hasOpenCalendar === 'true';

    this.calendar = new Calendar({
      body: this.$containerCalendar,
      isOpen,
      options: {
        onSelect: (formattedDate) => this._setDate(formattedDate),
      },
    });
  }

  _setDate(date) {
    let dates = date.split(' - ');
    let hasDates = dates !== undefined && dates !== null && date !== '';
    this.$inputArrival.value = dates[0];

    if (hasDates) {
      if (dates.length > 1) {
        this.$inputDeparture.value = dates[1];
      }
    }
    
    this._notifyObservers();
  }
}

export default RangeDateCalendar;
