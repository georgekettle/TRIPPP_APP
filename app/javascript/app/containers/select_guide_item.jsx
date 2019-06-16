import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

class SelectGuideItem extends Component{
  render() {
    return (
      <div className="select-guide-item">{this.props.trip.title}</div>
    );
  }
};

export default connect(null)(SelectGuideItem);
