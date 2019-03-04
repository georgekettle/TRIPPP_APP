import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

import { removeAlert } from '../actions'

class Alert extends Component{
  removeAlert = () => {
    this.props.removeAlert(this.props.alert.id);
  }

  render() {
    return (
      <div className={this.props.alert.style} key={this.props.alert.id} onClick={this.removeAlert} style={this.props.style}>
        <div className="alert-content">
          <div>
            {this.props.alert.text}
          </div>
          <div className="alert-close-container">
            <i className="fa fa-close"></i>
          </div>
        </div>
      </div>
    );
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ removeAlert }, dispatch);
}

export default connect(null, mapDispatchToProps)(Alert);
