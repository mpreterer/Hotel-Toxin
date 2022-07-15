import Calendar from '../../../blocks/calendar/Calendar';

class Cards {
  constructor() {
    this._init();
  }

  _init() {
    const {
      calendar,
    } = this._getElements();

    calendar.forEach((item) => new Calendar({
      body: item,
      isOpen: true,
    }));
  }

  _getElements() {
    return {
      calendar: document.querySelectorAll('[data-component-js="js-calendar-open"]'),
    };
  }
}

export default Cards;
