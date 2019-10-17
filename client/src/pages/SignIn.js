import React, { Component } from 'react';
import "./SignIn.css";

class SignIn extends Component {
  render () {
    return (
      <div className="App">
        <div className="App__Aside"></div>
          <div className="App__Form">

            <div className="FormTitle">
              <a href="/sign-in" className="FormTitle__Link  FormTitle__Link--Active">Sign In</a>
              <a href="/" className="FormTitle__Link">Sign Up</a>
            </div>
            <div className="FormCenter">
          <form className="Formfields" onSubmit={this.handleSubmit}>
            <div className="FormField">
              <label className="FormField__Label" htmlFor="name">username</label>
              <input type="text" id="name" className="FormField__Input" placeholder="enter username" name="name" />
            </div>
          </form>
        </div>

        <div className="FormCenter">
          <form className="Formfields" onSubmit={this.handleSubmit}>
            <div className="FormField">
              <label className="FormField__Label" htmlFor="name">password</label>
              <input type="text" id="password" className="FormField__Input" placeholder="enter password" name="name" />
            </div>
          </form>
        </div>

        <div className="FormField">
          <button className="FormField__Button mr-20">Sign In</button> <a href="/" className="FormField__Link">Create Account</a>
          </div>

        </div>
      </div>
    );
  }
}

export default SignIn;

