class RoomOrder {
  constructor(domParent) {
    this.container = domParent;
    this.$datepicker = this.container.querySelector('.js-range-date-calendar__calendar');
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

    this._init();
  }

  _init() {
    this._eventCount();
  }

  _eventCount() {
    this.container.addEventListener('click', this._countPrice.bind(this));
  }

  _countPrice() {
    const fees = Number(this.fees.textContent.replace(/\s/g, ''));
    const servicesCount = Number(this.services.textContent.replace(/\s/g, ''));
    const priceDay = Number(this.$priceDay.textContent.replace(/\s/g, ''));
    
    let arrival = this.$arrival.value.split('.');
    let departure = this.$departure.value.split('.');
    let days = Number(departure[0]) - Number(arrival[0]);
    let resultWithFees = (priceDay * days) - fees + servicesCount;
    let resultWithoutFees = (priceDay * days);

    if (resultWithFees !== NaN && resultWithFees > 0) {
      this.$sumCountFees.textContent = resultWithFees.toLocaleString();
      this.$sumWithoutFees.textContent = resultWithoutFees.toLocaleString();
      this.sumDays.textContent = days;
    }
  }
}

export default RoomOrder;
