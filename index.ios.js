
"use strict";

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

// internal module
import AppNavigator from './app/navigation/AppNavigator'

export default class dataChicago extends Component {
  
  render() {
    return (
      <AppNavigator initialRoute={{ident: "SideMenu"}}/>
    )
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
