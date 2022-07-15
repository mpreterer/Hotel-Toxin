import '../../js/Chart.min';

class ImpressionsRoom {
  constructor(domParent) {
    this.$container = domParent.querySelector('.js-impressions-room');
    this.$doughnut = this.$container.querySelector('.impressions-room__donut');

    this._init();
  }

  _init() {
    this._createDoughnut();
  }

  _createDoughnut() {
    const ctx = this.$doughnut;
    ctx.height = 120;
    ctx.width = 120;

    const dataDoughnut = {
      labels: ['Удовлетворительно', 'Хорошо', 'Великолепно', 'Разочарован'],
      datasets: [
        {
          backgroundColor: ['#93A3FA', '#69D1CF', '#FFCA9C', '#3D4975'],
          data: [65, 65, 130, 0],
        },
      ],
    };

    const chart = new Chart(ctx, {
      type: 'doughnut',
      data: dataDoughnut,
      options: {
        legend: {
          display: false,
        },
        tooltips: {
          bodyFontSize: 10,
          displayColors: false,
        },
        cutoutPercentage: 90,
      },
    });
}
}

export default ImpressionsRoom;
