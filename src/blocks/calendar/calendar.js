import 'air-datepicker'

class Calendar {
    constructor(params) {
        this.$body = $(params.body).find('.js-calendar-container');
        this.options = params.options || {};
        this.isOpen = false;
        this.initIsOpen = params.isOpen;
        this.observers = [];

        this._init(this.options);
        this._bind_event_buttons();
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
        }

        const mergedOptions = $.extend({}, optionDefault, options);
        this.$body.datepicker(mergedOptions).data('datepicker');

        this._add_buttons();
    }

    observeShowCalendarEvent(observer) {
        const isCorrectObserver = observer !== undefined && observer !== null;
    
        if (isCorrectObserver) {
          this.observers.push(observer);
        }
    }

    check_is_open() {
        if (this.isOpen) {
          this.hiden_calendar();
        } else {
          this.show_calendar();
        }
    }

    show_calendar() {
        this.$body.show();
        this.isOpen = true;
    }

    _add_buttons() {
        const clearButton = `
            <div data-button-type="clear" class="calendar__button">
                Очистить
            </div>
        `;
        const cofirmButton = `
            <div data-button-type="confirm" class="calendar__button">
                Применить
            </div>
        `;

        const $datepicker = this.$body.find('.datepicker');
        const $buttons = $datepicker.find('.calendar__buttons');

        $datepicker.append('<div class="calendar__buttons"></div>');
        this.$body.find('.calendar__buttons').append([clearButton, cofirmButton]);

        if (this.initIsOpen) {
            this.show_calendar();
        } else {
            this.hiden_calendar();
        }
    }

    _bind_event_buttons() {
        const $clearBtn = this.$body.find('[data-button-type="clear"]');
        const $confirmBtn = this.$body.find('[data-button-type="confirm"]');
    
        $clearBtn.on('click', this._handleClearBtnClick.bind(this));
        $confirmBtn.on('click', this._handle_confirm_click.bind(this));
    }
    
    _handleClearBtnClick() {
        this._resetDate();
    }

    hiden_calendar() {
        this.$body.hide();
        this.isOpen = false;
    }

    _handle_confirm_click() {
        this.hiden_calendar();
        this._notify_observers({ isOpen: this.isOpen });
    }

    _notify_observers(data) {
        this.observers.forEach((observer) => observer(data));
    }

    _resetDate() {
        const calendar = this.$body.data('datepicker');

        calendar.clear();
        calendar.date = new Date();
    }
}

export default Calendar;
