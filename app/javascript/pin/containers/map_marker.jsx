import React, { Component } from 'react';

class MapMarker extends Component {
  componentWillMount() {
    console.log("MapMarker mounting")
  }

  componentWillUpdate() {
    console.log("MapMarker updating")
  }

  componentDidUpdate() {
    console.log("MapMarker did update")
  }

  render() {
    console.log("onHover true?");
    console.log(this.props);
    console.log(this.props.onHover);
    const classes = this.props.onHover ? "hovered-map-marker" : "map-marker";
    return (
      <div className={classes}></div>
    );
  }
}

export default MapMarker;
