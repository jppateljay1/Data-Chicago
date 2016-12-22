
'use strict';

import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'

// internal
import DisplayTopBar from './DisplayTopBar'
import HeaderContent from './HeaderContent'
import { viewStyles } from '../../config/Styles'

class Header extends Component{
    constructor(props){
        super(props)
    }

    render(){
        console.log('Header')
        return(
            <View style={styles.headerContainer}>
                <DisplayTopBar topBarStyles={styles.topBarStyle} />
                <HeaderContent 
                    openDrawer={this.props.openDrawer.bind(this)} 
                    headerContentStyle={styles.headerContentStyle} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerContainer:{
        opacity: 1,
    },
    headerContentStyle:{
        flexDirection: 'row',
        height: viewStyles.header.height,
    },
    headerStyle:{
        height: viewStyles.header.height,
        backgroundColor: "black",
    },
    topBarStyle:{
        height: viewStyles.header.topBar,
    }
})

module.exports = Header