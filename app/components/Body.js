
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

// 7plus 6 plus, note 4(50-100)

const styles = StyleSheet.create({
    bodyStyle:{
        height: viewStyles.body.height,
    }
})

module.exports = Body