import React from 'react';
import { TouchableNativeFeedback, View, StyleSheet } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';

import UiText from '../UiText';
import colors from '../../config/colors';


function SideBarButton({ text,style, xml, onPress}) {
    

    return (
        <View style={[style, text ==='' ? styles.buttonWithOutText : null]}>
            <TouchableNativeFeedback  background={TouchableNativeFeedback.Ripple(colors.white,false,20)} onPress={onPress}>
            <SvgXml style={{position:"relative", left:-30}} xml={xml}/>
    </TouchableNativeFeedback>
            <UiText style={styles.text}>
                {text}
            </UiText>
        </View>
            
        
    );
}

const styles = StyleSheet.create({
    text:{
        fontSize: 10,
        position:'relative',
        left: 70,
        bottom: 25,
        textAlign:"right",
        
        
        
    },
    buttonWithOutText:{
        width:20,
        height:20,
        left: 230,
        alignContent:"center",
        position:"relative",
        

    },

})

export default SideBarButton;