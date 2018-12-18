import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Select from 'react-select';

import { createPin } from '../actions/index';
import { createPhoto } from '../actions/index';

const selectOptions = [
  // value is the :trip_id
  { value: 1, label: 'A Day in Capri' },
  { value: 2, label: 'Italian Boating' }
]

class CreatePin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      photo: null,
      trip_id: '2',
      url: 'https://www.bontraveler.com/the-ultimate-guide-to-hvar-croatia/',
      destination_id: '1',
      selectedFile: null,
      textAreaHeight: '40px'
    };
  }

  componentWillReceiveProps(nextProps) {
    // You don't have to do this check first, but it can help prevent an unneeded render
    if (nextProps.selectedPhoto.img_url !== this.state.photo) {
      this.setState({ photo: nextProps.selectedPhoto.img_url });
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value }, function () {
        console.log(this.state);
    });
  }

  handleTextChange = (event) => {
    event.target.style.height = "40px";
    const textAreaScroll = event.target.scrollHeight;
    this.setState({ [event.target.name]: event.target.value }, function () {
        this.setState({ textAreaHeight: '40px' }, function () {
          this.setState({ textAreaHeight: textAreaScroll })
        });
    });
  }

  readFile = (event) => {
    if (event.target.files && event.target.files[0]) {
      var formData = new FormData();
      formData.set('uploaded_image', event.target.files[0]);
      this.props.createPhoto(formData)
    }
  }

  handleSubmit = (e) => {
    console.log("handle submit");
    console.log(this.state);
    this.props.createPin(
      this.props.currentUser.id,
      this.props.selectedPhoto.id,
      this.state.trip_id,
      this.state.destination_id,
      this.state.title,
      this.state.description,
      this.state.url
    );
  }

  callback() {
    console.log("state value");
    console.log(this.state.trip_id);
  }

  handleGuideChange = (e) => {
    console.log("handle change");
    console.log(e.value);
    this.setState({
      trip_id: e.value
    },
    this.callback
    );
  }

  render() {
    const labelStyle = this.state.photo ? { height: 'unset' } : { height: '350px' };
    const imgStyle = this.state.photo ? { display: 'block' } : { display: 'none' };
    const textAreaStyle = { height: this.state.textAreaHeight };
    console.log(this.state.textAreaHeight);

    return (
      <div className="new-pin-container">
        <div className="new-pin-form">
          <div className="upload-pin-left-container">
            <label style={labelStyle} htmlFor="upload-pin" className="pin-upload-label">
              <img style={imgStyle} src={this.state.photo} alt="" className="uploaded-img" />
              <div className="upload-plus"></div>
            </label>
            <input type='file' id='upload-pin' onChange={this.readFile} />
            <div className="save-from-site">
              <h4>Save from Site</h4>
            </div>
          </div>
          <div className="upload-pin-right-container">
            <div className="upload-pin-right-top">
              <textarea type="text" name="title" placeholder="Add a title" style={textAreaStyle} className="title-input" onChange={this.handleTextChange}/>
              <div className="pin-user">
                <img src="https://instagram.fsyd5-1.fna.fbcdn.net/vp/a5a9e47acd796e82b4ae6b119dc98a71/5C938829/t51.2885-19/s320x320/44518843_273689646684456_8468654155899076608_n.jpg?_nc_ht=instagram.fsyd5-1.fna.fbcdn.net" alt={this.props.match.params.user_name} className="pin-user-avatar"/>
                <div className="pin-user-info">
                  <h5 className="pin-user-name">Tessa Amberly</h5>
                  <h6 className="pin-user-nationality">American</h6>
                </div>
              </div>
              <textarea type="text" name="description" placeholder="Say more about this pin" className="caption-input" onChange={this.handleChange}/>
            </div>
            <div className="upload-pin-right-bottom">
              <input type="text" name="url" className="create-pin-url" placeholder="Link this Pin to a website" onChange={this.handleChange}/>
              <Select
                ref="imageType"
                name="guide-selector"
                onChange={this.handleGuideChange}
                options={selectOptions}
                className="basic-single create-pin-trip-select"
                classNamePrefix="select"
                isSearchable={false}
                defaultValue={selectOptions[0]}
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

            </div>
          </div>
        </div>
        <div className="button-container">
          <button onClick={this.handleSubmit}>Save</button>
        </div>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    selectedPhoto: state.selectedPhoto
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createPin, createPhoto }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePin);
