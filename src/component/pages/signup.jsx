import React, { Component } from "react";
import Joi  from "joi-browser";
import Form from "../common/form";

class Signup extends Form {

  state = {
    data: {
      username: "",
      name: "",
      password: "",
    },
    errors: {},
  };
  
  schema = {
    username: Joi.string().required().email().label("Username"),
    name: Joi.string().required().label("Name"),
    password: Joi.string().min(5).required().label("Password"),
  };

  doSubmit = () => {
    console.log("submitted");
  };

  render() {
    return (
      <React.Fragment>
        <h1>Sign up</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name")}
          {this.renderButton("Signup")}
        </form>
      </React.Fragment>
    );
  }
}

export default Signup;
