import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPins } from '../actions';

class PinList extends Component {
  componentWillMount() {
    this.props.fetchPins(this.props.user_name);
  }

  renderPin = (pin) => {
    console.log(pin);
    let imgUrl = pin["photo"]["img_url"];
    let divStyle = {
      backgroundImage: 'url(' + imgUrl + ')'
    };
    return (
      <div className="pin-card">
        <div style={divStyle} className="pin-photo"></div>
        <h4>{pin["caption"]}</h4>
      </div>
    )
  }

  render() {
    return (
      <div className="pin-list">
        {this.props.pins.map(this.renderPin)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    pins: state.pins
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPins }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PinList);
