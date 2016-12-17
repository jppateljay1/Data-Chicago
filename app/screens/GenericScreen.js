
'use strict';

import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

import Drawer from 'react-native-drawer'

//internal modules
import Body from '../components/Body'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { viewStyles } from '../config/Styles'

class MapScreen extends Component{

    render(){
        return(
            <View>
                <Header openDrawer={this.props.openDrawer.bind(this)} />
                <Body content={this.props.content} />
                <Footer />
            </View>

        )
    }
}

const styles = StyleSheet.create({
    bodyHeight:{
        height: viewStyles.body.height
    }
})

module.exports = MapScreen