import React, { Component } from 'react';

class AlertsOverlayComponent extends Component {
  render() {
    var {alerts, children, style} = this.props;

    var renderAlerts = function() {
      return alerts.map(function(alert) {
        return React.cloneElement(children, {alert: alert, key: alert.id});
      });
    }

    return (
      <div className="react-alerts-overlay-component-container">
        {renderAlerts()}
      </div>
    );
  }
};

export default AlertsOverlayComponent;
