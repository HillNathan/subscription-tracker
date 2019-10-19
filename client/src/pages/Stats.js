import React from "react"
var Chart = require("chart.js");

function testChart () {
    var ctx = document.getElementById('myChart');
    var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
}

function getMonthlyTotal(subArray) {
    let sum = 0;
    if (subArray.length > 0) {
        for (let i = 0; i < subArray.length; i++) {
            switch (subArray[i].frequency){
                case "Monthly":
                   sum += subArray[i].cost;
                   break;
                case "Weekly":
                    sum += (subArray[i].cost * 52) / 12;
                    break;
                case "Yearly":
                    sum += subArray[i].cost / 12;
                    break;
                case "Daily":
                    sum += (subArray[i].cost * 365) /12;
                    break;
                default:
                    sum += subArray[i].cost;
                    break;
            }    
        }
    }
    return sum.toFixed(2);
}

function getYearlyTotal(subArray) {
    let sum = 0;
    if (subArray.length > 0) {
        for (let i = 0; i < subArray.length; i++) {
            switch (subArray[i].frequency){
                case "Yearly":
                   sum += subArray[i].cost;
                   break;
                case "Weekly":
                    sum += (subArray[i].cost * 52);
                    break;
                case "Monthly":
                    sum += subArray[i].cost * 12;
                    break;
                case "Daily":
                    sum += (subArray[i].cost * 365);
                    break;
                default:
                    sum += subArray[i].cost;
                    break;
            }    
        }
    }
    return sum.toFixed(2);
}

function Stats (props) {
    return (
    <div>
        <canvas id="myChart" style={{width: "400", height: "400"}}></canvas>
        <script>{testChart}</script>
    </div>
    )
}

export default Stats