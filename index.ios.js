
"use strict";

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

// internal module
import FBButton from './app/components/FBButton'
import AppMap from './app/components/Map'
import MapScreen from './app/screens/MapScreen'
import SideMenu2 from './app/tests/SideMenu2'

export default class dataChicago extends Component {
  //style={styles.container}>
  
  render() {
    // <AppMap />
    // <FBButton />
    return (
      <MapScreen />
    );
  }                         
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('dataChicago', () => dataChicago);
