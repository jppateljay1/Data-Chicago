
'use strict';

import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'

import Drawer from 'react-native-drawer'

//internal modules
import GenericScreen from './GenericScreen'
import Map from '../components/Map'
import { viewStyles } from '../config/Styles'
import Youtube from '../navigation/Youtube'

class MapScreen extends Component{

    render(){
        console.log('MapScreen')
        let body = <Map bodyHeight={styles.bodyHeight}/>
        return(
            <GenericScreen
            openDrawer={this.props.openDrawer.bind(this)}
            content={body}/>
        )
    }
}

const styles = StyleSheet.create({
    bodyHeight: {
        height: viewStyles.body.height
    }
})

module.exports = MapScreen
