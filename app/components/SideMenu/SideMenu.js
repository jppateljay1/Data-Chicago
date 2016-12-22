'use strict'

import React, { Component } from 'react';
import { Text, View} from 'react-native';

import Drawer from 'react-native-drawer';
import MyMainView from './MyMainView';
import MyControlPanel from './ControlPanel';
import tweens from './tweens';

const drawerStyles = {
  drawer: {
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 0,
  }
}

let counter = 0;
class SideMenu extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      drawerType: 'overlay',
      openDrawerOffset:100,
      closedDrawerOffset:0,
      panOpenMask: .1,
      panCloseMask: .9,
      relativeDrag: false,
      panThreshold: .25,
      tweenHandlerOn: false,
      tweenDuration: 350,
      tweenEasing: 'linear',
      disabled: true,
      tweenHandlerPreset: 'material',
      acceptDoubleTap: false,
      acceptTap: false,
      acceptPan: true,
      tapToClose: false,
      negotiatePan: false,
      rightSide: false,
    };
  }

  setDrawerType(type){
    this.setState({
      drawerType: type
    })
  }

  tweenHandler(ratio){
    if(!this.state.tweenHandlerPreset){ return {} }
    return tweens[this.state.tweenHandlerPreset](ratio)
  }

  noopChange(){
    this.setState({
      changeVal: Math.random()
    })
  }

  openDrawer(){
    this.drawer.open()
  }

  setStateFrag(frag) {
    this.setState(frag);
  }

  render() {
    console.log("side menu")
    var controlPanel = <MyControlPanel 
                          navigatorProps={this.props.navigator} 
                          closeDrawer={() => {
                            this.drawer.close();
                          }} 
                        />
    return (
      <Drawer
        ref={c => this.drawer = c}
        type={this.state.drawerType}
        animation={this.state.animation}
        openDrawerOffset={this.state.openDrawerOffset}
        closedDrawerOffset={this.state.closedDrawerOffset}
        panOpenMask={this.state.panOpenMask}
        panCloseMask={this.state.panCloseMask}
        relativeDrag={this.state.relativeDrag}
        panThreshold={this.state.panThreshold}
        content={controlPanel}
        styles={drawerStyles}
        disabled={this.state.disabled}
        tweenHandler={this.tweenHandler.bind(this)}
        tweenDuration={this.state.tweenDuration}
        tweenEasing={this.state.tweenEasing}
        acceptDoubleTap={this.state.acceptDoubleTap}
        acceptTap={this.state.acceptTap}
        acceptPan={this.state.acceptPan}
        tapToClose={this.state.tapToClose}
        negotiatePan={this.state.negotiatePan}
        changeVal={this.state.changeVal}
        side={this.state.rightSide ? 'right' : 'left'}
        >
        <MyMainView
          openDrawer={this.openDrawer.bind(this)}/>
      </Drawer>
    );
  }
}

module.exports = SideMenu