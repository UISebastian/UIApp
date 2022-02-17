import React from 'react';
import { TouchableNativeFeedback, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';

import UiText from '../UiText';


function SideBarButton({ text,style, xml, onPress}) {
    

    return (
        <TouchableNativeFeedback  background={TouchableNativeFeedback.Ripple(colors.white,false,120)} onPress={onPress}>
        <View style={style}>
            <SvgXml xml={xml}/>
            <UiText>
            {text}
            </UiText>
        </View>
    </TouchableNativeFeedback>
            
        
    );
}

export default SideBarButton;