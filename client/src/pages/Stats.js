import React, { Component } from "react";
// import Chart1 from "../components/GaugeChart";
import Chart2 from "../components/ActiveChart";

function getMonthlyTotal(subArray) {
    let sum = 0;
    if (subArray.length > 0) {
        for (let i = 0; i < subArray.length; i++) {
            if (subArray[i].active) {
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
    }
    return Number(sum.toFixed(2));
}

function initialMonthlyTotal(subArray) {
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
    return Number(sum.toFixed(2));
}

function getYearlyTotal(subArray) {
    let sum = 0;
    if (subArray.length > 0) {
        for (let i = 0; i < subArray.length; i++) {
            if(subArray[i].active) {
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
    }
    console.log("Yearly Sum from fn" + sum)
    return Number(sum.toFixed(2));
}

function initialYearlyTotal(subArray) {
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

function initialIncomeRatio (subArr, income) {
    let total = initialMonthlyTotal(subArr)
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

    handleCheckboxChange(index, event) {
        let tempArr = this.state.statSubscriptions
        if (event) tempArr[index].active = false
        else tempArr[index].active = true
        this.setState({ statSubscriptions: tempArr })
        this.setState({ monthlyTotal: getMonthlyTotal(this.state.statSubscriptions) })
        this.setState({ ratio: incomeRatio(this.state.statSubscriptions, this.props.income)})
    }

    componentWillReceiveProps(incomingProps) {        
        this.setState({ statSubscriptions: setUpSubs(incomingProps.subscriptions) })
        this.setState({ yearlyTotal: initialYearlyTotal(incomingProps.subscriptions) })
        this.setState({ monthlyTotal: initialMonthlyTotal(incomingProps.subscriptions) })
        this.setState({ ratio: initialIncomeRatio(incomingProps.subscriptions, incomingProps.income) })
    }

render() {
    return (
    <div className="container justify-content-center">
        <div className="row">
            <div className = "col-3">
                <h3>Subscriptions</h3>
                <br />
                {this.state.statSubscriptions.map((elem, i) => {
                    return (
                        <div className = "form-check" >
                            <input className = "form-check-input" 
                                    type = "checkbox"
                                    checked = {elem.active}
                                    id = {elem.name}
                                    name = {elem.name}
                                    onClick = {() => this.handleCheckboxChange(i, elem.active) } />
                            <label className = "form-check-label" 
                                    htmlFor = {elem.name} >
                            {elem.name}
                            </label>
                        </div>
                    )
                })}
            </div>
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