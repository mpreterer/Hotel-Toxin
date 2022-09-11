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
    this.dateFormat = this.$container.getAttribute('data-format');

    this._init();
    this._bindEvent();
  }

  _init() {
    this.calendar = new Calendar({
      options: {
        dateFormat: this.dateFormat,
      },
    });

    this._handleContainerClick();
  }

  _handleDropDownKeyDown(event) {
    if (event.key === 'Enter') {
      this.calendar.calendarPlugin.checkIsOpen();
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
    this.$container.addEventListener('click', this._handleContainerClick.bind(this));
    this.$inputCalendar.addEventListener(
      'click',
      this._handleCalendarContainerClick.bind(this),
    );
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

  _handleCalendarContainerClick() {
    this.calendar.calendarPlugin.checkIsOpen();
  }

  _handleContainerClick() {
    const date = this.calendar.calendarPlugin.onDates;
    
    if (date !== undefined) {
      this.$placeholder.value = date;
    }
  }
}

export default AloneCalendar;
