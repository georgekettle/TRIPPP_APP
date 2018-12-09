import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { selectTab } from '../actions/index';

const tabs = ['guides', 'pins'];

class TabsList extends Component {
  defineSelectedTab = (value) => {
    if (typeof(value) !== 'undefined' || value != null) {
      return value
    } else {
      return 'guides'
    }
  }

  renderTab = (tab) => {
    return(
      <li
        className={tab === this.defineSelectedTab(this.props.selectedTab) ? 'tab selected-tab' : 'tab'}
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
