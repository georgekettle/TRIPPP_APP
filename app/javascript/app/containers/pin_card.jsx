import React, { Component } from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import { createPin } from '../actions';
import { hoverPin } from '../actions';

const selectOptions = [
  // value is the :trip_id
  { value: 1, label: 'A Day in Capri' },
  { value: 2, label: 'Italian Boating' }
]

const style = {
  control: (base, state) => ({
    ...base,
    border: state.isFocused ? 0 : 0,
    // This line disable the blue border
    boxShadow: state.isFocused ? 0 : 0,
    "&:hover": {
      border: state.isFocused ? 0 : 0
    }
  })
};

class Pin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guideSelectorValue: selectOptions[0].value
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.toggleMap !== this.props.toggleMap) {
      console.log("PIN CARD component will receive props");
      this.render;
    }
  }

  callback() {
    console.log("state value");
    console.log(this.state.guideSelectorValue);
  }

  handleChange = (e) => {
    console.log("handle change");
    console.log(e.value);
    this.setState({
      guideSelectorValue: e.value
    },
    this.callback
    );
    // console.log("state value");
    // console.log(this.state.guideSelectorValue);
  }

  handleSubmit = (e) => {
    console.log("handle submit");
    console.log(this.state.guideSelectorValue);
    const pin = this.props.pinData;
    console.log(pin);
    this.props.createPin(
      pin.photo_id,
      pin.trip_id,
      pin.destination_id,
      pin.title,
      pin.caption,
      pin.url
    );
  }

  enterHoverEvent = (e) => {
    const key = parseInt(e.currentTarget.dataset.key, 10);
    this.props.hoverPin(key);
  }

  exitHoverEvent = () => {
    this.props.hoverPin(this.props.selectedPin.id);
  }

  pinClasses = (context) => {
    if(this.props.context == 'trip' && this.props.toggleMap) {
      return 'trip-pin-card-with-map'
    } else if(this.props.context == 'trip' && !this.props.toggleMap) {
      return 'trip-pin-card'
    } else if(this.props.context == 'pin-show' && this.props.toggleMap) {
      return 'explore-area-pin-card-with-map'
    } else if(this.props.context == 'pin-show' && !this.props.toggleMap) {
      return 'explore-area-pin-card'
    } else if(this.props.context == 'profile') {
      return 'pin-card'
    }
  }

  render() {
    let imgUrl = this.props.pinData.photo.img_url;
    let pin_id = this.props.pinData.id;
    return (
      <div className={this.pinClasses(this.props.context)} data-key={this.props.pinData.id} onMouseEnter={this.enterHoverEvent} onMouseLeave={this.exitHoverEvent}>
        <div className="guide-select">
          <Select
            ref="imageType"
            name="guide-selector"
            onChange={this.handleChange}
            options={selectOptions}
            className="basic-single"
            classNamePrefix="select"
            isSearchable={false}
            defaultValue={selectOptions[0]}
            styles={style}
            theme={(theme) => ({
              ...theme,
              borderRadius: 2,
              colors: {
              ...theme.colors,
                primary50: '#FFE6B3',
                primary25: '#FFEECC',
                primary: '#FFC245',
              },
            })}
          />
          <button className="guide-select-submit" onClick={this.handleSubmit}>Save</button>
        </div>
        <Link to={`/pins/${pin_id}`}>
          <img src={imgUrl} alt={this.props.pinData["title"]} className="pin-photo"/>
          <h4 className="pin-caption">{this.props.pinData["title"]}</h4>
        </Link>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    hoveredPin: state.hoveredPin,
    selectedPin: state.selectedPin,
    toggleMap: state.toggleMap
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createPin, hoverPin }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Pin);

