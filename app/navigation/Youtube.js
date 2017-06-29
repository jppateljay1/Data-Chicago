'use strict';

import React, { Component } from 'react';
import { Dimensions, WebView } from 'react-native';

class Youtube extends Component{
  constructor(props){
    super(props)
  }
  render(){
    const window = Dimensions.get('window');
    const height = window.width
    const width = window.width - 20
    const url = "https://www.youtube.com/embed/" + this.props.url + "?rel=0&autoplay=0&showinfo=0&controls=0";
    const htmlToInject = '<html><body><iframe width='+width+ ' height=' + height + ' src=' + url + ' frameborder="0" ></iframe></body></html>';

    return(
        <WebView
          scrollEnabled={false}
          scalesPageToFit={false}
          source={{ html: htmlToInject }}
        />
    );
  }
}

export default Youtube
