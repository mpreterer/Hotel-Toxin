class RoomOrder {
  constructor(domParent) {
    this.container = domParent;
    this.body = document.querySelector('body');
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
    this.body.addEventListener('click', this._countPrice.bind(this));
  }

  _countPrice() {
    const fees = Number(this.fees.textContent.replace(/\s/g, ''));
    const servicesCount = Number(this.services.textContent.replace(/\s/g, ''));
    const priceDay = Number(this.$priceDay.textContent.replace(/\s/g, ''));
    
    const arrival = this.$arrival.value.split('.');
    const departure = this.$departure.value.split('.');
    const days = Number(departure[0]) - Number(arrival[0]);
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
