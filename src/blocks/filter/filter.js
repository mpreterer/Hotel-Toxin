import DropDown from '../dropDown/dropDown';
import RangeDateCalendar from '../range-date-calendar/rangeDateCalendar';

class Filter {
  constructor(domParent) {
    this.container = domParent.querySelector('.js-filter');
    this._init();
  }

  _init() {
    const { container } = this;
    this.dropDown = new DropDown(container, ['гость', 'гостя', 'гостей']);
    this.rangeDateCalendar = new RangeDateCalendar(container);
  }
}

export default Filter;
