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
  }

  isUserAuth = () => {
    return this.state.isAuthenticated
  }

  updateAuthStatus = (status) => {
    this.setState ({ isAuthenticated: status })
    localStorage.setItem("isAuthenticated", status)
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
            <ProtectedRoute exact path = "/testauth">
              <AuthPage />
            </ProtectedRoute>
            <Route component={NoMatch} />
          </ Switch>
        </div>
      </ Router>
    );
  }
}

function fakeAuth() {
  let authStatus = false
  if (localStorage.getItem("isAuthenticated") === "true") authStatus = true
  return authStatus
}

function AuthPage () {
  return (
    <div>
      <h2>You have been authorized to see this page. </h2>
    </div>
  )
}

function ProtectedComponent(props) {
  return (
    <div>{props.children}</div>  
  )
}

function ProtectedRoute({ children, ...rest }, props) {
  console.log(props)
  return (
    <Route 
      {...rest}
      render = {() => 
        fakeAuth() ? (
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
