import React, { Component } from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch,
  Redirect } from "react-router-dom";
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
      if (response.data.result === "no user")
      localStorage.setItem("isAuthenticated", false)
      this.updateUserInfo(response.data)
    })
  }

  updateUserInfo = (userObject) => {
    let authStatus = false
    if (localStorage.getItem("isAuthenticated") === "true") authStatus = true

    this.setState({
      firstname: userObject.firstname,
      lastname: userObject.lastname,
      subscriptions: userObject.subscriptions,
      email: userObject.email,
      income: userObject.income,
      isAuthenticated: authStatus
    })
  }

  userLogin = (userInfo) => {
    API.loginUser(userInfo)
    .then(response => {
      this.updateUserInfo(response.data)
    })
    .catch (err => {
      throw err
    })
  }

  userLogout = (event, callback) => {
    event.preventDefault()
    console.log(this.isUserAuth())
    if (this.isUserAuth) {
      API.logoutUser()
      .then(response => {
        console.log(response)
        this.setState({
          firstname: "",
          lastname: "",
          subscriptions: [],
          email: "",
          income: 0,
          isAuthenticated: false
        })
        localStorage.setItem("isAuthenticated", false)
      })
      .catch(err => {
        throw err
      })
    }
    return callback()
  }

  isUserAuth = () => {
    return this.state.isAuthenticated
  }

  updateAuthStatus = (status) => {
    this.setState ({ isAuthenticated: status })
    localStorage.setItem("isAuthenticated", status)
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
        <div className="container-fluid" style={{ paddingLeft: 0, paddingRight: 0 }}>
          <Navbar
            firstname = {this.state.firstname}
            handleLogout = {this.userLogout} />
        
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
            <ProtectedRoute exact path="/main">
              <Main
                subscriptions={this.state.subscriptions}
                addSub={this.addSub}
                removeSub={this.removeSub}
              />
            </ProtectedRoute>
            <ProtectedRoute exact path="/stats" >
              <Stats
                subscriptions = {this.state.subscriptions} 
                income = {this.state.income} 
                firstname = {this.state.firstname}
                lastname = {this.state.lastname}
                 />
            </ProtectedRoute>
            <Route component={NoMatch} />
          </ Switch>
        </div>
      </ Router>
    );
  }
}

function testAuth() {
  let authStatus = false
  if (localStorage.getItem("isAuthenticated") === "true") authStatus = true
  return authStatus
}

function ProtectedRoute({ children, ...rest }) {
  return (
    <Route 
      {...rest}
      render = {() => 
        testAuth() ? (
        // this.props.isUserAuth() ? (
          children
        ) : (
          <Redirect 
            to = {{ pathname: "/"}} 
          />
      )}
    />      
  )
}


export default App;
