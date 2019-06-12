import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

import ModalContent from './modal_content';

class Modal extends Component{
  componentWillReceiveProps(nextProps) {
    if (nextProps.modal !== this.props.modal) {
      console.log("component will receive props");
      this.render;
    }
  }

  render() {
    if(this.props.modal.show) {
        return (
          <div>
            <ModalContent modalType={this.props.modal.modalType}/>
          </div>
        );
    } else {
      return null;
    }
  }
};

function mapStateToProps(state) {
  return {
    modal: state.modal
  };
}

export default connect(mapStateToProps)(Modal);
