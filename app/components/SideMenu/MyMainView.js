'use strict'

import React, { Component } from 'react';
import { View } from 'react-native';

// import SliderJS from 'react-native-slider';

import styles from './styles';
import Button from './Button';
import MapScreen from '../../screens/MapScreen'
import AppNavigator from '../../navigation/AppNavigator'

class MyMainView extends Component {
  setParentState(args){
    this.props.setParentState(args)
  }

  render(){
    console.log('MyMainView')
    // this is where the app navigator goes
    // instead of <MapScreen />
    return (
      <View>
        <MapScreen openDrawer={this.props.openDrawer.bind(this)} /> 
      </View>
    )
  }
}
module.exports = MyMainView