import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { createPhoto, editUser } from '../actions/index';

// ASSETS
import plusIcon from '../../../assets/images/circle-plus-icon.png';

class SignupProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      photo: null,
      url: '',
      uploadingPhoto: false
    };
  }

  componentWillReceiveProps(nextProps) {
    // You don't have to do this check first, but it can help prevent an unneeded render
    if (nextProps.selectedPhoto.img_url !== this.state.photo) {
      console.log("Component will receive props");
      this.setState({
        photo: nextProps.selectedPhoto.img_url,
        uploadingPhoto: false
      });
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value }, function () {
        console.log(this.state);
    });
  }

  readFile = (event) => {
    if (event.target.files && event.target.files[0]) {
      this.setState({
          uploadingPhoto: true,
          file: event.target.files[0]
      }, () => {
          var formData  = new FormData();
          formData.append("file", this.state.file);
          this.props.createPhoto(formData);
      });
    }
  }

  handleSubmit = (e) => {
    this.props.editUser(
      this.props.currentUser.user_name,
      this.props.currentUser.email,
      this.state.url,
      this.props.selectedPhoto.id,
      this.state.description
    );
  }

  renderPhotoUpload = () => {
    if (this.state.uploadingPhoto) {
      return (
        <label htmlFor="upload-profile" className="profile-uploading-label">
          <div className="profile-loader"></div>

        </label>
      );
    } else {
      const imgStyle = this.state.photo ? { backgroundImage: `url(${ this.state.photo })`} : {};
      const plusStyle = !this.state.photo ? { display: 'block' } : { display: 'none' };
      return (
        <label style={imgStyle} htmlFor="upload-profile" className="profile-upload-label">

        </label>
      );
    }
  }

  render() {
    return (
      <div className="signup-profile-container">
        <div className="signup-profile-form">
          <div className="profile-upload-left-container">
            {this.renderPhotoUpload()}
            <input type='file' id='upload-profile' onChange={this.readFile}/>
          </div>
          <div className="profile-upload-right-container">
            <div className="upload-profile-right-top">
              <h6 className="signup-profile-input-label">Profile Description</h6>
              <textarea style={{height: '100px'}}type="text" name="description" placeholder="Say a bit about yourself" className="profile-description-input" onChange={this.handleChange}/>
              <h6 className="signup-profile-input-label">Url</h6>
              <input type="text" name="url" placeholder="Attach a URL/Link to your profile" className="profile-url-input" onChange={this.handleChange}/>
            </div>
            <div className="button-container">
              <button onClick={this.handleSubmit}>Save</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    selectedPhoto: state.selectedPhoto,
    currentUser: state.currentUser
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createPhoto, editUser }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupProfile);

