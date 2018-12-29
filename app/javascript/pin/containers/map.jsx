import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MapMarker from './map_marker';
import { fetchPins } from '../actions';
import { hoverPin } from '../actions';

const handleApiLoaded = (map, maps) => {
  // use map and maps objects
};

// Import mapStyles
const mapStyles = require('../json/GoogleMapStyles.json');

class SimpleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hoveredPin: {pin_id: props.selectedPin.id}
    };
    console.log("selected pin");
    console.log(props.selectedPin.id);
  }

  componentWillMount() {
    console.log("Mounting map");
    this.props.fetchPins("tessa_amberly");
  }

  componentWillUpdate() {
    console.log("Map Updating");
  }

  componentWillReceiveProps(nextProps) {
    // You don't have to do this check first, but it can help prevent an unneeded render
    if (nextProps.hoveredPin.pin_id !== this.props.hoveredPin.pin_id) {
      console.log("component will receive props");
      this.setState({ hoveredPin: nextProps.hoveredPin });
    }
  }

  renderMapMarkers = (pin) => {
    return(
      <MapMarker
        onHover={(pin.id == this.state.hoveredPin.pin_id) ? true : false}
        id={pin.id}
        key={pin.id}
        lat={pin.destination.latitude}
        lng={pin.destination.longitude}
      />
    );
  }

  _onChildMouseEnter = (key) => {
    console.log("Enter Hover");
    console.log(key);
    // this.props.hoverPin(key);
  }

  _onChildMouseLeave = (/* key, childProps */) => {
    console.log("Leave Hover");
    // this.props.hoverPin(this.props.selectedPin.id)
  }

  static defaultProps = {
    zoom: 12
  };

  render() {
    const mapOptions = {
      styles: mapStyles // straight out of something like snazzymaps
    };
    const center = {
      lat: this.props.selectedPin.destination.latitude,
      lng: this.props.selectedPin.destination.longitude
    };
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100%', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.GOOGLE_MAPS_API_KEY }}
          center={center}
          onChildMouseEnter={this._onChildMouseEnter}
          onChildMouseLeave={this._onChildMouseLeave}
          defaultZoom={this.props.zoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
          options={mapOptions}
        >
          {this.props.pins.map(this.renderMapMarkers)}

        </GoogleMapReact>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    pins: state.pins,
    hoveredPin: state.hoveredPin
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPins, hoverPin }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SimpleMap);
