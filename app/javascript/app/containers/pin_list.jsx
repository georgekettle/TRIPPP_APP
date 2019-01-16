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
    if(this.props.context == 'trip') {
      this.props.fetchPins(this.props.selectedTrip.id, this.props.context);
    } else {
      this.props.fetchPins("tessa_amberly", 'pin-show');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.toggleMap !== this.props.toggleMap) {
      console.log("TRIP PIN LIST component will receive props");
      this.render;
    }
  }

  masonryClasses = (context) => {
    if(this.props.context == 'trip') {
      return 'trip-show-pin-list'
    } else if(this.props.context == 'pin-show') {
      return 'explore-area-pin-list'
    } else if(this.props.context == 'profile') {
      return 'pin-list'
    }
  }

  render() {
    return (
      <Masonry
          className={this.masonryClasses(this.props.context)} // default ''
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
                context={this.props.context}
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
    selectedTrip: state.selectedTrip,
    toggleMap: state.toggleMap
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPins }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PinList);

