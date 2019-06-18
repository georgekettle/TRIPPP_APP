import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

function SelectedItem(props) {
  return (
    <div className="selected-guide-item">{props.trip.title}</div>
  );
}

function NonSelectedItem(props) {
  return (
    <div className="select-guide-item">{props.trip.title}</div>
  );
}

class SelectGuideItem extends Component{
  render() {
    const containsPin = this.props.trip['contains_pin?'];
    return (
      <div>
        {containsPin ? (
          <SelectedItem trip={this.props.trip}/>
          // <SelectedItem onClick={this.handleLogoutClick} />
        ) : (
          <NonSelectedItem trip={this.props.trip}/>
        )}
      </div>
    );
  }
};

export default connect(null)(SelectGuideItem);
