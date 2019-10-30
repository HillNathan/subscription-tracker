import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Main from "./pages/Subscription";
import Stats from "./pages/Stats";
import NoMatch from "./pages/NoMatch";
import Navbar from "./components/Navbar";
import SignUp from './pages/Sign-Up';
import SignIn from './pages/Sign-In';
import Alert from "./components/ModalAlert"
import Confirm from "./components/ModalConfirm"

import './App.css';
const API = require("./utils/API");

class App extends Component {
  state = {
    isAuthenticated: false,
    subscriptions: [],
    firstname: "",
    lastname: "",
    email: "",
    income: 0,
    isShowingModal: false,
    modalHeader: "",
    modalMessage: "",
    button: "",
    isShowingConfirm: false,
    subToDelete: "",
  };

  componentDidMount() {
    API.getUser().then(response => {
      if (response.data.result === "no user")
        localStorage.setItem("isAuthenticated", false);
      this.updateUserInfo(response.data);
    });
  }

  updateUserInfo = userObject => {
    let authStatus = false;
    if (localStorage.getItem("isAuthenticated") === "true") authStatus = true;

    this.setState({
      firstname: userObject.firstname,
      lastname: userObject.lastname,
      subscriptions: userObject.subscriptions,
      email: userObject.email,
      income: userObject.income,
      isAuthenticated: authStatus
    });
  };

  userLogin = userInfo => {
    API.loginUser(userInfo)
      .then(response => {
        this.updateUserInfo(response.data);
        console.log(response.data)
      })
      .catch(err => {
        throw err;
      });
  };

  userLogout = (event, callback) => {
    event.preventDefault();
    if (this.isUserAuth) {
      API.logoutUser()
        .then(response => {
          this.setState({
            firstname: "",
            lastname: "",
            subscriptions: [],
            email: "",
            income: 0,
            isAuthenticated: false
          });
          localStorage.setItem("isAuthenticated", false);
        })
        .catch(err => {
          throw err;
        });
    }
    return callback();
  };

  resetConfirm = () => {
    this.setState({ modalConfirm: false })
  }

  isUserAuth = () => {
    return this.state.isAuthenticated;
  };

  handleModalClose = () => {
    this.setState({ isShowingModal: false });
  };

  handleConfirmClose = () => {
    this.setState({ isShowingConfirm: false })
  }

  triggerModal = (header, message, button) => {
    this.setState({ isShowingModal: true });
    this.setState({ modalHeader: header });
    this.setState({ modalMessage: message });
    this.setState({ button });
  }

  triggerDelete = (subName, subId) => {
    this.setState({ isShowingConfirm: true });
    this.setState({ modalHeader: "Confirm Delete" });
    this.setState({ modalMessage: "Please confirm you would like to delete " + subName });
    this.setState({ subToDelete: subId })
  }

  updateAuthStatus = status => {
    this.setState({ isAuthenticated: status });
    localStorage.setItem("isAuthenticated", status);
  };

  addSub = (event, cb, subInfo) => {
    event.preventDefault();
    if (subInfo.name && subInfo.cost) {
      API.addSubscription(subInfo).then(response => {
        this.updateUserInfo(response.data);
      });
      return cb();
    }
    else {
      this.triggerModal("Alert:","Please fill in all fields to submit","Close")
    }
  };

  removeSub = (subId) => {
    this.setState({ isShowingConfirm: false })
    API.deleteSubscription({ id: subId })
      .then(response => {
        this.updateUserInfo(response.data)
      })
  }

  render() {
    return (
      <Router>
        <div className="background-div">
          <img className="background-div-image"
            src="/images/underwater-802092_1920.jpg" alt="underwater"/>
        </div>
        <div className="container-fluid" style={{ paddingLeft: 0, paddingRight: 0 }}>
          {/* <Navbar /> */}
          <Switch>
            <Route exact path="/"
              render={(props) => <SignIn {...props}
                triggerAlert={this.triggerModal}
                isUserAuth={this.isUserAuth}
                updateAuthStatus={this.updateAuthStatus}
                updateUserInfo={this.updateUserInfo} />}
            />
            <Route exact path="/sign-up"
              render={(props) => <SignUp {...props}
                triggerAlert={this.triggerModal}
                updateAuthStatus={this.updateAuthStatus}
                updateUserInfo={this.updateUserInfo}
                sendAlert={this.triggerModal} />}
            />
            <ProtectedRoute exact path="/main">
              <Navbar
                handleLogout={this.userLogout}
                page="main" />
              <Main
                subscriptions={this.state.subscriptions}
                addSub={this.addSub}
                removeSub={this.triggerDelete}
              />
            </ProtectedRoute>
            <ProtectedRoute exact path="/stats">
              <Navbar
                handleLogout={this.userLogout}
                page="stats" />
              <Stats
                windowWidth={this.state.windowWidth}
                chartDimensions={this.state.chart}
                subscriptions={this.state.subscriptions}
                income={this.state.income}
                firstname={this.state.firstname}
                lastname={this.state.lastname}
              />
            </ProtectedRoute>
            <Route component={NoMatch} />
          </Switch>
        </div>
        <Alert
          handleAlertClose={this.handleModalClose}
          showMe={this.state.isShowingModal}
          header={this.state.modalHeader}
          message={this.state.modalMessage}
          button={this.state.button} />
        <Confirm
          handleClose={this.handleConfirmClose}
          showMe={this.state.isShowingConfirm}
          header={this.state.modalHeader}
          message={this.state.modalMessage}
          actionIfTrue={this.removeSub}
          subToDelete={this.state.subToDelete} />
      </ Router>
    );
  }
}

function testAuth() {
  let authStatus = false;
  if (localStorage.getItem("isAuthenticated") === "true") authStatus = true;
  return authStatus;
}

function ProtectedRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={() =>
        testAuth() ? (
          // this.props.isUserAuth() ? (
          children
        ) : (
            <Redirect to={{ pathname: "/" }} />
          )
      }
    />
  );
}

export default App;
