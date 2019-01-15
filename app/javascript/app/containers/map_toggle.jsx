import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { toggleMapAction } from '../actions';

class MapToggle extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    const newState = !this.props.toggleMap;
    this.props.toggleMapAction(newState);
  }

  componentWillReceiveProps(nextProps) {
    // You don't have to do this check first, but it can help prevent an unneeded render
    if (nextProps.toggleMap !== this.props.toggleMap) {
      console.log("component will receive props");
      this.render;
    }
  }

  render() {
    const classes = this.props.toggleMap ? "map-toggle-container map-toggle-true" : "map-toggle-container";
    return (
      <div className="map-toggle" onClick={this.handleClick}>
        <h6 className="show-map-text">Show Map</h6>
        <div className={classes}>
          <div className="map-toggle-circle"></div>
        </div>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    toggleMap: state.toggleMap
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ toggleMapAction }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MapToggle);
