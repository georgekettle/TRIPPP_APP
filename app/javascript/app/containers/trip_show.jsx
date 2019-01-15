import React, { Component } from 'react';
import { connect } from 'react-redux';

import TripNav from './trip_nav';
import TripContent from './trip_content';
import Map from './map'

function RenderMap(props) {
  const renderMap = props.renderMap;
  return(<div className="trip-show-map"></div>)
}

class TripShow extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    // You don't have to do this check first, but it can help prevent an unneeded render
    if (nextProps.toggleMap !== this.props.toggleMap) {
      console.log("component will receive props");
      this.render;
    }
  }

  render() {
    return (
      <div className="trip-show-container">
        <div className="trip-show-content">
          <TripNav />
          <TripContent trip_id={this.props.match.params.id}/>
        </div>
        {this.props.toggleMap &&
          <Map trip_id={this.props.match.params.id} context="trip"/>
        }
      </div>
      );
  }
};

function mapStateToProps(state) {
  return {
    toggleMap: state.toggleMap
  };
}

export default connect(mapStateToProps)(TripShow);
