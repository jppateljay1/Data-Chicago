
'use strict';

import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { SideMenu, List, ListItem } from 'react-native-elements'

import MapScreen from '../screens/MapScreen'
import FBButton from '../components/FBButton'
import App from './App'

const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
]

class SideMenuBar extends Component{
    constructor (props) {
    super(props)
    this.state = { toggled: false }
    }

    toggleSideMenu () {
    this.setState({
        toggled: !this.state.toggled
    })
    }

    render () {
    // SideMenu takes a React Native element as a prop for the actual Side Menu
    const MenuComponent = (
        <View style={{flex: 1, backgroundColor: '#ededed', paddingTop: 50}}>
        <List containerStyle={{marginBottom: 20}}>
        {
            list.map((item, i) => (
            <ListItem
                roundAvatar
                onPress={() => console.log('something')}
                avatar={{uri:item.avatar_url}}
                key={i}
                title={item.name}
                subtitle={item.subtitle} />
            ))
        }
        </List>
        </View>
    )
        return (
            <View style={styles.container}>
                <FBButton />
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

module.exports = SideMenuBar