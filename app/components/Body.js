
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
            <View style={styles.bodyStyle}>
             {this.props.content}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    bodyStyle:{
        height: viewStyles.body.height,
        backgroundColor: "black",
    }
})

module.exports = Body