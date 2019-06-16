import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

import SelectGuideItem from './select_guide_item';

import { fetchCurrentUserTrips } from '../actions'

class SelectGuide extends Component{
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCurrentUserTrips(this.props.modal.options)
  }

  renderGuideList = () => {
    const tripItems = this.props.currentUserTrips.map((trip) =>
      <SelectGuideItem key={trip.id} trip={trip}/>

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
    currentUserTrips: state.currentUserTrips,
    modal: state.modal
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCurrentUserTrips }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectGuide);
