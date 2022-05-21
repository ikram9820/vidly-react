import React, { Component } from 'react';
import Login from './login';
import Signup from './signup';
class Register extends Component {
    state = { login : true } 
    render() { 
        const {login} =this.state;
        return (<React.Fragment>
            {login ? <Login /> : <Signup />}
            <a className="link link-primary" onClick={() => this.setState({login : !login})}> {login ? "don't have an account? signup" : "hava an account? login"  }</a>
        </React.Fragment>);
    }
}
 
export default Register;