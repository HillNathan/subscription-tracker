import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import "./style.css";
import Submarine from "../../components/Submarine"
import PaddingDiv from "../../components/PaddingDiv"

const API = require("../../utils/API")

class SignIn extends Component  {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
      form: ''
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

  }

  render () {
    return (
      <div className = "container">
          <div className = "row justify-content-between">
            <div className = "col-lg-5 col-sm-12">
                <PaddingDiv height={60} />
                <div className = "sub-container">
                    {/* <Logo /> */}
                    <Submarine />
                </div>
            </div>  
            <div className = "col-lg-6 col-sm-12">
            <PaddingDiv height={30} />
                <div className = "form-container">
                    <PaddingDiv height={20} />
                    <form>
                        <div className="mainlinks">
                            <span className = "activepage">Sign-In</span>
                        </div>                        
                        <div className="mainlinks">|</div>
                        <div className="mainlinks">
                            <a href="/alt-signup">Sign-Up</a>
                        </div>
                        <PaddingDiv height={30} />
                        <div className = "form-group">
                            <label htmlFor="formGroupExampleInput">Username</label>
                            <input 
                                type="text" className="form-control" id="username" 
                                placeholder="Username" value={this.state.username} 
                                onChange={this.handleChange} name="username" />
                        </div>
                        <div className = "form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input 
                                type="password" className="form-control" id="password" 
                                placeholder="Password" value={this.state.password} 
                                onChange={this.handleChange} name="password"/>
                        </div>
                        <button className = "buttons" onClick = {this.handleSubmit} >Log In</button>

                    </form>
                    <PaddingDiv height={60} />

                </div>
            </div>
          </div>
      </div>
    );
  }
}

export default withRouter(SignIn);
