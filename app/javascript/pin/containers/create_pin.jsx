import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Pin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      photo: '',
      trip_id: '',
      url: ''
    };
  }
  render() {
    return (
      <div className="new-pin-container">
        <div className="upload-photo-left-container">
          <label for="upload-pin" className="pin-upload-label">
            <div className="upload-plus"></div>
          </label>
          <input type='file' id='upload-pin' />
          <div className="save-from-site">
            <h4>Save from Site</h4>
          </div>
        </div>
        <div className="upload-photo-right-container">
          <textArea type="text" placeholder="Add a title" className="title-input"/>
          <div className="pin-user">
            <img src="https://instagram.fsyd5-1.fna.fbcdn.net/vp/a5a9e47acd796e82b4ae6b119dc98a71/5C938829/t51.2885-19/s320x320/44518843_273689646684456_8468654155899076608_n.jpg?_nc_ht=instagram.fsyd5-1.fna.fbcdn.net" alt={this.props.match.params.user_name} className="pin-user-avatar"/>
            <div className="pin-user-info">
              <h5 className="pin-user-name">Tessa Amberly</h5>
              <h6 className="pin-user-nationality">American</h6>
            </div>
          </div>
          <textArea type="text" placeholder="Say more about this pin" className="caption-input"/>
        </div>
      </div>
    );
  }
};

export default Pin;
