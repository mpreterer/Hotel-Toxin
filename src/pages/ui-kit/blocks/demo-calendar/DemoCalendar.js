import Calendar from '../../../../blocks/calendar/Calendar';

class DemoCalendar {
  constructor(domParent) {
    this.container = domParent;
    this._init();
  }

  _init() {
    new Calendar({
      body: this.container,
    });
  }
}

export default DemoCalendar;
