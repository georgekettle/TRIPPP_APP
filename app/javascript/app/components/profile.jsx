import React, { Component } from 'react';
import TabsList from '../containers/profile_tabs.jsx';
import PinList from '../containers/pin_list';
import TripList from '../containers/trip_list';

class Profile extends Component {

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
            <img src="https://instagram.fsyd5-1.fna.fbcdn.net/vp/a5a9e47acd796e82b4ae6b119dc98a71/5C938829/t51.2885-19/s320x320/44518843_273689646684456_8468654155899076608_n.jpg?_nc_ht=instagram.fsyd5-1.fna.fbcdn.net" alt={this.props.match.params.user_name} className="profile-avatar"/>
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

export default Profile;
