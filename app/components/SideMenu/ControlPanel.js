'use strict'

import React, { Component } from 'react';
import { Navigator, SwitchIOS, Text, View } from 'react-native' 

import styles from './styles';
import Button from './Button';
import AppNavigator from '../../navigation/AppNavigator'

// this.props.navigatorProps to access navigator from previous  

export default class ControlPanel extends Component {
  render() {
    console.log("control panel")
    return (
      <View style={styles.controlPanel}>
        <Text style={styles.controlPanelWelcome}>
          Control Panel
        </Text>
        <Button
          onPress={() => {
            this.props.closeDrawer();
          }}
          text="Close Drawer"
        />
        <Button
          onPress={() => {
            this.props.navigatorProps.push({
              ident: 'FBButtonScreen',
              sceneConfig: Navigator.SceneConfigs.FloatFromBottom
            })
          }}
          text="one"
        />
        <Button
          onPress={() => {
            <AppNavigator initialRoute={{ident: "MapScreen"}}/>
          }}
          text="two"
        />
      </View>
    )
  }
}