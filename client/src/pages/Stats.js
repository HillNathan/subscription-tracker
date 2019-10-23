import React from "react";
// import Chart1 from "../components/GaugeChart";
import Chart2 from "../components/ActiveChart";

// function getMonthlyTotal(subArray) {
//     let sum = 0;
//     if (subArray.length > 0) {
//         for (let i = 0; i < subArray.length; i++) {
//             switch (subArray[i].frequency){
//                 case "Monthly":
//                    sum += subArray[i].cost;
//                    break;
//                 case "Weekly":
//                     sum += (subArray[i].cost * 52) / 12;
//                     break;
//                 case "Yearly":
//                     sum += subArray[i].cost / 12;
//                     break;
//                 case "Daily":
//                     sum += (subArray[i].cost * 365) /12;
//                     break;
//                 default:
//                     sum += subArray[i].cost;
//                     break;
//             }    
//         }
//     }
//     return sum.toFixed(2);
// }

// function getYearlyTotal(subArray) {
//     let sum = 0;
//     if (subArray.length > 0) {
//         for (let i = 0; i < subArray.length; i++) {
//             switch (subArray[i].frequency){
//                 case "Yearly":
//                    sum += subArray[i].cost;
//                    break;
//                 case "Weekly":
//                     sum += (subArray[i].cost * 52);
//                     break;
//                 case "Monthly":
//                     sum += subArray[i].cost * 12;
//                     break;
//                 case "Daily":
//                     sum += (subArray[i].cost * 365);
//                     break;
//                 default:
//                     sum += subArray[i].cost;
//                     break;
//             }    
//         }
//     }
//     return sum.toFixed(2);
// }

function makeDataMonthly(subArr) {
    let result = [];
    let sum = 0;
    if (subArr.length > 0) {
        subArr.forEach(elem => {
            switch (elem.frequency){
                case "Monthly":
                   sum = Number((elem.cost).toFixed(2));
                //    sum = elem.cost
                   break;
                case "Weekly":
                    sum = Number(((elem.cost * 52) / 12).toFixed(2));
                    // sum = ((elem.cost * 52) / 12); 
                    break;
                case "Yearly":
                    sum = Number((elem.cost / 12).toFixed(2)) ;
                    // sum = (elem.cost / 12)
                    break;
                case "Daily":
                    sum = Number(((elem.cost * 365) /12).toFixed(2));
                    // sum = ((elem.cost * 365 ) / 12)
                    break;
                default:
                    sum = Number((elem.cost).toFixed(2));
                    break;
            }    
            result.push({ name: elem.name, cost: sum });
        })
    }
    return result;
}

function monthlySum (subArr) {
    let array = makeDataMonthly(subArr)
    let total = 0
    for (var i = 0; i < array.length;i++){
        total += array[i].cost
    }
    console.log(total)
    return Number(total.toFixed(2))
}

function incomeRatio (subArr, income) {
    let total = monthlySum(subArr)
    let ratio = ((total/income)*100).toFixed(2) + "%"
    console.log(ratio)
    return ratio
}

function Stats (props) {
    return (
    <div className="container justify-content-center">

        <div className="row">
            <div className = "col text-align-center">
                <Chart2 
                data = {makeDataMonthly(props.subscriptions)} />
                {/* <h3>Monthly Subscription Breakdown</h3> */}
            </div>
        </div>
        <div 
            something = {incomeRatio(props.subscriptions, props.income)} >
        </div>
        
    </div>
    )
}

export default Stats