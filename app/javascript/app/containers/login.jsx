import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { loginUser } from '../actions';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value }, function () {
        console.log(this.state);
    });
  }

  handleLogin = (e) => {
    e.preventDefault();
    this.props.loginUser(this.state.email, this.state.password);
  }

  render() {
    return (
      <div className="login-signup-container">
        <h1>Login</h1>
        <form>
          <input id="email" name="email" placeholder="email" onChange={this.handleChange}/>
          <input id="password" name="password" placeholder="password" type="password" onChange={this.handleChange}/>
          <button onClick={this.handleLogin}>Login</button>
        </form>
        <Link to={'/signup'}>or Signup</Link>
      </div>
    );
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loginUser }, dispatch);
}

export default connect(null, mapDispatchToProps)(Login);

