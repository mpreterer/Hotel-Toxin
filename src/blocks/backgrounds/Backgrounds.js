class Backgrounds {
  constructor(domParent) {
    this.container = domParent;
    this._init();
  }

  _init() {
    this.arrayBackgroundsJson = this.container.getAttribute('data-src');
    this._animateBackground();
    this._setTransition();
  }

  _setTransition() {
    window.onload = () => {
      this.container.style.transition = '1s';
      this.container.style.WebkitTransition = '1s';
      this.container.style.MozTransition = '1s';
    };
  }

  _animateBackground() {
    const arrayBackgroundsParse = JSON.parse(this.arrayBackgroundsJson);
    let counter = 0;
    
    this.container.style.backgroundImage = `url('${arrayBackgroundsParse.src[counter].background}')`;
    counter += 1;

    setInterval(() => {
      if (counter === 3) {
        counter = 0;
      }

      this.container.style.backgroundImage = `url('${arrayBackgroundsParse.src[counter].background}')`;

      counter += 1;
    }, 7000);
  }
}

export default Backgrounds;
