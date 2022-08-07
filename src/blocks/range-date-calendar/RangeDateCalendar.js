import Calendar from '../calendar/Calendar';

class RangeDateCalendar {
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

  _notifyObservers(data) {
    this.observers.forEach((observer) => observer(data));
  }

  _bindEventListener() {
    document.addEventListener('click', this._handleGlobalClick.bind(this), true);

    this.$inputOpen.forEach((el) => {
      el.addEventListener('click', this._handleInputClick.bind(this));
    });

    this.$calendar.querySelector('[data-button-type="clear"]').addEventListener('click', this._checkDate.bind(this));
  }

  _checkDate() {
    this.$inputArrival.innerHTML = 'ДД.ММ.ГГГГ';
    this.$inputDeparture.innerHTML = 'ДД.ММ.ГГГГ';
  }

  _handleGlobalClick(event) {
    const { target } = event;
    const isClickOnDropdown = this.$calendar.contains(target);
    const isOpenCalendar = this.calendar.isOpen;
    const hasClickOutSideCalendar = !isClickOnDropdown && isOpenCalendar;

    if (hasClickOutSideCalendar) {
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
    let dates = date.split(' - ');
    let hasDates = dates !== undefined && dates !== null && date !== '';
    this.$inputArrival.innerHTML = dates[0];

    if (hasDates) {
      if (dates.length > 1) {
        this.$inputDeparture.innerHTML = dates[1];
      }
    }
    
    this._notifyObservers();
  }
}

export default RangeDateCalendar;
