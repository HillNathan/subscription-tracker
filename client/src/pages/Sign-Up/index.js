import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./style.css";
import SignInLogo from "../../components/SignInLogo";
import PaddingDiv from "../../components/PaddingDiv";

const API = require("../../utils/API");

class SignIn extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
      password2: "",
      firstname: "",
      lastname: "",
      email: "",
      income: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    API.loginUser(this.state)
      .then(response => {
        if (response.status === 200) {
          console.log("login successful");
          this.props.updateAuthStatus(true);
          this.props.updateUserInfo(response.data);
          this.props.history.push("/main");
        }
        if (response.status === 401) {
          console.log("please try again");
        }
      })
      .catch(err => {
        console.log("please try again");
        console.log(err);
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-5 col-sm-12">
            <PaddingDiv height={60} />
            <div className="sub-container">
              <SignInLogo />
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <PaddingDiv height={30} />
            <div className="form-container">
              <PaddingDiv height={20} />
              <form>
                <div className="mainlinks">
                  <a href="/">Sign-In</a>
                </div>
                <div className="mainlinks">|</div>
                <div className="mainlinks">
                  <span className="activepage">Sign-Up</span>
                </div>
                <PaddingDiv height={30} />
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Username"
                    value={this.state.username}
                    onChange={this.handleChange}
                    name="username"
                  />
                </div>
                <div className="form-group">
                  <div className="row">
                    <div className="col">
                      <label htmlFor="Password">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        name="password"
                      />
                    </div>
                    <div className="col">
                      <label htmlFor="verifyPassword">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="password2"
                        placeholder="Verify Password"
                        value={this.state.password2}
                        onChange={this.handleChange}
                        name="password2"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="row">
                    <div className="col">
                      <label htmlFor="FirstName">First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="firstname"
                        placeholder="First Name"
                        value={this.state.firstname}
                        onChange={this.handleChange}
                        name="firstname"
                      />
                    </div>
                    <div className="col">
                      <label htmlFor="LastName">Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="lastname"
                        placeholder="Last Name"
                        value={this.state.lastname}
                        onChange={this.handleChange}
                        name="lastname"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="EmailAddress">Email Address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    placeholder="Email Address"
                    value={this.state.email}
                    onChange={this.handleChange}
                    name="email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="Income">Estimated Monthly Income</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Monthly Income"
                    value={this.state.income}
                    onChange={this.handleChange}
                    name="income"
                  />
                </div>

                <button className="buttons" onClick={this.handleSubmit}>
                  Sign Up
                </button>
              </form>
              <PaddingDiv height={20} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SignIn);
