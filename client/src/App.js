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

  componentDidMount () {
  }

  updateUserInfo = (userObject) => {
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

  addSub = (event, subInfo) => {
    event.preventDefault()
    console.log(subInfo)
    API.addSubscription(subInfo)
    .then(response => {
      this.updateUserInfo(response.data);
    })
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
          <Navbar/>
          <Switch>
            <Route exact path="/">
              <SignIn 
                isUserAuth = {this.isUserAuth} 
                updateAuthStatus = {this.updateAuthStatus}
                updateUserInfo = {this.updateUserInfo} />
            </Route> 
            <Route path="/sign-up" component={SignUp} />
            <Route exact path="/main">
              <Main 
                state={this.state}
                addSub={this.addSub}
                removeSub={this.removeSub}
              />
            </Route> 
            <Route exact path="/stats" component={Stats} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
