
'use strict';

import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'

// internal
import { viewStyles } from '../config/Styles'

class Body extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <View>
             {this.props.testMenu}
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

module.exports = Body