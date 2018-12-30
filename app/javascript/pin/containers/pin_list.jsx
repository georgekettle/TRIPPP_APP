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
    this.props.fetchPins("tessa_amberly");
  }

  render() {
    return (
      <Masonry
          className={'explore-area-pin-list'} // default ''
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
    pins: state.pins
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPins }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PinList);
