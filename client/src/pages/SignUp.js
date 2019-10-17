import React, { Component } from 'react';
import "./SignIn.css";

class SignUp extends Component {
  render () {
    return (
      <div className="App">
        <div className="App__Aside"></div>
          <div className="App__Form">
            {/* <div className="PageSwitcher">
              <a href="#" className="PageSwitcher__Item">Sign In</a>
              <a href="#" className="PageSwitcher__Item PageSwitcher__Item--Active">Sign Up</a>
            </div> */}

            <div className="FormTitle">
              <a href="/sign-in" className="FormTitle__Link">Sign In</a><a href="/" className="FormTitle__Link FormTitle__Link--Active">Sign Up</a>
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

        <div className="FormCenter">
          <form className="Formfields" onSubmit={this.handleSubmit}>
            <div className="FormField">
              <label className="FormField__Label" htmlFor="name">verify password</label>
              <input type="text" id="verify-password" className="FormField__Input" placeholder="re-enter password" name="name" />
            </div>
          </form>
        </div>

        <div className="FormCenter">
          <form className="Formfields" onSubmit={this.handleSubmit}>
            <div className="FormField">
              <label className="FormField__Label" htmlFor="name">first name</label>
              <input type="text" id="first-name" className="FormField__Input" placeholder="enter first name" name="name" />
            </div>
          </form>
        </div>

        <div className="FormCenter">
          <form className="Formfields" onSubmit={this.handleSubmit}>
            <div className="FormField">
              <label className="FormField__Label" htmlFor="name">last name</label>
              <input type="text" id="last-name" className="FormField__Input" placeholder="enter last name" name="name" />
            </div>
          </form>
        </div>

        <div className="FormCenter">
          <form className="Formfields" onSubmit={this.handleSubmit}>
            <div className="FormField">
              <label className="FormField__Label" htmlFor="name">email</label>
              <input type="text" id="email" className="FormField__Input" placeholder="enter email" name="name" />
            </div>
          </form>
        </div>

        <div className="FormCenter">
          <form className="Formfields" onSubmit={this.handleSubmit}>
            <div className="FormField">
              <label className="FormField__Label" htmlFor="name">income</label>
              <input type="text" id="name" className="FormField__Input" placeholder="est. monthly income" name="name" />
            </div>
          </form>
        </div>
        <div className="FormField">
          <button className="FormField__Button mr-20">Sign Up</button> <a href="/sign-in" className="FormField__Link">I'm already a member</a>
        </div>
        </div>
      </div>
    );
  }
}

export default SignUp;

