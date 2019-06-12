import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

import { fetchCurrentUserTrips } from '../actions'

class SelectGuide extends Component{
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCurrentUserTrips()
  }

  renderGuideList = () => {
    const tripItems = this.props.trips.map((trip) =>
      <div key={trip.id} className="select-guide-item">{trip.title}</div>
    );
    return(
      <div className="select-guide-items-container">{tripItems}</div>
    )
  }

  render() {
    return (
      <div>
        {this.renderGuideList()}
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    trips: state.trips
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCurrentUserTrips }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectGuide);
