import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

import Alert from './alert';
import AlertsOverlayComponent from '../components/alerts_overlay_component';

import { addAlert } from '../actions'

class Main extends Component {
  componentDidMount() {
    var {dispatch} = this.props;
    this.props.addAlert("Test alert!", "success-alert");
  }

  render() {
    var {alerts} = this.props;
    return (
      <div>
        <AlertsOverlayComponent alerts={alerts}>
          <Alert />
        </AlertsOverlayComponent>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    alerts: state.alerts
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addAlert }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
