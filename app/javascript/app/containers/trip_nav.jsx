import React, { Component } from 'react';

import MapToggle from './map_toggle';

class TripNav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="sub-navbar">
        <div className="share-icon"></div>
        <MapToggle/>
      </div>
    );
  }
};

export default TripNav;
