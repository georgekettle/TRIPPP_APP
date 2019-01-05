import React, { Component } from 'react';
import Masonry from 'react-masonry-component';
import Pin from './pin_card';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPins } from '../actions';

const masonryOptions = {
    transitionDuration: 0
};

class PinList extends Component {
  componentWillMount() {
    this.props.fetchPins(this.props.trip_id);
  }

  componentWillReceiveProps(nextProps) {
    // You don't have to do this check first, but it can help prevent an unneeded render
    if (nextProps.toggleMap !== this.props.toggleMap) {
      console.log("TRIP PIN LIST component will receive props");
      this.render;
    }
  }

  render() {
    return (
      <Masonry
          className={'trip-show-pin-list'} // default ''
          options={masonryOptions} // default {}
          disableImagesLoaded={false} // default false
          updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
      >
        {
          this.props.pins.map((pin) => {
            return(
              <Pin
                key={pin.id}
                pinData={pin}
                user_name={this.props.user_name}
                selectedPin={this.props.selectedPin}
              />
            )
          })
        }
      </Masonry>
    );
  }
}

function mapStateToProps(state) {
  return {
    pins: state.pins,
    toggleMap: state.toggleMap
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPins }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PinList);
