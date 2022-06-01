class ButtonLike {
    constructor(domParent) {
        this.$container = domParent;
        this.$heart = this.$container.querySelector('.js-button-like__heart');
        this.count = this.$container.querySelector('.js-button-like__txt');

        this._init();
    }

    _init() {
        this._event_button();
    }

    _event_button() {
        this.$container.addEventListener('click', this._count_like.bind(this));
    }

    _count_like() {

        if ( this.$heart.classList.contains('fill_heart') ) {
            this.$heart.classList.remove('fill_heart');
            this.$container.classList.remove('active_heart');
        } else {
            this.$heart.classList.toggle('fill_heart');
            this.$container.classList.toggle('active_heart');
        }
        
        this.count.innerText -= [ 1, -1 ][+this.$container.classList.contains('active_heart')];
    }
}

export default ButtonLike;