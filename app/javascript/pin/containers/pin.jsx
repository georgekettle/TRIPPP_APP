import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchPin } from '../actions/index';

class Pin extends Component {
  componentWillMount() {
    this.props.fetchPin(this.props.match.params.id)
  }

  render() {
    let imgUrl = this.props.selectedPin["photo"]["img_url"];
    return (
      <div className="profile-container">
        <img src={imgUrl} alt={this.props.selectedPin.caption} className="pin-photo"/>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    selectedPin: state.selectedPin,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPin }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Pin);
