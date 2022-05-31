import '../../js/Chart.min.js'

class Doughnut {
    constructor(domParent) {
        this.$container = domParent;
        this.$doughnut = this.$container.querySelector('.impressions-room__donut');

        this._init();
    }

    _init() {
        this._create_doughnut();
    }

    _create_doughnut() {
        const ctx = this.$doughnut;
        ctx.height = 120;
        ctx.width = 120;

        const dataDoughnut = {
            labels: ['Удовлетворительно','Хорошо','Великолепно', 'Разочарован'],
            datasets: [
                {
                    backgroundColor: ['#93A3FA','#69D1CF','#FFCA9C', '#3D4975'],
                    data: [260, 260, 520, 0],
                }
            ]
        }
    
        const chart = new Chart(ctx, {
            type: 'doughnut',   
            data: dataDoughnut,
            options: {
                legend: {
                    display: false,
                    font: {
                        size: 20
                    },
                },
               
                cutoutPercentage: 90,
            },
        });
    }
}

export default Doughnut