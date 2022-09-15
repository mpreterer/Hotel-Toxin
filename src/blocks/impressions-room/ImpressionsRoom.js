import ChartsJs from '../../libs/chart-js/ChartJs';

class ImpressionsRoom {
  constructor(domParent) {
    this.$container = domParent;
    this.$doughnut = this.$container.querySelector('.js-donut');
    this.$items = this.$container.querySelectorAll('.js-item');
    this.$itemsCircle = this.$container.querySelectorAll('.js-color-circle');
    this.count = this.$container.querySelector('.js-counter');
    this.countDesc = this.$container.querySelector('.js-description');

    this._init();
  }

  _init() {
    this._createArrayVotes();
    this._createDoughnut();
    this._setCommentResult();
    this._setColors();
    this._setBindItems();
  }

  _createArrayVotes() {
    this.arrayVotes = [];

    this.$items.forEach((el) => {
      this.arrayVotes.push(Number(el.getAttribute('data-set-comment')));
    });
  }

  _setColors() {
    const arrayColors = [];
    let count = 0;

    this.$items.forEach((el) => {
      arrayColors.push(JSON.parse(el.getAttribute('data-colors')));
    });

    this.$itemsCircle.forEach((el) => {
      const element = el;
      element.style.backgroundImage = `
      linear-gradient(180deg, ${arrayColors[count].join(',')})`;
      count += 1;
    });
  }

  _setBindItems() {
    this.$items.forEach((el) => {
      el.addEventListener('focus', this._handleItemFocus.bind(this));
    });
  }

  _handleItemFocus(el) {
    const colorComment = JSON.parse(el.target.getAttribute('data-colors'))[0];
    this.count.innerHTML = el.target.getAttribute('data-set-comment');
    this.count.style.color = colorComment;
    this.countDesc.style.color = colorComment;
  }

  _setCommentResult() {
    let resultComments = 0;

    this.$items.forEach((el) => {
      resultComments += Number(el.getAttribute('data-set-comment'));
    });

    this.count.innerHTML = resultComments;
  }

  _createDoughnut() {
    const ctx = this.$doughnut;
    ctx.height = 120;
    ctx.width = 120;

    const dataDoughnut = {
      labels: ['Великолепно', 'Хорошо', 'Удовлетворительно', 'Разочарован'],
      datasets: [
        {
          backgroundColor: ['#93A3FA', '#69D1CF', '#FFCA9C', '#3D4975'],
          data: [
            this.arrayVotes[0],
            this.arrayVotes[1],
            this.arrayVotes[2],
            this.arrayVotes[3],
          ],
        },
      ],
    };

    this.doughnut = new ChartsJs({
      body: this.$doughnut,
      data: dataDoughnut,
    });
  }
}

export default ImpressionsRoom;
