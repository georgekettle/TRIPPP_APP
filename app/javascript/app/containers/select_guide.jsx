import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

import plusIcon from '../../../assets/images/plus-icon-white.svg';

import SelectGuideItem from './select_guide_item';

import { fetchCurrentUserTrips, removeModal, addModal } from '../actions'

class SelectGuide extends Component{
  constructor(props) {
    super(props);
  }

  removeModal = () => {
    this.props.removeModal()
  }

  openCreateGuideModal = () => {
    console.log("open create guide modal");
    this.props.addModal('createGuide', this.props.modal.options);
  }

  componentDidMount() {
    this.props.fetchCurrentUserTrips(this.props.modal.options.id)
  }

  renderGuideList = () => {
    const tripItems = this.props.currentUserTrips.map((trip) =>
      <SelectGuideItem key={trip.id} trip={trip}/>
    );
    return(
      <div className="select-guide-items-container">{tripItems}</div>
    )
  }

  render() {
    console.log(this.props.modal.options);
    console.log(this.props.modal.options.id);
    return (
      <div className="choose-trip-container">
        <div className="choose-trip-header">
          <h2></h2>
          <h2>Choose Guide</h2>
          <div className="modal-close-button" onClick={this.removeModal}>
            <img src={plusIcon} className="modal-close-icon"/>
          </div>
        </div>
        <div className="select-guide-main-content">
          <div className="select-guide-pin-photo-container">
            <div className="select-guide-pin-photo">
              <img src={this.props.modal.options.photo.img_url} className="select-guide-pin-photo-img"/>
            </div>
          </div>
          <div className="select-guide-items-and-create-guide-container">
            {this.renderGuideList()}
            <div className="select-guide-create-trip-button" onClick={this.openCreateGuideModal}>
              <div className="select-guide-create-new-guide">
                <img src={plusIcon} className="create-guide-plus-icon"/>
              </div>
              <h3 className="select-guide-create-new-guide-text">New Guide</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    currentUserTrips: state.currentUserTrips,
    modal: state.modal
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCurrentUserTrips, removeModal, addModal }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectGuide);
