import Calendar from '../calendar/Calendar';

class RangeDateCalendar {
  constructor(domParent) {
    this.$container = domParent;
    this.body = document.body;
    this.arrival = this.$container.querySelector(
      '.js-masked-arrival',
    );
    this.$inputArrival = this.arrival.querySelector('[data-masked]');
    this.departure = this.$container.querySelector(
      '.js-masked-departure',
    );
    this.$inputDeparture = this.departure.querySelector('[data-masked]');
    this.$containerCalendar = this.$container.querySelector(
      '.js-block-calendar',
    );
    this.$arrow = this.$container.querySelectorAll(
      '.js-container-arrow',
    );

    this._init();
    this._bindEventListener();
  }

  _bindEventListener() {
    document.addEventListener(
      'click',
      this._handleGlobalClick.bind(this),
      true,
    );
    this.$inputArrival.addEventListener(
      'click',
      this._handleInputDateClick.bind(this),
    );
    this.$inputDeparture.addEventListener(
      'click',
      this._handleInputDateClick.bind(this),
    );
    this.$container.addEventListener(
      'keydown',
      this._handleRootKeyDown.bind(this),
      true,
    );
    this.$container.addEventListener('click', this._handleContainerClick.bind(this));

    this.$arrow.forEach((el) => {
      el.addEventListener('click', this._handleContainerArrowClick.bind(this));
    });
  }

  _handleContainerArrowClick() {
    this.calendar.calendarPlugin.checkIsOpen();
  }

  _removingDate(event) {
    const valueInputArrival = this.$inputArrival.value.split('.').join('');
    const isOnlyNumbersArrival = /^\d+$/.test(valueInputArrival);

    const valueInputDeparture = this.$inputDeparture.value.split('.').join('');
    const isOnlyNumbersDeparture = /^\d+$/.test(valueInputDeparture);

    const isNotOnlyNumbersDeparture = !isOnlyNumbersDeparture;
    const isNotOnlyNumbersArrival = !isOnlyNumbersArrival;

    if (isNotOnlyNumbersDeparture && isNotOnlyNumbersArrival) {
      this.calendar.calendarPlugin.selectNewDate();
    }

    if (event.target.name === 'arrival') {
      this.arrival.setAttribute('data-complete', 'false');
    }

    if (event.target.name === 'departure') {
      this.departure.setAttribute('data-complete', 'false');
    }
  }

  _enterDate() {
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

    if (
      isEnterArrival &&
      isNotEmptyDateArrival &&
      isOnlyNumbersArrival &&
      isNotUseArrival
    ) {
      this.calendar.calendarPlugin.selectDate(
        dateYearsArrival, dateMonthArrival, dateDayArrival,
      );
      this.arrival.setAttribute('data-complete', 'true');
    }

    if (
      isEnterDeparture &&
      isNotEmptyDateDeparture &&
      isOnlyNumbersDeparture &&
      isNotUseDeparture
    ) {
      this.calendar.calendarPlugin.selectDate(
        dateYearsDeparture, dateMonthDeparture, dateDayDeparture,
      );
      this.departure.setAttribute('data-complete', 'true');
    }
  }

  _handleRootKeyDown(event) {
    if (event.key === 'Backspace') {
      this._removingDate(event);
    } else {
      this._enterDate(event);
    }
  }

  _handleInputDateClick() {
    this.calendar.calendarPlugin.showCalendar();
  }

  _handleGlobalClick(event) {
    const { target } = event;
    const isClickOnInput = this.$container.contains(target);
    const isOpenCalendar = this.calendar.calendarPlugin.isOpen;
    const isClickOutsideCalendar = !isClickOnInput && isOpenCalendar;

    if (isClickOutsideCalendar) {
      this.calendar.calendarPlugin.hiddenCalendar();
    }
  }

  _init() {
    this.calendar = new Calendar({});
  }

  _handleContainerClick() {
    const date = this.calendar.calendarPlugin.onDates;

    if (date !== undefined) {
      this.$inputArrival.value = '';
      this.$inputDeparture.value = '';

      const datesArray = date.split(' - ');
      const dateFirst = datesArray[0];
      const dateSecond = datesArray[1];
      
      this.$inputArrival.value = dateFirst;

      if (datesArray.length > 1) {
        this.$inputDeparture.value = dateSecond;
      }
    }
  }
}

export default RangeDateCalendar;
