class Calendar {
    constructor(domParent) {
        this.$container = domParent;

        this.init();
    }

    init() {
        this.hasOpen = this.$container.hasAttribute('data-is-open');
        this.hasRange = this.$container.hasAttribute('data-range');
        this.moving = this.$container.hasAttribute('data-moving');
        this.format = this.$container.hasAttribute('data-format');

        this.check_options();
        this.create_calendar();
    }

    check_options() {

    }

    create_calendar() {
    }
}

export default Calendar;
