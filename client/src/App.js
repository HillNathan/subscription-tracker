import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main"
import Stats from "./pages/Stats"
import NoMatch from "./pages/NoMatch"
import './App.css';
import Navbar from "./components/Navbar";
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
const API = require("./utils/API");

class App extends Component {
  state = {
    isAuthenticated: false,
    subscriptions: [],
    firstname: "",
    lastname: "",
    email: "",
    income: 0
  };

  componentDidMount() {
    API.getUser()
    .then(response => {
      this.updateUserInfo(response.data)
    })
  }

  updateUserInfo = (userObject) => {
    // console.log("update user info called: ")
    // console.log("================================")
    // console.log(this.state)
    this.setState({
      firstname: userObject.firstname,
      lastname: userObject.lastname,
      subscriptions: userObject.subscriptions,
      email: userObject.email,
      income: userObject.income 
    })
  }

  userLogin = (userInfo) => {
    API.loginUser(userInfo)
    .then(response => {
      this.updateUserInfo(response.data)
    })
  }

  isUserAuth = () => {
    return this.state.isAuthenticated
  }

  updateAuthStatus = (status) => {
    this.setState ({ isAuthenticated: status })
  }

  addSub = (event, cb, subInfo) => {
    event.preventDefault()
    console.log(subInfo)
    API.addSubscription(subInfo)
    .then(response => {
      this.updateUserInfo(response.data);
    })
    return cb()
  }

  removeSub = (subId) => {
    console.log(subId);
    API.deleteSubscription({ id: subId })
    .then(response => {
      this.updateUserInfo(response.data)
    })
  }

  render() {
    return (
      <Router>
        <div className="Main-App">
          <Navbar
            firstname = {this.state.firstname} />
          <Switch>
            <Route exact path="/"
              render={(props) => <SignIn {...props}
                isUserAuth = {this.isUserAuth} 
                updateAuthStatus = {this.updateAuthStatus}
                updateUserInfo = {this.updateUserInfo} /> }
            /> 
            <Route exact path="/sign-up" 
              render = {(props) => <SignUp {...props}
                updateAuthStatus = {this.updateAuthStatus}
                updateUserInfo = {this.updateUserInfo} /> }
            />
            <Route exact path="/main"
              render={(props) => <Main {...props}
                subscriptions={this.state.subscriptions}
                addSub={this.addSub}
                removeSub={this.removeSub}
              />}
            /> 
            <Route exact path="/stats" 
              render={(props) => <Stats {...props}
                subscriptions = {this.state.subscriptions} 
                income = {this.state.income} 
                firstname = {this.state.firstname}
                lastname = {this.state.lastname}
                 />}
            />
            <Route component={NoMatch} />
          </ Switch>
        </div>
      </ Router>
    );
  }
}

export default App;
