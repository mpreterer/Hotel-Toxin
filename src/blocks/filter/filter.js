import DropDown from '../dropDown/DropDown.js';
import rangeDateCalendar from '../range-date-calendar/range-date-calendar.js';


class Filter {
    constructor(domParent) {
        this.container = domParent.querySelector('.js-filter');
        this._init();
    }

    _init() {
        const { container } = this;
        this.dropDown = new DropDown(container, ['гость', 'гостя', 'гостей']);
        this.rangeDateCalendar = new rangeDateCalendar(container);
    }
}

export default Filter;