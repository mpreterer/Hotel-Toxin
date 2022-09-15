import Calendar from '../../../blocks/calendar/Calendar';

class Cards {
  constructor(domParent) {
    this.container = domParent;
    this.calendar = this.container.querySelector('[data-component-js="js-calendar-open"]');
    this._init();
  }

  _init() {
    this.calendar = new Calendar({
      body: this.calendar,
    });
  }
}

export default Cards;
