import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import logo from '../../../assets/images/trippp-logo-3.png';
import plusIcon from '../../../assets/images/plus-icon-white.svg';

import { logoutUser } from '../actions';

class NavBar extends Component {
  handleLogout = (e) => {
    e.preventDefault();
    console.log("handleLogout");
    this.props.logoutUser(this.props.currentUser);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser !== this.props.currentUser) {
      console.log("NAVBAR component will receive props");
      this.render;
    }
  }

  render() {
    return (
      <div className="react-navbar">
        <img src={logo} alt={"logo"} className="navbar-logo"/>
        {this.props.currentUser &&
          <div className="navbar-right">
            <div className="navbar-item navbar-link" onClick={this.handleLogout}>
              <h5>logout</h5>
            </div>
            <Link to={'/pins/new'} className="navbar-item navbar-link">
              <div className="navbar-create-div">
                <img src={plusIcon} className="plus-icon"/>
              </div>
            </Link>
            <Link to={`/profile/${this.props.currentUser.user_name}`} className="navbar-item navbar-link">
              <div className="navbar-avatar-container">
                {this.props.currentUser.photo &&
                  <img src={this.props.currentUser.photo} className="avatar"/>
                }
              </div>
            </Link>
          </div>
        }

        {!this.props.currentUser &&
          <div className="navbar-right">
            <Link to={'/login'} className="navbar-item navbar-link">
              <h6 className="login-navbar-text">Login</h6>
            </Link>
            <Link to={'/signup'} className="navbar-item navbar-link">
              <h6 className="login-navbar-text">SignUp</h6>
            </Link>
          </div>
        }
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ logoutUser }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
