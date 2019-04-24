import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TabsList from '../containers/profile_tabs.jsx';
import PinList from '../containers/pin_list';
import TripList from '../containers/trip_list';

import { fetchUser } from '../actions';

class Profile extends Component {
  componentWillMount() {
    this.props.fetchUser(this.props.match.params.user_name);
  }

  renderContent = (tab) => {
    console.log(tab);
    switch(tab) {
      case 'guides': {
        return <TripList user_name={this.props.match.params.user_name}/>
      };
      case 'pins': {
        return <PinList user_name={this.props.match.params.user_name} context="profile"/>
      };
      default: return <TripList user_name={this.props.match.params.user_name}/>;
    }
  }

   // {!this.props.match.params.tab ? 'pins' : this.props.match.params.tab}

  render() {
    return (
      <div className="profile-container">
        <div className="profile-banner"></div>
        <div className="profile-summary">
          <div className="profile-summary-left">
            <div className="profile-avatar-container">
              {this.props.selectedUser.photo &&
                <img src={this.props.selectedUser.photo} alt={this.props.match.params.user_name} className="profile-avatar"/>
              }
            </div>
            <div className="profile-information">
              <h2 className="profile-name-text">{this.props.match.params.user_name}</h2>
              <h5 className="profile-nationality">Australian</h5>
              <h5 className="profile-url">www.clashstudio.com.au</h5>
            </div>
          </div>
          <button className="trip-show-follow-button profile-follow-button">Follow</button>
        </div>
        <TabsList user_name={this.props.match.params.user_name} selectedTab={this.props.match.params.tab}/>
          {this.renderContent(this.props.match.params.tab)}
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    selectedUser: state.selectedUser
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchUser }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
