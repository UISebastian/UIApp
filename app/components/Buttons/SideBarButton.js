import React from 'react';
import { TouchableNativeFeedback, View, StyleSheet } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';

import UiText from '../UiText';
import colors from '../../config/colors';


function SideBarButton({ text,style, xml, onPress}) {
    

    return (
        <TouchableNativeFeedback  background={TouchableNativeFeedback.Ripple(colors.white,false,120)} onPress={onPress}>
        <View style={style}>
            <SvgXml xml={xml}/>
            <UiText style={styles.text}>
            {text}
            </UiText>
        </View>
    </TouchableNativeFeedback>
            
        
    );
}

const styles = StyleSheet.create({
    text:{
        fontSize: 10,
    },

})

export default SideBarButton;