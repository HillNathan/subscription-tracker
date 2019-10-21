import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import "./style.css";
import Submarine from "../../components/Submarine"
const API = require("../../utils/API")

class SignIn extends Component  {
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
                <div className = "padding-div"></div>
                <div className = "sub-container">
                    <Submarine />
                </div>
            </div>  
            <div className = "col-lg-5 col-sm-12">
                <div className = "form-container">
                    <form>
                        <div className = "form-group">
                            <h2>Sign-in or Sign Up Placeholder div.</h2>
                        </div>


                    </form>
                </div>
            </div>
          </div>
      </div>
    );
  }
}

export default withRouter(SignIn);

