import AirDatepicker from '../../libs/air-datepicker/AirDatepicker';

class Calendar {
  constructor(params) {
    this.$container = document.querySelector('.js-calendar');
    this.initDates = this.$container.getAttribute('data-init-dates');
    this.isOpen = this.$container.getAttribute('data-is-open');
    this.dateFormat = this.$container.getAttribute('data-format');
    this.bodyPage = document.body;
    this.options = params.options;

    this._init();
  }

  _init() {
    const isOpen = this.isOpen === 'true';
    this.isOpen = isOpen;

    this.calendarPlugin = new AirDatepicker({
      body: this.$container,
      initDate: this.initDates,
      visible: isOpen,
      options: this.options,
    });

    this.$container.addEventListener('keydown', this._handleRootKeyDown.bind(this));
  }

  _handleRootKeyDown(event) {
    if (event.key === 'Esc') {
      this.calendarPlugin.hiddenCalendar();
    }
  }
}

export default Calendar;
