import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { fetchTrips } from '../actions';

class TripList extends Component {
  componentWillMount() {
    this.props.fetchTrips(this.props.user_name);
  }

  renderPhoto = (pin, index) => {
    let imgUrl = pin['photo']['img_url'];
    let firstPhoto = {
        backgroundImage: 'url(' + imgUrl + ')',
        height: '100%',
        borderRight: 'solid 2px white'
      };
    let regularPhoto = {
        backgroundImage: 'url(' + imgUrl + ')'
      };
    let divStyle = (index == 0) ? firstPhoto : regularPhoto;
    return (
      <div style={divStyle} className="trip-cover-photo"></div>
    )
  }

  renderTrip = (trip) => {
    var pins = trip["pins"];
    var firstThree = pins.slice(0,3);
    console.log(firstThree);
    return (
      <Link to={`/trips/${trip.id}`} className="trip-card-link">
        <div className="trip-card">
          <div className="trip-card-photos">
            {firstThree.map(this.renderPhoto)}
          </div>
          <div className="trip-card-information">
            <div className="trip-card-title-and-pins">
              <h4 className="trip-card-title">{trip['title']}</h4>
              <h6 className="trip-card-pin-count">22 pins</h6>
            </div>
            <button className="trip-card-follow-button">Follow</button>
          </div>

        </div>
      </Link>
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
