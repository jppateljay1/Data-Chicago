
'use strict';

import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

//internal modules
import Body from '../components/Body'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Map from '../components/Map'
import { viewStyles } from '../config/Styles'

class MapScreen extends Component{

    constructor(props){
        super(props)
    }
    
    render(){
        return(
            <View>
                <Header />
                <Map styles={{bodyHeight: styles.bodyHeight}} />
                <Footer />
            </View>

        )
    }
}

const styles = StyleSheet.create({
    bodyHeight:{
        height: viewStyles.body.height
    }
})

module.exports = MapScreen