'use strict'

import React, { Component } from 'react';
import { View } from 'react-native';

import SliderJS from 'react-native-slider';

import styles from './styles';
import Button from './Button';
import MapScreen from '../../app/screens/MapScreen'

class MyMainView extends Component {
  setParentState(args){
    this.props.setParentState(args)
  }

  render(){
    // this is where the app navigator goes
    // instead of <MapScreen />
    return (
      <View>
        <Button
              onPress={this.props.openDrawer}
              text="Open Drawer" />
        <MapScreen /> 
      </View>
    )
  }
}
module.exports = MyMainView