import React, { Component } from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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

class Pin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guideSelectorValue: selectOptions[0].value
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
    this.props.createPin(this.props.user_name, this.props.pinData.photo_id, this.props.pinData.trip_id, this.props.pinData.destination_id, this.props.pinData.caption);
  }


  render() {
    let imgUrl = this.props.pinData["photo"]["img_url"];
    return (
      <div className="pin-card">
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
        <img src={imgUrl} alt={this.props.pinData["caption"]} className="pin-photo"/>
        <h4 className="pin-caption">{this.props.pinData["caption"]}</h4>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createPin }, dispatch);
}

export default connect(null, mapDispatchToProps)(Pin);
