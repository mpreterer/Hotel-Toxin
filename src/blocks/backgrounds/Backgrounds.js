import backgroundsClassNames from './utils/backgroundsClassNames';

class Backgrounds {
  constructor(domParent) {
    this.container = domParent;
    this._init();
  }

  _init() {
    this.arrayBackgroundsJson = this.container.getAttribute('data-src');
    this._animateBackground();
    window.onload = this._setTransition();
    this._setTransition();
  }

  _setTransition() {
    this.container.classList.add(backgroundsClassNames.transition);
  }

  _animateBackground() {
    const arrayBackgroundsParse = JSON.parse(this.arrayBackgroundsJson);
    const lengthArrayBackgrounds = arrayBackgroundsParse.src.length;
    let counter = 0;
    
    this.container.style.backgroundImage = `url('${arrayBackgroundsParse.src[counter].background}')`;
    counter += 1;

    setInterval(() => {
      this.container.classList.remove(backgroundsClassNames.transition);
      this.container.classList.add(backgroundsClassNames.high_opacity);
    }, 6000);

    setInterval(() => {
      if (counter === lengthArrayBackgrounds) {
        counter = 0;
      }

      this.container.classList.remove(backgroundsClassNames.high_opacity);
      this.container.classList.add(backgroundsClassNames.transition);
      this.container.style.backgroundImage = `url('${arrayBackgroundsParse.src[counter].background}')`;

      counter += 1;
    }, 7000);
  }
}

export default Backgrounds;
