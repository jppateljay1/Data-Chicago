
// handles all the navigaton for the app

import React, { Component } from 'react';
import { StyleSheet, Text, View, Navigator } from 'react-native';

// internal module
import MapScreen from '../screens/MapScreen'
import FBButtonScreen from '../screens/FBButtonScreen'
import SideMenu from '../../app/components/SideMenu'
import Youtube from './Youtube'

// make changes to ControlPanel.js to display Youtube instead of FBButtonScreen

class AppNavigator extends Component {

  _renderScene(route, navigator) {

    // gets passed into each screen to reference it back
    var globalNavigatorProps = {navigator}

    switch(route.ident) {
      case "MapScreen":
      return(
        <MapScreen {...globalNavigatorProps} />
      )

      case "FBButtonScreen":
      return(
        <FBButtonScreen {...globalNavigatorProps} />
      )

      case 'Youtube':
      return(
        <Youtube url={'WLlK1LRj7aI'} {...globalNavigatorProps} />
      )

      case "SideMenu":
      return(
        <SideMenu {...globalNavigatorProps} />
      )

      default: // kind of like 404, if nothing exist, then back to home page
        return(
          <Text style={styles.wrongPageStyle}>{'Yo you messed something up'}</Text>
        )
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={this.props.initialRoute}
        ref="appNavigator"
        style={styles.navigatorStyles}
        renderScene={this._renderScene}
        configureScene={(route) => ({
          ...route.sceneConfig || Navigator.SceneConfigs.FloatFromRight
        })}
        />
    );
  }

}

const styles = StyleSheet.create({
  navigatorStyles: {

  },
  wrongPageStyle: {
    marginTop: 40
  }
});

module.exports = AppNavigator;
