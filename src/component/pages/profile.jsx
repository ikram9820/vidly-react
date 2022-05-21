import React, { Component } from 'react';
 
class Profile extends Component {
    state = {  } 
    render() { 
        return (<React.Fragment>
            <h1>Profile of {this.props.name}</h1>
            <h3>name : {this.props.match.params.name}, profesion: {this.props.match.params.pro}</h3>
        </React.Fragment>);
    }
}
 
export default Profile;