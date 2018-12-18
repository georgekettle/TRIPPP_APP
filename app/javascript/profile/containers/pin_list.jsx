import React, { Component } from 'react';
import Masonry from 'react-masonry-component';
import Pin from './pin';
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

  // renderPin = (pin) => {
  //   let imgUrl = pin["photo"]["img_url"];
  //   return (
  //     <div className="pin-card">
  //       <div className="guide-select">
  //         <Select
  //           ref="imageType"
  //           name="guide-selector"
  //           onChange={this.handleChange}
  //           options={selectOptions}
  //           className="basic-single"
  //           classNamePrefix="select"
  //           defaultValue={selectOptions[0]}
  //           styles={style}
  //           theme={(theme) => ({
  //             ...theme,
  //             borderRadius: 2,
  //             colors: {
  //             ...theme.colors,
  //               primary50: '#FFE6B3',
  //               primary25: '#FFEECC',
  //               primary: '#FFC245',
  //             },
  //           })}
  //         />
  //         <button className="guide-select-submit" onClick={this.handleSubmit}>Save</button>
  //       </div>
  //       <img src={imgUrl} alt={pin["caption"]} className="pin-photo"/>
  //       <h4 className="pin-caption">{pin["caption"]}</h4>
  //     </div>
  //   )
  // }

  render() {
    return (
      <Masonry
          className={'pin-list'} // default ''
          options={masonryOptions} // default {}
          disableImagesLoaded={false} // default false
          updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
      >
        {
          this.props.pins.map((pin) => {
            console.log(pin);
            return <Pin key={pin["id"]} pinData={pin} user_name={this.props.user_name} />;
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
