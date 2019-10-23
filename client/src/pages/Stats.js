import React, { Component } from "react";
// import Chart1 from "../components/GaugeChart";
import Chart2 from "../components/ActiveChart";

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
    console.log("Monthly Sum from fn" + sum)
    return Number(sum.toFixed(2));
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
    console.log("Yearly Sum from fn" + sum)
    return Number(sum.toFixed(2));
}

function makeDataMonthly(subArr) {
    let result = [];
    let sum = 0;
    if (subArr.length > 0) {
        subArr.forEach(elem => {
            if (elem.active) {
                switch (elem.frequency){
                    case "Monthly":
                        sum = Number((elem.cost).toFixed(2));
                        break;
                    case "Weekly":
                        sum = Number(((elem.cost * 52) / 12).toFixed(2));
                        break;
                    case "Yearly":
                        sum = Number((elem.cost / 12).toFixed(2)) ;
                        break;
                    case "Daily":
                        sum = Number(((elem.cost * 365) /12).toFixed(2));
                        break;
                    default:
                        sum = Number((elem.cost).toFixed(2));
                        break;
                }
                result.push({ name: elem.name, cost: sum });
            }
        })
    }
    return result;
}

function setUpSubs(subArr) {
    let temp = []
    if (subArr.length > 0) {
        subArr.forEach(elem => {
            temp.push({
                name: elem.name,
                cost: elem.cost,
                frequency: elem.frequency,
                active: true
            })
        })
    }
    return temp;
}

function incomeRatio (subArr, income) {
    let total = getMonthlyTotal(subArr)
    let ratio = ((total/income)*100).toFixed(2) + "%"
    return ratio
}

class Stats extends Component {

    state = {
        monthlyTotal: 0,
        yearlyTotal: 0,
        ratio: "",
        statSubscriptions: [],
    }

    componentWillReceiveProps(incomingProps) {
        this.setState({ yearlyTotal: getYearlyTotal(incomingProps.subscriptions) })
        this.setState({ monthlyTotal: getMonthlyTotal(incomingProps.subscriptions) })
        this.setState({ ratio: incomeRatio(incomingProps.subscriptions, incomingProps.income) })
        this.setState({ statSubscriptions: setUpSubs(incomingProps.subscriptions) })
    }

render() {
    return (
    <div className="container justify-content-center">
        <div className="row">
            <div className = "col text-align-center">
                <Chart2 
                data = {makeDataMonthly(this.state.statSubscriptions)} />
                {/* <h3>Monthly Subscription Breakdown</h3> */}
            </div>
            <div className= "col text-align-center text-white">
                <p>You are spending a total of ${this.state.monthlyTotal} per month on subscriptions.</p>
                <p>This accounts for {this.state.ratio} of your monthly budget</p>
            </div>
        </div>        
    </div>
    )}
}

export default Stats