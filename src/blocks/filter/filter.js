<<<<<<< HEAD
import DropDown from '../dropDown/DropDown';
import RangeDateCalendar from '../range-date-calendar/rangeDateCalendar';
=======
import DropDown from '../dropDown/DropDown.js';
import rangeDateCalendar from '../range-date-calendar/range-date-calendar.js';

>>>>>>> d6ffc2df42e9cdc20583dc04fde4bf6679dd073a

class Filter {
  constructor(domParent) {
    this.container = domParent.querySelector('.js-filter');
    this._init();
  }

<<<<<<< HEAD
  _init() {
    const { container } = this;
    this.dropDown = new DropDown(container, ['гость', 'гостя', 'гостей']);
    this.rangeDateCalendar = new RangeDateCalendar(container);
  }
=======
    _init() {
        const { container } = this;
        this.dropDown = new DropDown(container);
        this.rangeDateCalendar = new rangeDateCalendar(container);
    }
>>>>>>> d6ffc2df42e9cdc20583dc04fde4bf6679dd073a
}

export default Filter;
