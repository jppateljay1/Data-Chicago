
'use strict';

import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'

// internal
import { viewStyles } from '../config/Styles'

class Body extends Component{
    
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
    }
})

module.exports = Body