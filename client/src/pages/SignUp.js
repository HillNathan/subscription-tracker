import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import "./SignIn.css";
const API = require("../utils/API")

class SignUp extends Component {
  constructor(props) {
    super();

    this.state = {
      username: '',
      password: '',
      password2: '',
      firstname: '',
      lastname: '',
      email: '',
      income: '',
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
    console.log(`form submitted with data:`)
    console.log(this.state)
    API.registerUser(this.state)
    .then(response => {
      API.loginUser(this.state)
      .then(response => {
        if (response.status === 200) {
          console.log("login successful")
          this.props.updateAuthStatus(true)
          this.props.updateUserInfo(response.data)
          this.props.history.push("/main");
        }
        if (response.status === 401) {
          console.log("please try again")
        }
      })
      .catch(err => {
        console.log("please try again")
        console.log(err)
      })
    })
    .catch(err => {
      console.log(err)
    })
  }

  render () {
    return (
      <div className="App row">
        <div className="col-sm left-side"></div>
        <div className="col-sm right-side">

          <div className="FormTitle">
            <a href="/" className="FormTitle__Link">Sign In</a><a href="/sign-up" className="FormTitle__Link FormTitle__Link--Active">Sign Up</a>
          </div>

          <div className="FormCenter">
            <form className="Formfields" onChange={this.handleChange}>
          
              <div className="FormField">
                {/* <label className="FormField__Label" htmlFor="username">username</label> */}
                <input type="text" id="username" className="FormField__Input" placeholder="enter username" name="username" value={this.username} />
              </div>

              <div className="FormField">
                {/* <label className="FormField__Label" htmlFor="password">password</label> */}
                <input type="text" id="password" className="FormField__Input" placeholder="enter password" name="password" value={this.password} />
              </div>

              <div className="FormField">
                {/* <label className="FormField__Label" htmlFor="verifyPass">verify password</label> */}
                <input type="text" id="verifyPass" className="FormField__Input" placeholder="re-enter password" name="password2" value={this.verifyPass} />
              </div>

              <div className="FormField">
                {/* <label className="FormField__Label" htmlFor="firstName">first name</label> */}
                <input type="text" id="firstName" className="FormField__Input" placeholder="enter first name" name="firstname" value={this.firstName} />
              </div>

              <div className="FormField">
                {/* <label className="FormField__Label" htmlFor="lastName">last name</label> */}
                <input type="text" id="lastName" className="FormField__Input" placeholder="enter last name" name="lastname" value={this.lastName} />
              </div>

              <div className="FormField">
                {/* <label className="FormField__Label" htmlFor="email">email</label> */}
                <input type="text" id="email" className="FormField__Input" placeholder="enter email" name="email" value={this.email} />
              </div>

              <div className="FormField">
                {/* <label className="FormField__Label" htmlFor="income">income</label> */}
                <input type="text" id="income" className="FormField__Input" placeholder="est. monthly income" name="income" value={this.income} />
              </div>

            </form>
          </div>

          <div className="FormField">
            <button className="FormField__Button mr-20" onClick={this.handleSubmit}>Sign Up</button> <a href="/" className="FormField__Link">I'm already a member</a>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SignUp);

