
'use strict';

import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

import Drawer from 'react-native-drawer'

//internal modules
import FBButton from '../components/FBButton'
import { viewStyles } from '../config/Styles'

class FBButtonScreen extends Component{

    render(){
        console.log('FBButtonScreen')
        let body = <FBButton />
        return(
            <View>
                {body}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    bodyHeight: {
        height: viewStyles.body.height
    }
})

module.exports = FBButtonScreen