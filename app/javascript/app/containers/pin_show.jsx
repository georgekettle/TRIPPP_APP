import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Select from 'react-select';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import SimpleMap from './map';
import SelectedPinContent from './selected_pin_content';
import PinList from './pin_list';

import { fetchPin } from '../actions/index';
import { createPin } from '../actions';

import exploreIcon from '../../../assets/images/explore-icon.svg';

const navItems = [
  {
    text: "This Pin",
    class: "this-pin",
    id: "#this-pin"
  },
  {
    text: "Explore Nearby",
    class: "explore-nearby",
    id: "#explore-nearby"
  }
]

class PinShow extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      section: "this-pin"
    }
  }

  componentWillMount() {
    console.log("mounting pin show");
    console.log(this.props.match.params.id);
    this.props.fetchPin(this.props.match.params.id);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  // componentWillUpdate() {
  //   console.log("pin show component updating");
  // }

  componentWillReceiveProps(nextProps){
    console.log("pin show component receiving props");
    console.log(nextProps.match.params.id);
    if (nextProps.match.params.id !== this.props.match.params.id) {
      //call your api and update state with new props
      console.log("RENDER NOW");
      this.props.fetchPin(nextProps.match.params.id);
      window.scrollTo(0, 0);
    }
  }

  handleScroll = () => {
    const exploreNearby = this.myRef.current;
    var distanceToTop = exploreNearby.getBoundingClientRect().top;

    if (distanceToTop < 170) {
      this.setState({section: "explore-nearby"})
    } else {
      this.setState({section: "this-pin"})
    }
  }

  classes = (state) => {
    return (
      (state == this.state.section) ? "pin-show-nav-item show-nav-active" : "pin-show-nav-item"
    )
  }

  renderNavItems = (item) => {
    // var pins = trip["pins"];
    // var firstFour = pins.slice(0,4);
    return (
      <AnchorLink href={item.id} offset='160' className="pin-show-nav-link">
        <div className={this.classes(item.class)}>
          <h4 className="pin-show-nav-text">{item.text}</h4>
        </div>
      </AnchorLink>
    )
  }

  render() {
    return (
      <div className="pin-show-container" onScroll={this.handleScroll}>
        <div className="pin-show-content">
          <div className="pin-show-nav">
            {navItems.map(this.renderNavItems)}
          </div>
          <section id='this-pin'>
            <SelectedPinContent selectedPin={this.props.selectedPin}/>
          </section>
          <section id='explore-nearby' ref={this.myRef}>
            <div className="pin-show-page-divider">
              <img src={exploreIcon} />
              <h5 className="page-divider-header">Explore Nearby</h5>
            </div>
            <PinList selectedPin={this.props.selectedPin}/>
          </section>
        </div>
        <div className="pin-show-map">
          <SimpleMap selectedPin={this.props.selectedPin}/>
        </div>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    selectedPin: state.selectedPin,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createPin, fetchPin }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PinShow);

