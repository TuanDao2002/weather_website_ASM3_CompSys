var date = new Date();
daytime = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getUTCFullYear();
var xValues = [daytime, daytime, daytime, daytime];
var yValues = [80,86,100, 80];

var unit = "°C";
const chart = new Chart("weatherChart", {
    type: "line",
    data: {
        labels: xValues,
        datasets: [
            {
                fill: false,
                lineTension: 0,
                backgroundColor: "rgba(255,0,0,10)",
                borderColor: "rgba(255,0,0,0.4)",
                data: yValues,
            }
        ]
    },
    options: {
        title: {
            display: true,
            position: 'bottom',
            // fontSize: 35,
            fontColor: "rgba(255,0,0)",
            text: "",
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
                        // fontSize: 15,
                    },
                }
            ],
            yAxes: [
                {
                    ticks: {
                        min: 70,
                        stepSize: 5, 
                        max: 100,
                        // fontSize: 15,
                    },

                    scaleLabel: {
                        display: true,
                        labelString: unit,
                        // fontSize: 15,
                    },
                }
            ],
        }
    },
    // plugins: [{
    //     beforeDraw: function(context) {
    //        var chartHeight = context.chart.height;
    //        var chartWidth = context.chart.width;
    //        if (chartWidth >= 1366){
    //        context.scales['y-axis-0'].options.ticks.fontSize = chartHeight * 2.5 / 100; 
    //        context.scales['y-axis-0'].options.scaleLabel.fontSize = chartHeight * 2.5 / 100;
    //        context.scales['x-axis-0'].options.ticks.fontSize = chartWidth * 1.25 / 100;
    //        context.scales['x-axis-0'].options.scaleLabel.fontSize = chartWidth * 1.5 / 100;
    //        } else if (chartWidth <= 500) {
    //         context.scales['y-axis-0'].options.ticks.fontSize = chartHeight * 2.5 / 100; 
    //         context.scales['y-axis-0'].options.scaleLabel.fontSize = chartHeight * 3.5 / 100;
    //         context.scales['x-axis-0'].options.ticks.fontSize = chartWidth * 4 / 100;
    //         context.scales['x-axis-0'].options.scaleLabel.fontSize = chartWidth * 5.5 / 100;
    //         } else if (chartWidth > 767 && chartWidth <= 1024) {
    //         context.scales['y-axis-0'].options.ticks.fontSize = chartHeight * 2 / 100; 
    //         context.scales['y-axis-0'].options.scaleLabel.fontSize = chartHeight * 2.5 / 100;
    //         context.scales['x-axis-0'].options.ticks.fontSize = chartWidth * 3 / 100;
    //         context.scales['x-axis-0'].options.scaleLabel.fontSize = chartWidth * 2.5 / 100;
    //        } else if (chartWidth > 1024 && chartWidth <= 1366) {
    //         context.scales['y-axis-0'].options.ticks.fontSize = chartHeight * 1.25/ 100; 
    //         context.scales['y-axis-0'].options.scaleLabel.fontSize = chartHeight * 3 / 100;
    //         context.scales['x-axis-0'].options.ticks.fontSize = chartWidth * 2.5 / 100;
    //         context.scales['x-axis-0'].options.scaleLabel.fontSize = chartWidth * 2 / 100;
    //        }  
    //     }
    // }],
});