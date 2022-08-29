import Calendar from '../calendar/Calendar';

class RangeDateCalendar {
  constructor(domParent) {
    this.$container = domParent;
    this.body = document.body;
    this.arrival = this.$container.querySelector('.js-range-date-calendar__masked-arrival');
    this.$inputArrival = this.arrival.querySelector('[data-masked]');
    this.departure = this.$container.querySelector('.js-range-date-calendar__masked-departure');
    this.$inputDeparture = this.departure.querySelector('[data-masked]');
    this.$inputOpen = this.$container.querySelectorAll('.js-range-date-calendar__field-input');
    this.$containerCalendar = this.$container.querySelector('.js-range-date-calendar__calendar');
    this.$clearButton = $(this.$containerCalendar).find('[data-button-type="clear"]');
    this.$arrow = this.$container.querySelectorAll('.js-range-date-calendar__container-arrow');
    this.hasOpenCalendar = this.$container.getAttribute('data-is-open');
    this.observers = [];

    this._init();
    this._bindEventListener();
  }

  _notifyObservers(data) {
    this.observers.forEach((observer) => observer(data));
  }

  _bindEventListener() {
    document.addEventListener('click', this._handleGlobalClick.bind(this), true);
    
    this.$inputArrival.addEventListener('click', this._handleInputDateClick.bind(this));
    this.$inputDeparture.addEventListener('click', this._handleInputDateClick.bind(this));
    this.$container.addEventListener('keydown', this._setDateClick.bind(this), true);

    this.$arrow.forEach((el) => {
      el.addEventListener('click', this._handleArrowClick.bind(this));
    });

    this.$inputOpen.forEach((el) => {
      el.addEventListener('click', this._handleInputClick.bind(this));
    });
  }

  _handleArrowClick() {
    this.calendar.checkIsOpen();
  }

  _setDateClick(event) {
    const calendarDate = this.calendar.$body.data('datepicker');
    
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

    const isEnterArrival = valueInputArrival.length === 8;
    const isEnterDeparture = valueInputDeparture.length === 8;
    const isNotEmptyDateArrival = this.$inputArrival.value !== '';
    const isNotEmptyDateDeparture = this.$inputDeparture.value !== '';
    const isNotUseArrival = attributeArrival === 'false';
    const isNotUseDeparture = attributeDeparture === 'false';

    const isNotOnlyNumbersDeparture = !isOnlyNumbersDeparture;
    const isNotOnlyNumbersArrival = !isOnlyNumbersArrival;


    if (event.key === 'Backspace') {
      if (isNotOnlyNumbersDeparture && isNotOnlyNumbersArrival) {
        calendarDate.date = new Date();
      }

      if (event.target.name === 'arrival') {
        this.arrival.setAttribute('data-complete', 'false');
      }

      if (event.target.name === 'departure') {
        this.departure.setAttribute('data-complete', 'false');
      }
    } else {
      if (isEnterArrival && isNotEmptyDateArrival && isOnlyNumbersArrival && isNotUseArrival) {
        calendarDate.selectDate(new Date(dateYearsArrival, dateMonthArrival, dateDayArrival));
        this.arrival.setAttribute('data-complete', 'true');
      }
  
      if (isEnterDeparture && isNotEmptyDateDeparture && isOnlyNumbersDeparture && isNotUseDeparture) {
        calendarDate.selectDate(new Date(dateYearsDeparture, dateMonthDeparture, dateDayDeparture));
        this.departure.setAttribute('data-complete', 'true');
      }
    }
  }

  _handleInputDateClick() {
    this.calendar.showCalendar();
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
    if (date) {
      this.calendar.addClearBtn();
    } else {
      this.calendar.deleteClearBtn();
      this.$inputArrival.value = '';
      this.$inputDeparture.value = '';
    }

    const datesArray = date.split(' - ');
    const dateFirst = datesArray[0];
    const dateSecond = datesArray[1];
    const hasDates = datesArray !== undefined && datesArray !== null && date !== '';
    this.$inputArrival.value = dateFirst;

    if (hasDates) {
      if (datesArray.length > 1) {
        this.$inputDeparture.value = dateSecond;
      }
    }

    this._notifyObservers(date);
  }
}

export default RangeDateCalendar;
