
// login for facebook

import React, { Component } from 'react';
import { View } from 'react-native';

import { LoginButton } from 'react-native-fbsdk';

class FBButton extends Component {

    constructor (props){
        super(props)
        this.state = {
            FBLoginAccessToken: null
        }
    }

    render(){
        return(
            <View>
                <LoginButton
                    publishPermissions={["publish_actions"]}
                    onLoginFinished={(error, result) => {
                        if(error) {
                            console.log(error)
                        } else if (result.isCancelled) {
                            console.log ('login was cancelled' + result.isCancelled)
                        } else {
                            console.log ("login successfull");
                            //this.props.callBack();
                        }
                    }}
                    onLogoutFinished={() => console.log("User logged out")}/>
            </View>
        )
    }
 }

module.exports = FBButton