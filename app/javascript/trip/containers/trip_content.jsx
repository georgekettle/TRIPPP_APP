import React, { Component } from 'react';
import { connect } from 'react-redux';

import PinList from './pin_list';

class TripContent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let userPhoto = this.props.selectedTrip.user.photo;
    const avatarStyle = {
      backgroundImage: 'url(' + userPhoto + ')'
    }
    return (
      <div className="trip-content">
        <div className="title-and-follow">
          <h1 className="trip-title">{this.props.selectedTrip.title}</h1>
          <button className="trip-show-follow-button">Follow</button>
        </div>
        <div className="trip-information">
          <h6 className="trip-information-text">22 Pins  |  311 Followers</h6>
        </div>
        <div className="trip-show-profile-and-guide">
          <div className="trip-show-user-avatar" style={avatarStyle}></div>
          <h4 className="trip-show-user-name">{this.props.selectedTrip.user.user_name}</h4>
        </div>
        <PinList trip_id={this.props.trip_id}/>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    selectedTrip: state.selectedTrip
  };
}

export default connect(mapStateToProps)(TripContent);
