import React from 'react';
import { TouchableNativeFeedback, StyleSheet, View } from 'react-native';

import UiText from './UiText';
import colors from '../config/colors';

function SideBarText({text, onPress, style}) {
    return (
       <View style={style}>

        <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple(colors.white,false,20)} onPress={onPress}>
            <UiText>
                {text}
            </UiText>
            
        </TouchableNativeFeedback>
       </View> 
    );
}

const styles = StyleSheet.create({
    
})

export default SideBarText;