var date = new Date();
daytime = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getUTCFullYear();
var xValues = [daytime, daytime, daytime, daytime];
var yValues = [40, 23, 23, 30];

var unit = "°C";
var weatherFactor = "temperature";
const chart = new Chart("weatherChart", {
    type: "line",
    data: {
        labels: xValues,
        datasets: [
            {
                fill: false,
                lineTension: 0,
                backgroundColor: "rgba(0,0,255,10)",
                borderColor: "rgba(0,0,0,2)",
                data: yValues,
            }
        ]
    },
    options: {
        title: {
            display: true,
            position: 'top',
            fontColor: "rgba(0,0,255)",
            text: "Changes in " + weatherFactor,
            fontSize: 25,
        },
        maintainAspectRatio: false,
        responsive: true,
        legend: {display: false},
        tooltips: {
            callbacks: {
                label: function(tooltipItem) {
                    return tooltipItem.yLabel + unit;
                }
            },
        },
        scales: {
            xAxes: [
                {
                    ticks: {
                        fontSize: 15,
                    },
                    scaleLabel: {
                        display: true,
                        labelString: '',
                    },

                    gridLines: { color: "black" },
                }
            ],
            yAxes: [
                {
                    ticks: {
                        min: 20,
                        stepSize: 5, 
                        max: 50,
                        fontSize: 15,
                    },

                    scaleLabel: {
                        display: true,
                        labelString: weatherFactor + `(${unit})`,
                    },

                    gridLines: { color: "black" },
                }
            ],
        }
    },
    plugins: [{
        beforeDraw: function(context) {
           var chartHeight = context.chart.height;
           var chartWidth = context.chart.width;
            if (chartWidth <= 500) {
            context.scales['y-axis-0'].options.ticks.fontSize = chartHeight * 2.25 / 100; 
            context.scales['y-axis-0'].options.scaleLabel.fontSize = chartHeight * 2.5 / 100;
            context.scales['x-axis-0'].options.ticks.fontSize = chartWidth * 4.5 / 100;
            context.scales['x-axis-0'].options.scaleLabel.fontSize = chartWidth * 5.5 / 100;
            } else if (chartWidth > 767 && chartWidth <= 1024) {
            context.scales['y-axis-0'].options.ticks.fontSize = chartHeight * 2.25 / 100; 
            context.scales['y-axis-0'].options.scaleLabel.fontSize = chartHeight * 2.5 / 100;
            context.scales['x-axis-0'].options.ticks.fontSize = chartWidth * 1.75 / 100;
            context.scales['x-axis-0'].options.scaleLabel.fontSize = chartWidth * 2.5 / 100;
           } else if (chartWidth > 1024 && chartWidth <= 1366) {
            context.scales['y-axis-0'].options.ticks.fontSize = chartHeight * 1.25/ 100; 
            context.scales['y-axis-0'].options.scaleLabel.fontSize = chartHeight * 3 / 100;
            context.scales['x-axis-0'].options.ticks.fontSize = chartWidth * 2.5 / 100;
            context.scales['x-axis-0'].options.scaleLabel.fontSize = chartWidth * 2 / 100;
           } else if (chartWidth >= 1366){
            context.scales['y-axis-0'].options.ticks.fontSize = chartHeight * 2.5 / 100; 
            context.scales['y-axis-0'].options.scaleLabel.fontSize = chartHeight * 2.5 / 100;
            context.scales['x-axis-0'].options.ticks.fontSize = chartWidth * 1.25 / 100;
            context.scales['x-axis-0'].options.scaleLabel.fontSize = chartWidth * 1.5 / 100;
            }
        }
    }],
});