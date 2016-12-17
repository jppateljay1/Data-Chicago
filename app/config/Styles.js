
'use strict';

import { Dimensions } from 'react-native'

const window = Dimensions.get('window');

function getViewHeight(){
    
    function getFooterHeight(){
        return(Math.round(window.height * .04))
    }

    function getHeaderHeight(){
        return(Math.round(window.height * .08))
    }

    let ret = {}
    let headerHeight = getHeaderHeight();
    let footerHeight = getFooterHeight();
    let headerTopBarHeight = 30;
    let bodyHeight = window.height - (headerHeight + footerHeight + headerTopBarHeight)

    ret["headerHeight"] = headerHeight
    ret["footerHeight"] = footerHeight
    ret["bodyHeight"] = bodyHeight
    ret["headerTopBar"] = headerTopBarHeight

    return ret
}

const viewHeight = getViewHeight();

export const viewStyles = {
    header: {
        height: viewHeight.headerHeight,
        topBar: viewHeight.headerTopBar
    },
    body: {
        height: viewHeight.bodyHeight
    },
    footer:{
        height: viewHeight.footerHeight
    }
}