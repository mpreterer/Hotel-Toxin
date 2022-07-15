import DropDown from '../dropDown/DropDown';
import '../dropDown';
import '../range-date-calendar';

class Filter {
  constructor(domParent) {
    this.container = domParent;
    this._init();
  }

  _init() {
    const { container } = this;
    this.dropDown = new DropDown(container, ['гость', 'гостя', 'гостей']);
  }
}

export default Filter;
