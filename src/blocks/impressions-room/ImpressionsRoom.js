import Chart from 'chart.js';

class ImpressionsRoom {
  constructor(domParent) {
    this.$container = domParent;
    this.$doughnut = this.$container.querySelector(
      '.js-impressions-room__donut'
    );
    this.$items = this.$container.querySelectorAll(
      '.js-impressions-room__item'
    );
    this.$itemsCircle = this.$container.querySelectorAll(
      '.js-impressions-room__item-color-circle'
    );
    this.count = this.$container.querySelector('.js-impressions-room__count');
    this.countDesc = this.$container.querySelector(
      '.js-impressions-room__desc'
    );

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
      el.style.backgroundImage = `
      linear-gradient(180deg, ${arrayColors[count].join(',')})`;
      count += 1;
    });
  }

  _setBindItems() {
    this.$items.forEach((el) => {
      el.addEventListener('focus', this._setCountComment.bind(this));
    });
  }

  _setCountComment(el) {
    const colorComment = JSON.parse(el.path[0].getAttribute('data-colors'))[0];
    this.count.innerHTML = el.path[0].getAttribute('data-set-comment');
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

    this.arrayComments = dataDoughnut.datasets[0].data;

    new Chart(ctx, {
      type: 'doughnut',
      data: dataDoughnut,
      options: {
        legend: {
          display: false,
        },
        tooltips: {
          enabled: false,
        },
        cutoutPercentage: 90,
      },
    });
  }
}

export default ImpressionsRoom;
