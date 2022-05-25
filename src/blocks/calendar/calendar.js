import 'air-datepicker'

class Calendar {
    constructor(params) {
        this.$body = $(params.body).find('.js-calendar-container');
        this.options = params.options || {};

        this.init(this.options);
    }

    init(options) {
        const optionDefault = {
            language: 'ru',
            inline: false,
            toggleSelected: true,
            range: true,
            multipleDates: 2,
            multipleDatesSeparator: '-',
            dateFormat: 'dd.mm.yyyy',
        }

        const mergedOptions = $.extend({}, optionDefault, options);
        this.$body.datepicker(mergedOptions).data('datepicker');
    }

    create_calendar(options) {
       
    }
}

export default Calendar;
