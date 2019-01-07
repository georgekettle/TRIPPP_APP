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
    const containerClasses = this.props.onHover ? "hovered-map-marker-container" : "map-marker-container";
    const markerClasses = this.props.onHover ? "hovered-map-marker" : "map-marker";
    const imgUrl = this.props.img;
    const divStyle = this.props.onHover ? { backgroundImage: 'url(' + imgUrl + ')' } : {};
    return (
      <div className={containerClasses}>
        <div className={markerClasses} style={divStyle}>
          <div className="arrow-down"></div>
        </div>
      </div>
    );
  }
}

export default MapMarker;
