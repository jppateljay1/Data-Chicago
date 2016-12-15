
'use strict';

import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'

// internal
import { viewStyles } from '../config/Styles'

class Footer extends Component{
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
        height: viewStyles.footer.height,
        backgroundColor: "red",
    }
})

module.exports = Footer