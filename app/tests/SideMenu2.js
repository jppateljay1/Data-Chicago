
'use strict';

import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { SideMenu, List, ListItem } from 'react-native-elements'

import MapScreen from '../screens/MapScreen'
import App from './App'
import ControlPanel from './ControlPanel'


import Drawer from 'react-native-drawer'

class SideMenu2 extends Component {  
    constructor(props){
        super(props)
    }
  closeControlPanel = () => {
    this._drawer.close()
  };
  openControlPanel = () => {
    this._drawer.open()
  };
  render () {
    return (
      <Drawer
  type="overlay"
  content={<ControlPanel />}
  tapToClose={true}
  openDrawerOffset={0.2} // 20% gap on the right side of drawer
  panCloseMask={0.2}
  closedDrawerOffset={-3}
  styles={drawerStyles}
  tweenHandler={(ratio) => ({
    main: { opacity:(2-ratio)/2 }
  })}
  >
    <App />
</Drawer>
    )
  }
}

const drawerStyles = {
  drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
  main: {paddingLeft: 3},
}


module.exports = SideMenu2