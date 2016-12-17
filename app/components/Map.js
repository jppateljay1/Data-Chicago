"use strict";

import React, { Component } from 'react';
import { MapView, PropTypes, StyleSheet } from 'react-native';

class Map extends Component {

    static propTypes = {
        bodyHeight: React.PropTypes.node.isRequired,
    }

    getMapStyle(){
        return(mapStyle = [
            {
                "featureType": "road.arterial",
                "elementType": "labels",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "road.local",
                "stylers": [{
                    "visibility": "off"
                }]
            }
        ])
    }
  
  render() {
    return (
        <MapView
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          customMapStyle={this.getMapStyle}
          style={this.props.bodyHeight}
          showsUserLocation={true}
        />
    );
  }                         
}

module.exports = Map