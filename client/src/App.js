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
    subscriptions: [],
    firstname: "",
    lastname: "",
    email: "",
    income: 0
  };

  componentDidMount () {
    
  }

  updateUserInfo = (userObject) => {
    this.setstate(userObject)
  }

  userLogin = (userInfo) => {
    API.loginUser(userInfo)
    .then(response => {
      this.updateUserInfo(response)
    })
  }


  render() {
    return (
      <Router>
        <div className="Main-App">
          <Navbar/>
          <Switch>
            <Route exact path="/" component={SignUp} />
            <Route path="/sign-in" component={SignIn} />
            <Route exact path="/main" component={Main} />
            <Route exact path="/stats" component={Stats} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
