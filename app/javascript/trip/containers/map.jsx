import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fitBounds } from 'google-map-react/utils';

import MapMarker from './map_marker';
import { fetchPins } from '../actions';
import { hoverPin } from '../actions';

// Import mapStyles
const mapStyles = require('../json/GoogleMapStyles.json');

// Return map bounds based on list of places
const getMapBounds = (map, maps, pins) => {
  const bounds = new maps.LatLngBounds();

  pins.forEach((pin) => {
    bounds.extend(new maps.LatLng(
      pin.destination.latitude,
      pin.destination.longitude,
    ));
  });
  return bounds;
};

// Re-center map when resizing the window
const bindResizeListener = (map, maps, bounds) => {
  maps.event.addDomListenerOnce(map, 'idle', () => {
    maps.event.addDomListener(window, 'resize', () => {
      map.fitBounds(bounds);
    });
  });
};

// Fit map to its bounds after the api is loaded
const apiIsLoaded = (map, maps, pins) => {
  // Get bounds by our pins
  const bounds = getMapBounds(map, maps, pins);
  // Fit map to bounds
  map.fitBounds(bounds);
  // Bind the resize listener
  bindResizeListener(map, maps, bounds);
};

class SimpleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hoveredPin: {}
    };
  }

  componentWillMount() {
    console.log("Mounting map");
    this.props.fetchPins(this.props.trip_id);
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
        onHover={(this.state.hoveredPin == {} || (pin.id == this.state.hoveredPin.pin_id)) ? true : false}
        img={pin.photo.img_url}
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
    zoom: 13
  };

  render() {
    const mapOptions = {
      styles: mapStyles // straight out of something like snazzymaps
    };
    const center = {
      lat: this.props.pins[0].destination.latitude,
      lng: this.props.pins[0].destination.longitude
    };

    return (
      // Important! Always set the container height explicitly
      <div className="trip-show-map">
        <GoogleMapReact
          ref="map"
          bootstrapURLKeys={{ key: process.env.GOOGLE_MAPS_API_KEY }}
          center={center}
          onChildMouseEnter={this._onChildMouseEnter}
          onChildMouseLeave={this._onChildMouseLeave}
          defaultZoom={this.props.zoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps, this.props.pins)}
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
