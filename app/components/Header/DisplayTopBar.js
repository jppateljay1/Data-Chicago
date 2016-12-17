'use strict'

import React, { Component } from 'react'
import { View } from 'react-native'

class DisplayTopBar extends Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <View style={this.props.topBarStyles}>
            </View>
        )
    }
}

module.exports = DisplayTopBar