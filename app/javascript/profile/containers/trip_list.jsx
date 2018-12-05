import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTrips } from '../actions';

class TripList extends Component {
  componentWillMount() {
    this.props.fetchTrips(this.props.user_name);
  }

  renderPhoto = (pin) => {
    let imgUrl = pin['photo']['img_url'];
    let divStyle = {
      backgroundImage: 'url(' + imgUrl + ')'
    };
    return (
      <div style={divStyle} className="trip-cover-photo"></div>
    )
  }

  renderTrip = (trip) => {
    var pins = trip["pins"];
    var firstFour = pins.slice(0,4);
    console.log(firstFour);
    return (
      <div className="trip-card">
        <div className="trip-card-photos">
          {firstFour.map(this.renderPhoto)}
        </div>
        <h4>{trip['title']}</h4>
      </div>
    )
  }

  render() {
    return (
      <div className="pin-list">
        {this.props.trips.map(this.renderTrip)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    trips: state.trips
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchTrips }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TripList);
