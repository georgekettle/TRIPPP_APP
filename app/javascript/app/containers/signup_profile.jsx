import React, { Component } from 'react';

class SignupProfile extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = (e) => {
    console.log("handle submit");
  }

  render() {
    // const labelStyle = this.state.photo ? { height: 'unset' } : { height: '350px' };
    // const imgStyle = this.state.photo ? { display: 'block' } : { display: 'none' };

    return (
      <div className="new-pin-container">
        <div className="new-pin-form">
          <div className="upload-pin-left-container">
            <label htmlFor="upload-pin" className="pin-upload-label">
              <img alt="" className="uploaded-img" />
              <div className="upload-plus"></div>
            </label>
            <input type='file' id='upload-pin' />
          </div>
          <div className="upload-pin-right-container">
            <div className="upload-pin-right-top">
              <textarea type="text" name="title" placeholder="Add a title" className="title-input"/>
              <textarea type="text" name="description" placeholder="Say more about this pin" className="caption-input"/>
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

export default SignupProfile;

