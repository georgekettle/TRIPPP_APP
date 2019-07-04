import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

import { removeModal } from '../actions'

import SelectGuide from './select_guide';
import CreateGuideModal from './create_guide_modal';

class ModalContent extends Component{
  removeModal = () => {
    this.props.removeModal()
  }

  renderModalContent = () => {
    const modalType = this.props.modalType;

    if(modalType == "selectGuide") {
      return <SelectGuide />
    } else if(modalType == "createGuide") {
      return <CreateGuideModal />
    } else {
      return <h1>Loading...</h1>
    }
  }

  render() {
    return (
      <div className="modal-overlay">
        <div className="modal-exit-on-click-overlay" onClick={this.removeModal}></div>
        <div className="modal-box">
          {this.renderModalContent()}
        </div>
      </div>
    );
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ removeModal }, dispatch);
}

export default connect(null, mapDispatchToProps)(ModalContent);
