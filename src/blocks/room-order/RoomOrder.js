class RoomOrder {
  constructor(domParent) {
    this.container = domParent;
    this.body = document.body;
    this.$inputArrival = this.container.querySelector('.js-range-date-calendar__masked-arrival');
    this.$arrival = this.$inputArrival.querySelector('[data-masked]');
    this.$inputDeparture = this.container.querySelector('.js-range-date-calendar__masked-departure');
    this.$departure = this.$inputDeparture.querySelector('[data-masked]');
    this.$priceDay = this.container.querySelector('[data-price="priceDay"]');
    this.$sumCountFees = this.container.querySelector('[data-price="resultPrice"]');
    this.$sumWithoutFees = this.container.querySelector('[data-price="priceWithoutFees"]');
    this.fees = this.container.querySelector('[data-price="feesPrice"]');
    this.services = this.container.querySelector('[data-price="services"]');
    this.sumDays = this.container.querySelector('.js-room-order__sum-day');
    this.rangeDateCalendar = this.container.querySelector('.js-range-date-calendar');

    this._init();
  }

  _init() {
    this._eventCount();
  }

  _eventCount() {
    this.container.addEventListener('click', this._countPrice.bind(this));
    this.body.addEventListener('click', this._countPrice.bind(this));
    this.container.addEventListener('keydown', this._countPrice.bind(this));
  }

  _getTime(date) {
    const result = new Date(date);
    result.setMinutes(result.getMinutes() - result.getTimezoneOffset());
    return result;
  }

  _daysBetween(dateFirstCount, dateSecondCount) {
    const millisecondsPerDay = 24 * 60 * 60 * 1000;
    const dateFirst = dateFirstCount;
    const dateSecond = dateSecondCount;

    const arrayFirstDate = dateFirst.split('.');
    const tempFirstArray = arrayFirstDate[0];
    arrayFirstDate[0] = arrayFirstDate[2];
    arrayFirstDate[2] = tempFirstArray;
    const resulFirstDate = arrayFirstDate.join('-');

    const arraySecondDate = dateSecond.split('.');
    const tempSecondArray = arraySecondDate[0];
    arraySecondDate[0] = arraySecondDate[2];
    arraySecondDate[2] = tempSecondArray;
    const resulSecondDate = arraySecondDate.join('-');

    return (this._getTime(resulSecondDate) -
            this._getTime(resulFirstDate)) / millisecondsPerDay;
  }

  _countPrice() {
    const fees = Number(this.fees.textContent.replace(/\s/g, ''));
    const servicesCount = Number(this.services.textContent.replace(/\s/g, ''));
    const priceDay = Number(this.$priceDay.textContent.replace(/\s/g, ''));
    
    const days = this._daysBetween(this.$arrival.value, this.$departure.value);
    
    const resultWithFees = (priceDay * days) - fees + servicesCount;
    const resultWithoutFees = (priceDay * days);

    if (!(Number.isNaN(resultWithFees)) && resultWithFees > 0) {
      this.$sumCountFees.textContent = resultWithFees.toLocaleString();
      this.$sumWithoutFees.textContent = resultWithoutFees.toLocaleString();
      this.sumDays.textContent = days;
    }
  }
}

export default RoomOrder;
