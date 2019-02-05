import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
  handleLogin = (e) => {
    e.preventDefault();
    console.log("handleLogin");
  }

  render() {
    return (
      <div className="login-signup-container">
        <h1>Login</h1>
        <form>
          <input id="email" placeholder="email"/>
          <input id="password" placeholder="password"/>
          <button onClick={this.handleLogin}>Login</button>
        </form>
        <Link to={'/signup'}>or Signup</Link>
      </div>
    );
  }
};

export default Login;

