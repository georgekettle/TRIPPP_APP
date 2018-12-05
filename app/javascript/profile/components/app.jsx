import React, { Component } from 'react';
import TabsList from '../containers/tabs.jsx';
import PinList from '../containers/pin_list';
import TripList from '../containers/trip_list';

class App extends Component {
  renderContent = (tab) => {
    console.log(tab);
    switch(tab) {
      case 'guides': {
        return <TripList user_name={this.props.match.params.user_name}/>
      };
      case 'pins': {
        return <PinList user_name={this.props.match.params.user_name}/>
      };
      default: return <PinList user_name={this.props.match.params.user_name}/>;
    }
  }

  render() {
    return (
      <div className="profile-container">
        <div className="profile-summary">
        </div>
        <TabsList user_name={this.props.match.params.user_name} selectedTab={this.props.match.params.tab}/>
        {this.renderContent(this.props.match.params.tab)}
      </div>
    );
  }
};

export default App;
