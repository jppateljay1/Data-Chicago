
'use strict';

import { Dimensions } from 'react-native'

const window = Dimensions.get('window');

function getViewHeight(){
    
    function getFooterHeight(){
        return(Math.round(window.height * .04))
    }

    function getHeaderHeight(){
        return(Math.round(window.height * .1))
    }

    let ret = {}
    let headerHeight = getHeaderHeight();
    let footerHeight = getFooterHeight();
    let bodyHeight = window.height - (headerHeight + footerHeight)

    ret["headerHeight"] = headerHeight
    ret["footerHeight"] = footerHeight
    ret["bodyHeight"] = bodyHeight

    return ret
}

const viewHeight = getViewHeight();

export const viewStyles = {
    header: {
        height: viewHeight.headerHeight
    },
    body: {
        height: viewHeight.bodyHeight
    },
    footer:{
        height: viewHeight.footerHeight
    }
}