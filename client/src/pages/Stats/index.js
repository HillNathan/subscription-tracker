import React, { Component } from "react";
import Chart2 from "../../components/ActiveChart";
import Chart1 from "../../components/GaugeChart";
import PageHeader from "../../components/PageHeader";
import Logo from "../../components/Logo";
import "./style.css";

function getMonthlyTotal(subArray) {
  let sum = 0;
  if (subArray.length > 0) {
    for (let i = 0; i < subArray.length; i++) {
      if (subArray[i].active) {
        switch (subArray[i].frequency) {
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
            sum += (subArray[i].cost * 365) / 12;
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
      switch (subArray[i].frequency) {
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
          sum += (subArray[i].cost * 365) / 12;
          break;
        default:
          sum += subArray[i].cost;
          break;
      }
    }
  }
  return Number(sum.toFixed(2));
}

function initialYearlyTotal(subArray) {
  let sum = 0;
  if (subArray.length > 0) {
    for (let i = 0; i < subArray.length; i++) {
      switch (subArray[i].frequency) {
        case "Yearly":
          sum += subArray[i].cost;
          break;
        case "Weekly":
          sum += subArray[i].cost * 52;
          break;
        case "Monthly":
          sum += subArray[i].cost * 12;
          break;
        case "Daily":
          sum += subArray[i].cost * 365;
          break;
        default:
          sum += subArray[i].cost;
          break;
      }
    }
  }
  return Number(sum.toFixed(2));
}

function makeDataMonthly(subArr) {
  let result = [];
  let sum = 0;
  if (subArr.length > 0) {
    subArr.forEach(elem => {
      if (elem.active) {
        switch (elem.frequency) {
          case "Monthly":
            sum = Number(elem.cost.toFixed(2));
            break;
          case "Weekly":
            sum = Number(((elem.cost * 52) / 12).toFixed(2));
            break;
          case "Yearly":
            sum = Number((elem.cost / 12).toFixed(2));
            break;
          case "Daily":
            sum = Number(((elem.cost * 365) / 12).toFixed(2));
            break;
          default:
            sum = Number(elem.cost.toFixed(2));
            break;
        }
        result.push({ name: elem.name, cost: sum });
      }
    });
  }
  return result;
}

function makeDataYearly(subArr) {
  let result = [];
  let sum = 0;
  if (subArr.length > 0) {
    subArr.forEach(elem => {
      if (elem.active) {
        switch (elem.frequency) {
          case "Monthly":
            sum = Number((elem.cost * 12).toFixed(2));
            break;
          case "Weekly":
            sum = Number((elem.cost * 52).toFixed(2));
            break;
          case "Yearly":
            sum = Number(elem.cost.toFixed(2));
            break;
          case "Daily":
            sum = Number((elem.cost * 365).toFixed(2));
            break;
          default:
            sum = Number(elem.cost.toFixed(2));
            break;
        }
        result.push({ name: elem.name, cost: sum });
      }
    });
  }
  return result;
}

function setUpSubs(subArr) {
  let temp = [];
  if (subArr.length > 0) {
    subArr.forEach(elem => {
      temp.push({
        name: elem.name,
        cost: elem.cost,
        frequency: elem.frequency,
        active: true
      });
    });
  }
  return temp;
}

function incomeRatio(subArr, income) {
  let total = getMonthlyTotal(subArr);
  let ratio = ((total / income) * 100).toFixed(2) + "%";
  return ratio;
}

function initialIncomeRatio(subArr, income) {
  let total = initialMonthlyTotal(subArr);
  let ratio = ((total / income) * 100).toFixed(2) + "%";
  return ratio;
}

class Stats extends Component {
  state = {
    monthlyTotal: 0,
    yearlyTotal: 0,
    ratio: "",
    statSubscriptions: [],
    toggleMonthly: true,
    windowWidth: 0,
    dimensions: {
      width: 800,
      height: 400,
      cx: 400,
      cy: 300,
      innerRadius: 140,
      outerRadius: 220
    }
  };

  handleCheckboxChange(index, event) {
    let tempArr = this.state.statSubscriptions;
    if (event) tempArr[index].active = false;
    else tempArr[index].active = true;
    this.setState({ statSubscriptions: tempArr });
    this.setState({
      monthlyTotal: getMonthlyTotal(this.state.statSubscriptions)
    });
    this.setState({
      ratio: incomeRatio(this.state.statSubscriptions, this.props.income)
    });
  }

  handleToggle(toggle) {
    this.setState({ toggleMonthly: toggle });
  }

  componentDidMount() {
    this.setState({
      statSubscriptions: setUpSubs(this.props.subscriptions)
    });
    this.setState({
      yearlyTotal: initialYearlyTotal(this.props.subscriptions)
    });
    this.setState({
      monthlyTotal: initialMonthlyTotal(this.props.subscriptions)
    });
    this.setState({
      ratio: initialIncomeRatio(
        this.props.subscriptions,
        this.props.income
      )
    });
    // =================================
    this.updateWindowSize();
    window.addEventListener("resize", this.updateWindowSize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowSize)
  }

  updateWindowSize = () => {
    this.setState({ windowWidth: window.innerWidth })

    if (window.innerWidth < 993) {
      this.setState({
        dimensions: {
          width: 600,
          height: 300,
          cx: 300,
          cy: 250,
          innerRadius: 85,
          outerRadius: 135
        }
      })
    } else {
      this.setState({
        dimensions: {
          width: 800,
          height: 400,
          cx: 400,
          cy: 300,
          innerRadius: 140,
          outerRadius: 220
        }
      })
    }
  }

  render() {
    return (
      <div className="container justify-content-center">
        <Logo />
        <PageHeader headerText="Statistics" />
        <div className="row mobile-margin">
          <div className="col-xl-3 col-lg-12 group">
            <h3 className="group-header">Your Subscriptions</h3>
            {this.state.statSubscriptions.map((elem, i) => {
              return (
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={elem.active}
                    id={elem.name}
                    name={elem.name}
                    onClick={() => this.handleCheckboxChange(i, elem.active)}
                  />
                  <label className="form-check-label" htmlFor={elem.name}>
                    {elem.name}, (${elem.cost})
                  </label>
                </div>
              );
            })}
          </div>
          <div
            className="col text-align-center group"
            id="guage-chart"
          >
            {this.state.windowWidth > 766 ? (
              <h3 className="group-header">
                Subscription Percent Adjusted to
                {this.state.toggleMonthly ? " Monthly" : " Yearly"}
              </h3>
            ) : (
              <h3 className="group-header"> Subscription Percent </h3>
            )}
            {this.state.windowWidth > 766 ? (
              <Chart2
                data={
                  this.state.toggleMonthly
                    ? makeDataMonthly(this.state.statSubscriptions)
                    : makeDataYearly(this.state.statSubscriptions)
                }
                dimensions={this.state.dimensions}
              />
            ) : (
              <Chart1
                data={
                  this.state.toggleMonthly
                    ? makeDataMonthly(this.state.statSubscriptions)
                    : makeDataYearly(this.state.statSubscriptions)
                }
              />
            )}
            {this.state.windowWidth > 766 ? (
              <div className="toggleGroup">
                <span
                  className={
                    this.state.toggleMonthly ? "toggleOn" : "toggleOff"
                  }
                  onClick={() => this.handleToggle(true)}
                >
                  Monthly
                </span>{" "}
                |
                <span
                  className={
                    this.state.toggleMonthly ? "toggleOff" : "toggleOn"
                  }
                  onClick={() => this.handleToggle(false)}
                >
                  Yearly
                </span>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
        <div className="row mobile-margin">
          <div className="col text-align-center group text">
            <p className="group-text">
              You are spending a total of ${this.state.monthlyTotal} per month
              on subscriptions.
            </p>
            <p className="group-text">
              This accounts for {this.state.ratio} of your monthly budget.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Stats;
