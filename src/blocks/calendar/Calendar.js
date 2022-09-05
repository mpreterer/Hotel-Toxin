import 'air-datepicker';
import calendarClassNames from './utils/calendarClassNames';

class Calendar {
  constructor(params) {
    this.$body = $(params.body).find('.js-calendar');
    this.options = params.options || {};
    this.isOpen = this.$body.attr('data-is-open');
    this.initIsOpen = params.isOpen;
    this.initDates = this.$body.attr('data-init-dates');
    this.bodyPage = document.body;
    this.observers = [];

    this._init(this.options);
    this._bindEventButtons();
  }

  observeShowCalendarEvent(observer) {
    const isCorrectObserver = observer !== undefined && observer !== null;

    if (isCorrectObserver) {
      this.observers.push(observer);
    }
  }

  showCalendar() {
    this.$body.show();
    this.isOpen = true;
  }

  deleteClearBtn() {
    this.$body
      .find('[data-button-type="clear"]')
      .addClass(calendarClassNames.CLEAR_BTN_CLOSE);
  }

  addClearBtn() {
    this.$body
      .find('[data-button-type="clear"]')
      .removeClass(calendarClassNames.CLEAR_BTN_CLOSE);
  }

  checkIsOpen() {
    if (this.isOpen) {
      this.hiddenClear();
    } else {
      this.showCalendar();
    }
  }

  hiddenClear() {
    this.$body.hide();
    this.isOpen = false;
  }

  _init(options) {
    const optionDefault = {
      language: 'ru',
      inline: false,
      toggleSelected: true,
      range: true,
      multipleDates: 2,
      multipleDatesSeparator: '-',
      dateFormat: 'dd.mm.yyyy',
      prevHtml: '<div class="arrow-back-btn"></div>',
      nextHtml: '<div class="arrow-next-btn"></div>',
    };

    const mergedOptions = $.extend({}, optionDefault, options);
    this.$body.datepicker(mergedOptions).data('datepicker');

    this._addButtons();

    if (this.initDates !== '' && this.initDates !== undefined) {
      const parseDate = JSON.parse(this.initDates);
      this.$body
        .datepicker()
        .data('datepicker')
        .selectDate(new Date(parseDate[0]));
      this.$body
        .datepicker()
        .data('datepicker')
        .selectDate(new Date(parseDate[1]));
      this.addClearBtn();
    }

    this.bodyPage.addEventListener('keydown', this._bindEventEsc.bind(this));
  }

  _bindEventEsc(event) {
    if (event.key === 'Escape') {
      this.hiddenClear();
    }
  }

  _addButtons() {
    const clearButton = `
        <div data-button-type="clear" class="calendar__button">
            Очистить
        </div>
    `;
    const confirmButton = `
        <div data-button-type="confirm" class="calendar__button">
            Применить
        </div>
    `;

    const $datepicker = this.$body.find('.datepicker');

    $datepicker.append('<div class="calendar__buttons"></div>');
    this.$body.find(calendarClassNames.BUTTONS).append([clearButton, confirmButton]);
    this.$body
      .find('[data-button-type="clear"]')
      .addClass(calendarClassNames.CLEAR_BTN_CLOSE);

    if (this.initIsOpen) {
      this.showCalendar();
    } else {
      this.hiddenClear();
    }
  }

  _bindEventButtons() {
    const $clearBtn = this.$body.find('[data-button-type="clear"]');
    const $confirmBtn = this.$body.find('[data-button-type="confirm"]');

    $clearBtn.on('click', this._handleClearBtnClick.bind(this));
    $confirmBtn.on('click', this._handleConfirmClick.bind(this));
  }

  _handleClearBtnClick() {
    this._resetDate();
    this.$body
      .find('[data-button-type="clear"]')
      .addClass(calendarClassNames.CLEAR_BTN_CLOSE);
  }

  _handleConfirmClick() {
    this.hiddenClear();
    this._notifyObservers({ isOpen: this.isOpen });
  }

  _notifyObservers(data) {
    this.observers.forEach((observer) => observer(data));
  }

  _resetDate() {
    const calendar = this.$body.data('datepicker');

    calendar.clear();
    calendar.date = new Date();
  }
}

export default Calendar;
