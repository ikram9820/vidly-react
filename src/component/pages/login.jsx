import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "../common/form";
class Login extends Form {
  state = {
    data: {
      username: "",
      password: "",
    },
    errors: {},
  };
  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = () => {
    console.log("submitted");
  };

  render() {
    
    return (
      <React.Fragment>
        <h1>login</h1>
        <form onSubmit={this.handleSubmit}>
         {this.renderInput("username","Username")}
         {this.renderInput("password","Password",'password')}
         
          {this.renderButton("Login")}
        </form>
      </React.Fragment>
    );
  }
}

export default Login;
