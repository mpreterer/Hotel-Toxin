import 'air-datepicker';

class Calendar {
  constructor(params) {
    this.$body = $(params.body).find('.js-calendar-container');
    this.container = document.querySelector('.js-calendar-container');
    this.bodyPage = document.querySelector('body');
    this.options = params.options || {};
    this.isOpen = this.$body.attr('data-is-open');
    this.initIsOpen = params.isOpen;
    this.observers = [];

    this._init(this.options);
    this._bindEventButtons();
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
  }

  observeShowCalendarEvent(observer) {
    const isCorrectObserver = observer !== undefined && observer !== null;

    if (isCorrectObserver) {
      this.observers.push(observer);
    }
  }

  checkIsOpen() {
    if (this.isOpen) {
      this.hiddenClear();
    } else {
      this.showCalendar();
    }
  }

  showCalendar() {
    this.$body.show();
    this.isOpen = true;
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
    const $buttons = $datepicker.find('.calendar__buttons');

    $datepicker.append('<div class="calendar__buttons"></div>');
    this.$body.find('.calendar__buttons').append([clearButton, confirmButton]);

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
  }

  hiddenClear() {
    this.$body.hide();
    this.isOpen = false;
  }

  _handleConfirmClick() {
    this.hiddenClear();
    this._notifyObservers({ isOpen: this.isOpen });
    
    if (this.container.classList.contains('js-calendar-container_open')) {
      this.container.classList.remove('js-calendar-container_open');
    }
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
