"use strict";

import React, { Component } from 'react';
import { PropTypes, StyleSheet } from 'react-native';
import MapView from 'react-native-maps'

class Map extends Component {

  static propTypes = {
      bodyHeight: React.PropTypes.node.isRequired,
  }
  
  constructor(props){
    super(props)
    this.state = {
      region: {
      latitude: 41.8345,
      longitude: -87.7994,
      latitudeDelta: 0.6139,
      longitudeDelta: 1.7248,
      },
    }
  } 

  onRegionChange = (region) => {
    this.setState({ region })
  }

  render() {
    //provider={"google"}
    return (
      <MapView
        region={this.state.region}
        onRegionChange={this.onRegionChange}
        style={this.props.bodyHeight}
        rotateEnabled={false}
      />
    );
  }                 
}

module.exports = Map