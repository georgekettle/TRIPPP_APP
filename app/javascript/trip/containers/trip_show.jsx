import React, { Component } from 'react';

import TripNav from './trip_nav';
import TripContent from './trip_content';

class TripShow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <TripNav />
        <TripContent trip_id={this.props.match.params.id}/>
      </div>
    );
  }
};

export default TripShow;
