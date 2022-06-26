import dropDown from '../dropDown/dropDown';
import rangeDateCalendar from '../range-date-calendar/range-date-calendar';

class RoomOrder {
    constructor(domParent) {
        this.container = domParent.querySelector('.js-room-order');
        this.$datepicker = this.container.querySelector('.js-range-date-calendar__calendar');
        this.$arrival = this.container.querySelector('[data-mov="arrival"]');
        this.$departure = this.container.querySelector('[data-mov="departure"]');
        this.$priceDay = this.container.querySelector('[data-price="priceDay"]');
        this.$sumCountFees = this.container.querySelector('[data-price="resultPrice"]');
        this.$sumWithoutFees = this.container.querySelector('[data-price="priceWithoutFees"]');
        this.fees = this.container.querySelector('[data-price="feesPrice"]');
        this.services = this.container.querySelector('[data-price="services"]');

        this._init();
        this._init_components();
    }

    _init() {
        this._event_count();
    }

    _init_components() {
        const { container } = this;
        this.dropDowns = new dropDown(container);
        this.calendar = new rangeDateCalendar(container);
    }

    _event_count() {
        this.$datepicker.addEventListener('click', this._count_price.bind(this))
    }

    _count_price() {
        const fees = Number(this.fees.textContent.replace(/\s/g, ''));
        const servicesCount = Number(this.services.textContent.replace(/\s/g, ''));
        const priceDay = Number(this.$priceDay.textContent.replace(/\s/g, ''));
        
        let arrival = this.$arrival.textContent.split('.');
        let departure = this.$departure.textContent.split('.');
        let days = Number(departure[0]) - Number(arrival[0]);
        let resultWithFees = (priceDay * days) - fees + servicesCount;
        let resultWithoutFees = (priceDay * days);

        if (resultWithFees !== NaN && resultWithFees > 0) {
            this.$sumCountFees.textContent = resultWithFees.toLocaleString();
            this.$sumWithoutFees.textContent = resultWithoutFees.toLocaleString();
        }
    }
}

export default RoomOrder;