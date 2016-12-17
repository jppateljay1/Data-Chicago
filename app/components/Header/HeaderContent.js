'use strict'

import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

class HeaderContent extends Component{
    render(){
        return(
            <View style={this.props.headerContentStyle}>
                <View style={styles.menuBarStyle}>
                    <Icon
                        onPress={this.props.openDrawer}
                        style={styles.iconStyle}
                        name="bars"
                        size={38}>
                    </Icon>
                </View>
                <View>
                    <Text style={styles.textStyle}> Data Chicago </Text>
                </View>
                <View style={styles.bellStyle}>
                    <Icon
                        style={styles.iconStyle}
                        name="bell"
                        size={20}>
                    </Icon>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    bellStyle:{
        marginTop: 12,
        marginLeft: 34
    },
    iconStyle:{
        marginLeft: 15
    },
    menuBarStyle:{
        width: 50
    },
    textStyle:{
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 5,
        marginLeft: 50
    }
})

module.exports = HeaderContent