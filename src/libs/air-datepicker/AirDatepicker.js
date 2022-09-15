import 'air-datepicker';
import calendarClassNames from './utils/calendarClassNames';

class AirDatepicker {
  constructor(params) {
    this.container = $(params.body);
    this.isOpen = params.visible;
    this.options = params.options || {};
    this.initDate = params.initDate || 'empty';
    this.bodyPage = document.body;

    this._init(this.options);
    this._bindEventButtons();
  }

  showCalendar() {
    this.isOpen = true;
    this.container.show();
  }

  hiddenCalendar() {
    this.isOpen = false;
    this.container.hide();
  }

  checkIsOpen() {
    if (this.isOpen) {
      this.hiddenCalendar();
    } else {
      this.showCalendar();
    }
  }

  selectDate(years, month, day) {
    this.datepicker.selectDate(
      new Date(years, month, day),
    );
  }

  onSetDate(date) {
    if (date) {
      this.addClearBtn();
    }

    this.onDates = date;
  }

  selectNewDate() {
    this.datepicker.date = new Date();
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
    this.container.datepicker(mergedOptions).data('datepicker');
    this.container.datepicker({
      onSelect: (formattedDate) => this.onSetDate(formattedDate),
    })
    
    this.datepicker = this.container.data('datepicker');
    this._addButtons();

    const isInitEmpty =
      this.initDate === 'empty';
      
    if (!isInitEmpty) {
      const parseDate = JSON.parse(this.initDate);
        this.datepicker
        .selectDate(new Date(parseDate[0]));
        this.datepicker
        .selectDate(new Date(parseDate[1]));
      this.addClearBtn();
    }

    this.bodyPage.addEventListener('keydown', this._handleBodyKeyDown.bind(this));

    if (this.isOpen) {
      this.showCalendar();
    } else {
      this.hiddenCalendar();
    }
  }

  _handleBodyKeyDown(event) {
    if (event.key === 'Escape') {
      this.hiddenCalendar();
    }
  }

  _addButtons() {
    const clearButton = `
      <div data-button-type="clear" class="datepicker__button">
          Очистить
      </div>
    `;
    const confirmButton = `
      <div data-button-type="confirm" class="datepicker__button">
          Применить
      </div>
    `;

    const $datepicker = this.container.find('.datepicker');

    $datepicker.append('<div class="datepicker__buttons"></div>');
    this.container
      .find(calendarClassNames.BUTTONS)
      .append([clearButton, confirmButton]);
    this.container
      .find('[data-button-type="clear"]')
      .addClass(calendarClassNames.CLEAR_BTN_CLOSE);
  }

  _bindEventButtons() {
    const $clearBtn = this.container.find('[data-button-type="clear"]');
    const $confirmBtn = this.container.find('[data-button-type="confirm"]');

    $clearBtn.on('click', this._handleClearBtnClick.bind(this));
    $confirmBtn.on('click', this._handleConfirmClick.bind(this));
  }

  _handleClearBtnClick() {
    this._resetDate();
    this.container
      .find('[data-button-type="clear"]')
      .addClass(calendarClassNames.CLEAR_BTN_CLOSE);
  }

  _handleConfirmClick() {
    this.hiddenCalendar();
  }

  _resetDate() {
    this.datepicker.clear();
    this.datepicker.date = new Date();
  }

  deleteClearBtn() {
    this.container
      .find('[data-button-type="clear"]')
      .addClass(calendarClassNames.CLEAR_BTN_CLOSE);
  }

  addClearBtn() {
    this.container
      .find('[data-button-type="clear"]')
      .removeClass(calendarClassNames.CLEAR_BTN_CLOSE);
  }
}

export default AirDatepicker;
