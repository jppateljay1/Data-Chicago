
'use strict';

import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'

// internal
import { viewStyles } from '../config/Styles'

console.log("viewStyles", viewStyles)

class Header extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <View style={styles.headerStyle}>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerStyle:{
        paddingTop: 20,
        height: viewStyles.header.height,
        backgroundColor: "black",
    }
})

module.exports = Header