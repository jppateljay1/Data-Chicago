"use strict";

import React, { Component } from 'react';
import { PropTypes, StyleSheet } from 'react-native';
import MapView from 'react-native-maps'

class Map extends Component {

    static propTypes = {
        bodyHeight: React.PropTypes.node.isRequired,
    }
    
  render() {
    return (
        <MapView
          initialRegion={{
            latitude: 41.8345,
            longitude: -87.7994,
            latitudeDelta: 0.6139,
            longitudeDelta: 1.7248,
          }}
          style={this.props.bodyHeight}
          showsUserLocation={true}
        />
    );
  }                         
}

module.exports = Map