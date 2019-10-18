import React from "react"

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
        <h2>Welcome to the stats page, {props.firstname}.</h2>
        <hr />
        <h3>Your total subscriptions are ${getMonthlyTotal(props.subscriptions)} per month.</h3>
        <hr />
        <h3>Your total subscriptions are ${getYearlyTotal(props.subscriptions)} per year.</h3>

    </div>
    )
}

export default Stats