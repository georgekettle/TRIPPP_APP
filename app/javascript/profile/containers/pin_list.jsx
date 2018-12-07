import React, { Component } from 'react';
import Masonry from 'react-masonry-component';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPins } from '../actions';

const masonryOptions = {
    transitionDuration: 0
};

class PinList extends Component {
  componentWillMount() {
    this.props.fetchPins(this.props.user_name);
  }

  renderPin = (pin) => {
    let imgUrl = pin["photo"]["img_url"];
    return (
      <div className="pin-card">
        <img src={imgUrl} alt={pin["caption"]} className="pin-photo"/>
        <h4>{pin["caption"]}</h4>
      </div>
    )
  }

  render() {
    return (
      <Masonry
          className={'pin-list'} // default ''
          options={masonryOptions} // default {}
          disableImagesLoaded={false} // default false
          updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
      >
        {this.props.pins.map(this.renderPin)}
      </Masonry>
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
