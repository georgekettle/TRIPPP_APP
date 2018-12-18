import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Select from 'react-select';

import { fetchPin } from '../actions/index';
import { createPin } from '../actions';

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

class PinShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guideSelectorValue: selectOptions[0].value
    };
    console.log(props.selectedPin)
  }

  componentWillMount() {
    this.props.fetchPin(this.props.match.params.id)
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
    this.props.createPin(this.props.user_name, this.props.pinData.photo_id, this.props.pinData.trip_id, this.props.pinData.destination_id, this.props.pinData.caption);
  }

  render() {
    let imgUrl = this.props.selectedPin["photo"]["img_url"];
    let userPhoto = this.props.selectedPin["user"]["photo"];
    const avatarStyle = {
      backgroundImage: 'url(' + userPhoto + ')'
    }
    return (
      <div className="pin-show-container">
        <div className="pin-show-content">
          <div className="pin-show-pin-container">
            <div className="pin-show-photo">
              <img src={imgUrl} alt={this.props.selectedPin.caption} className="pin-photo"/>
            </div>
            <div className="pin-show-information">
              <div className="pin-show-guide-select">
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
              <h3 className="pin-show-title">{this.props.selectedPin.title}</h3>
              <div className="pin-show-profile-container">
                <div className="pin-show-profile-and-guide">
                  <div className="pin-show-user-avatar" style={avatarStyle}></div>
                  <div className="pin-show-user-info">
                    <h4 className="pin-show-user-name">{this.props.selectedPin.user.user_name}</h4>
                    <h6 className="pin-show-saved-to">Saved to</h6>
                    <h6 className="pin-show-guide-name">{this.props.selectedPin.trip.title}</h6>
                  </div>
                </div>
                <button className="pin-show-follow-button">Follow</button>
              </div>
              <hr className="pin-show-hr" />
              <p>{this.props.selectedPin.caption}</p>
            </div>
          </div>
        </div>
        <div className="pin-show-map">

        </div>
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
  return bindActionCreators({ createPin, fetchPin }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PinShow);
