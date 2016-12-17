
'use strict';

import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'

// internal
import DisplayTopBar from './DisplayTopBar'
import HeaderContent from './HeaderContent'
import { viewStyles } from '../../config/Styles'

console.log("viewStyles", viewStyles)

class Header extends Component{
    constructor(props){
        super(props)
    }
    // <Button
    //     nPress={this.props.openDrawer}
    //     text="Open Drawer" />
    render(){
        return(
            <View>
                <DisplayTopBar topBarStyles={styles.topBarStyle} />
                <HeaderContent 
                    openDrawer={this.props.openDrawer.bind(this)} 
                    headerContentStyle={styles.headerContentStyle} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
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