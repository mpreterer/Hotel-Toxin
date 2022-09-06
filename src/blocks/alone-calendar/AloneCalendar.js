import Calendar from '../calendar/Calendar';

class AloneCalendar {
  constructor(domParent) {
    this.$container = domParent;
    this.body = document.body;
    this.$placeholder = this.$container.querySelector(
      '.js-calendar-placeholder',
    );
    this.$calendarBody = this.$container.querySelector(
      '.js-block-calendar',
    );
    this.$inputCalendar = this.$container.querySelector(
      '.js-calendar-container',
    );
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

  _handleDropDownKeyDown(event) {
    if (event.key === 'Enter') {
      this.calendar.checkIsOpen();
    }
  }

  _bindEvent() {
    this.body.addEventListener(
      'click',
      this._handleGlobalClick.bind(this),
      true,
    );
    this.$container.addEventListener(
      'keydown',
      this._handleDropDownKeyDown.bind(this),
      true,
    );
    this.$inputCalendar.addEventListener(
      'click',
      this._handleCalendarContainerClick.bind(this),
    );
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

  _handleCalendarContainerClick() {
    this.calendar.checkIsOpen();
  }

  _setDate(date) {
    this.$placeholder.innerHTML = date;

    // В этом месте никак без вложенной проверки, так как Calendar
    // конкретно в этом классе может быть undefined.
    // При инициализации без проверки может вызвать ошибку.
    
    if (this.calendar !== undefined) {
      if (date) {
        this.calendar.addClearBtn();
      } else {
        this.calendar.deleteClearBtn();
        this.$placeholder.innerHTML = 'Выберите дату';
      }
    }

    this._notifyObservers();
  }

  _notifyObservers(data) {
    this.observers.forEach((observer) => observer(data));
  }
}

export default AloneCalendar;
