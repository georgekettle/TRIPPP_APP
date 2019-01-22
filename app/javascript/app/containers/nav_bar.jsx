import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import logo from '../../../assets/images/trippp-logo-3.png';
import plusIcon from '../../../assets/images/plus-icon-white.svg';

class NavBar extends Component {
  render() {
    return (
      <div className="react-navbar">
        <img src={logo} alt={"logo"} className="navbar-logo"/>
        <div className="navbar-right">
          <Link to={'/pins/new'} className="navbar-item navbar-link">
            <div className="navbar-create-div">
              <img src={plusIcon} className="plus-icon"/>
            </div>
          </Link>
          <Link to={`/profile/${this.props.currentUser.user_name}`} className="navbar-item navbar-link">
            <img src={this.props.currentUser.photo} className="avatar"/>
          </Link>
        </div>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  };
}

export default connect(mapStateToProps)(NavBar);
