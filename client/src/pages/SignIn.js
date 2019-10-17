import React, { Component } from 'react';
import "./SignIn.css";

class SignIn extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
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
              <a href="/sign-in" className="FormTitle__Link  FormTitle__Link--Active">Sign In</a>
              <a href="/" className="FormTitle__Link">Sign Up</a>
            </div>

            <div className="FormCenter">
              <form className="Formfields">

                <div className="FormField">
                  <label className="FormField__Label" htmlFor="username">username</label>
                  <input type="text" id="username" className="FormField__Input" placeholder="enter username" name="username" value={this.state.username} onChange={this.handleChange}/>
                </div>
                
                <div className="FormField">
                  <label className="FormField__Label" htmlFor="password">password</label>
                  <input type="text" id="password" className="FormField__Input" placeholder="enter password" name="password" value={this.state.password} onChange={this.handleChange}/>
                </div>
              </form>
            </div>

            <div className="FormField">
              <button onClick={this.handleSubmit} className="FormField__Button mr-20">Sign In</button> <a href="/" className="FormField__Link">Create Account</a>
            </div>

        </div>
      </div>
    );
  }
}

export default SignIn;

