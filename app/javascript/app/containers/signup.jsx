import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Signup extends Component {
  handleSignup = (e) => {
    e.preventDefault();
    console.log("handleSignup");
  }

  render() {
    return (
      <div className="login-signup-container">
        <h1>Signup</h1>
        <form>
          <input id="email" placeholder="email"/>
          <input id="password" placeholder="password"/>
          <input id="password_confirmation" placeholder="retype password"/>
          <button onClick={this.handleSignup}>Signup</button>
        </form>
        <Link to={'/login'}>Back to Login</Link>
      </div>
    );
  }
};

export default Signup;
