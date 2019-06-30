import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import { createPin } from '../actions';
import { addModal } from '../actions';
import { hoverPin } from '../actions';

class Pin extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.toggleMap !== this.props.toggleMap) {
      console.log("PIN CARD component will receive props");
      this.render;
    }
  }

  openGuideSelectModal = (e) => {
    console.log("toggle guide select");
    this.props.addModal('selectGuide', this.props.pinData);
  }

  enterHoverEvent = (e) => {
    const key = parseInt(e.currentTarget.dataset.key, 10);
    this.props.hoverPin(key);
  }

  exitHoverEvent = () => {
    this.props.hoverPin(this.props.selectedPin.id);
  }

  pinClasses = (context) => {
    if(this.props.context == 'trip' && this.props.toggleMap) {
      return 'trip-pin-card-with-map'
    } else if(this.props.context == 'trip' && !this.props.toggleMap) {
      return 'trip-pin-card'
    } else if(this.props.context == 'pin-show' && this.props.toggleMap) {
      return 'explore-area-pin-card-with-map'
    } else if(this.props.context == 'pin-show' && !this.props.toggleMap) {
      return 'explore-area-pin-card'
    } else if(this.props.context == 'profile') {
      return 'pin-card'
    }
  }

  render() {
    let imgUrl = this.props.pinData.photo.img_url;
    let pin_id = this.props.pinData.id;
    return (
      <div className={this.pinClasses(this.props.context)} data-key={this.props.pinData.id} onMouseEnter={this.enterHoverEvent} onMouseLeave={this.exitHoverEvent}>
        <div className="guide-select">
          <button className="guide-select-submit" onClick={this.openGuideSelectModal}>Save</button>
        </div>
        <Link to={`/pins/${pin_id}`}>
          <img src={imgUrl} alt={this.props.pinData["title"]} className="pin-photo"/>
          <h4 className="pin-caption">{this.props.pinData["title"]}</h4>
        </Link>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    hoveredPin: state.hoveredPin,
    selectedPin: state.selectedPin,
    toggleMap: state.toggleMap
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createPin, hoverPin, addModal }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Pin);

