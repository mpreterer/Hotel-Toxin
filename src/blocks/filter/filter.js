import dropDown from '../dropDown/dropDown.js';
import rangeDateCalendar from '../range-date-calendar/range-date-calendar.js';

import '../dropDown/dropDown.scss';
import '../button/button.scss';
import '../range-date-calendar/range-date-calendar.scss';
import '../calendar/calendar.scss';

class Filter {
    constructor(domParent) {
        this.container = domParent.querySelector('.js-filter');
        this._init();
    }

    _init() {
        const { container } = this;
        this.dropDown = new dropDown(container);
        this.rangeDateCalendar = new rangeDateCalendar(container);
    }
}

export default Filter;