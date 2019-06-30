import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

import { addPinToTrip } from '../actions';

function GuideItem(props) {
  var backgroundImgStyle = {
    backgroundImage: `url(${props.trip.pins[0].photo.img_url})`
  };
  return (
    <div className="select-guide-item" onClick={props.addPinToTrip}>
      <div className="select-guide-item-photo-and-title">
        <div className="select-guide-item-photo-container" style={ backgroundImgStyle }></div>
        <h2 className="select-guide-item-trip-title">{props.trip.title}</h2>
      </div>
      <button className="select-guide-item-save-button">Save</button>
    </div>
  );
}

class SelectGuideItem extends Component{
  handleAddPinToTrip = (e) => {
    console.log("Adding Pin to Trip");
    this.props.addPinToTrip(this.props.modal.options.id, this.props.trip.id)
  }

  render() {
    const containsPin = this.props.trip['contains_pin?'];
    return (
      <div>
        <GuideItem trip={this.props.trip} addPinToTrip={this.handleAddPinToTrip}/>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    modal: state.modal
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addPinToTrip }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectGuideItem);
