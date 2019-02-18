import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { signupUser } from '../actions';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: '',
      email: '',
      password: '',
      password_confirmation: ''
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value }, function () {
        console.log(this.state);
    });
  }

  handleSignup = (e) => {
    e.preventDefault();
    if (this.state.password == this.state.password_confirmation) {
      this.props.signupUser(this.state.user_name, this.state.email, this.state.password, this.state.password_confirmation);
    } else {
      window.alert("Oopsie. You have typed 2 different passwords");
    }
  }

  render() {
    return (
      <div className="login-signup-container">
        <h1 className="login-signup-header">Sign Up</h1>
        <form className="login-signup-form">
          <input id="user_name" className="login-signup-input" name="user_name" placeholder="User_Name" onChange={this.handleChange}/>
          <input id="email" className="login-signup-input" name="email" placeholder="Email" onChange={this.handleChange}/>
          <input id="password" className="login-signup-input" name="password" placeholder="Password" type="password" onChange={this.handleChange}/>
          <input id="password_confirmation" className="login-signup-input" name="password_confirmation" placeholder="Retype Password" type="password" onChange={this.handleChange}/>
          <button onClick={this.handleSignup}>Signup</button>
        </form>
        <hr className="hr-signup-login"/>
        <Link to={'/login'}>Back to Login</Link>
      </div>
    );
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ signupUser }, dispatch);
}

export default connect(null, mapDispatchToProps)(Signup);
