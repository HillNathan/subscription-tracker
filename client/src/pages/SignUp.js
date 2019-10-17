import React, { Component } from 'react';
import "./SignIn.css";

class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
      verifyPass: '',
      firstName: '',
      lastName: '',
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
  }

  render () {
    return (
      <div className="App">
        <div className="App__Aside"></div>
          <div className="App__Form">

            <div className="FormTitle">
              <a href="/" className="FormTitle__Link">Sign In</a><a href="/sign-up" className="FormTitle__Link FormTitle__Link--Active">Sign Up</a>
            </div>

            <div className="FormCenter">
          <form className="Formfields" onChange={this.handleChange}>
            
            <div className="FormField">
              <label className="FormField__Label" htmlFor="username">username</label>
              <input type="text" id="username" className="FormField__Input" placeholder="enter username" name="username" value={this.username} />
            </div>

            <div className="FormField">
              <label className="FormField__Label" htmlFor="password">password</label>
              <input type="text" id="password" className="FormField__Input" placeholder="enter password" name="password" value={this.password} />
            </div>

            <div className="FormField">
              <label className="FormField__Label" htmlFor="verifyPass">verify password</label>
              <input type="text" id="verifyPass" className="FormField__Input" placeholder="re-enter password" name="verifyPass" value={this.verifyPass} />
            </div>

            <div className="FormField">
              <label className="FormField__Label" htmlFor="firstName">first name</label>
              <input type="text" id="firstName" className="FormField__Input" placeholder="enter first name" name="firstName" value={this.firstName} />
            </div>

            <div className="FormField">
              <label className="FormField__Label" htmlFor="lastName">last name</label>
              <input type="text" id="lastName" className="FormField__Input" placeholder="enter last name" name="lastName" value={this.lastName} />
            </div>

            <div className="FormField">
              <label className="FormField__Label" htmlFor="email">email</label>
              <input type="text" id="email" className="FormField__Input" placeholder="enter email" name="email" value={this.email} />
            </div>

            <div className="FormField">
              <label className="FormField__Label" htmlFor="income">income</label>
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

export default SignUp;

