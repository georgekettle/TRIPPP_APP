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
        <h1>Signup</h1>
        <form>
          <input id="user_name" name="user_name" placeholder="user_name" onChange={this.handleChange}/>
          <input id="email" name="email" placeholder="email" onChange={this.handleChange}/>
          <input id="password" name="password" placeholder="password" type="password" onChange={this.handleChange}/>
          <input id="password_confirmation" name="password_confirmation" placeholder="retype password" type="password" onChange={this.handleChange}/>
          <button onClick={this.handleSignup}>Signup</button>
        </form>
        <Link to={'/login'}>Back to Login</Link>
      </div>
    );
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ signupUser }, dispatch);
}

export default connect(null, mapDispatchToProps)(Signup);
