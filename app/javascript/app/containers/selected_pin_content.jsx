import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Select from 'react-select';
import { Link } from 'react-router-dom';

import { createPin } from '../actions';
import { addModal } from '../actions';

class SelectedPinContent extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.toggleMap !== this.props.toggleMap) {
      console.log("PIN CONTENT component will receive props");
      this.render;
    }
  }

  openGuideSelectModal = (e) => {
    console.log("toggle guide select");
    this.props.addModal('selectGuide', this.props.selectedPin);
  }

  classes = (map) => {
    if(map) {
      return 'pin-show-pin-container'
    } else {
      return 'pin-show-pin-container-with-map'
    }
  }

  render() {
    let imgUrl = this.props.selectedPin["photo"]["img_url"];
    let userPhoto = this.props.selectedPin["user"]["photo"];
    const avatarStyle = userPhoto ? { backgroundImage: 'url(' + userPhoto + ')' } : { };

    return (
      <div className={this.classes(this.props.toggleMap)}>
        <div className="pin-show-photo">
          <img src={imgUrl} alt={this.props.selectedPin.caption} className="pin-photo"/>
        </div>
        <div className="pin-show-information">
          <div className="pin-show-guide-select">
            <button className="guide-save-button" onClick={this.openGuideSelectModal}>Save</button>
          </div>
          <h3 className="pin-show-title">{this.props.selectedPin.title}</h3>
          <div className="pin-show-profile-container">
            <div className="pin-show-profile-and-guide">
              <div className="pin-show-user-avatar" style={avatarStyle}></div>
              <div className="pin-show-user-info">
                <Link to={`/profile/${this.props.selectedPin.user.user_name}`}>
                  <h4 className="pin-show-user-name">{this.props.selectedPin.user.user_name}</h4>
                </Link>
                <h6 className="pin-show-saved-to">Saved to</h6>
                <Link to={`/trips/${this.props.selectedPin.trip_id}`}>
                  <h6 className="pin-show-guide-name">{this.props.selectedPin.trip.title}</h6>
                </Link>
              </div>
            </div>
            <button className="pin-show-follow-button">Follow</button>
          </div>
          <hr className="pin-show-hr" />
          <p>{this.props.selectedPin.caption}</p>
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
  return bindActionCreators({ createPin, addModal }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectedPinContent);

