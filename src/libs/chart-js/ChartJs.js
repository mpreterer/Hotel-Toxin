import Chart from 'chart.js';

class ChartsJs {
  constructor(params) {
    this.container = params.body;
    this.dataDoughnut = params.data;

    this._init();
  }

  _init() {
    this.doughnut = new Chart(this.container, {
      type: 'doughnut',
      data: this.dataDoughnut,
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

export default ChartsJs;
