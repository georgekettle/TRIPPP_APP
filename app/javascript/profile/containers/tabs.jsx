import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { selectTab } from '../actions/index';

const tabs = ['guides', 'pins'];

class TabsList extends Component {
  // handleClick = (tab) => {
  //   this.props.selectTab(tab); // Will empty message list first
  //   // this.props.fetchMessages(channel);
  // }

  renderTab = (tab) => {
    return(
      <li
        className={tab === this.props.selectedTab ? 'tab selected-tab' : 'tab'}
        key={tab}
        // onClick={() => this.handleClick(tab)}
      >
        <Link to={`/profile/${this.props.user_name}/${tab}`}>
          {tab}
        </Link>
      </li>
    )
  }

  render() {
    return (
      <div className="tabs-container">
        <ul>
          {tabs.map(this.renderTab)}
        </ul>
      </div>
    );
  }
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ selectTab }, dispatch);
// }

// function mapStateToProps(state) {
//   return {
//     selectedTab: state.selectedTab,
//   };
// }

export default TabsList;
