import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

import plusIcon from '../../../assets/images/plus-icon-white.svg';
import tickIcon from '../../../assets/images/tick-icon.svg';

import SelectGuideItem from './select_guide_item';

import { removeModal, addModal, createTripAndAddPin } from '../actions'

class CreateGuideModal extends Component{
  constructor(props) {
    super(props);
    this.state = {
      secret: false,
      title: null
    };
  }

  removeModal = () => {
    this.props.removeModal()
  }

  openSelectGuideModal = () => {
    console.log("open create guide modal");
    this.props.addModal('selectGuide', this.props.modal.options);
  }

  createGuide = () => {
    this.props.createTripAndAddPin(this.state.title, this.state.secret, this.props.modal.options.id)
  }

  toggleCheckBox = () => {
    this.setState({secret: !this.state.secret})
  }

  renderCheckBox = () => {
    if (this.state.secret) {
      return (
          <div className="create-guide-modal-secret-checkbox-checked" onClick={this.toggleCheckBox}>
            <img src={tickIcon} className="create-guide-tick-icon"/>
          </div>
        );
    } else {
      return (
          <div className="create-guide-modal-secret-checkbox" onClick={this.toggleCheckBox}></div>
        );
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value }, function () {
        console.log(this.state);
    });
  }

  render() {
    const buttonStyle = {
      marginLeft: '15px'
    };

    return (
      <div className="choose-trip-container">
        <div className="choose-trip-header">
          <h2></h2>
          <h2>Create Guide</h2>
          <div className="modal-close-button" onClick={this.removeModal}>
            <img src={plusIcon} className="modal-close-icon"/>
          </div>
        </div>
        <div className="create-guide-modal-input">
          <label htmlFor="create-guide-modal-title" className="create-guide-modal-title">
            <h5>Title</h5>
          </label>
          <input type="text" name="title" className="create-guide-modal-title-input" id="create-guide-modal-title" placeholder="Eg. 'Day in Paris' or 'Best burgers in NY'" onChange={this.handleChange}/>
        </div>
        <div className="create-guide-modal-input">
          <label htmlFor="create-guide-modal-title" className="create-guide-modal-title">
            <h5>Visibility</h5>
          </label>
          <div className="create-guide-modal-secret-checkbox-container">
            {this.renderCheckBox()}
            <div className="create-guide-modal-secret-checkbox-text">
              <p className="create-guide-modal-secret-checkbox-h6">Keep this trip secret.</p>
              <h6 className="create-guide-modal-secret-checkbox-learn-more">Learn more</h6>
            </div>
          </div>
        </div>
        <div className="create-guide-modal-cancel-create-container">
          <button className="cancel-button" onClick={this.openSelectGuideModal}>Cancel</button>
          <button style={buttonStyle} onClick={this.createGuide}>Create</button>
        </div>
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
  return bindActionCreators({ removeModal, addModal, createTripAndAddPin }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateGuideModal);
