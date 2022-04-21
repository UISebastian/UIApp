import React, {useCallback, useState} from 'react';
import { StyleSheet, TouchableNativeFeedback, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {FocusContext, Button, TouchableHighlight, Pressable, TouchableOpacity} from 'react-native-tvfocus';
import {useIsFocused} from '@react-navigation/native';


import colors from '../../config/colors';
import UiText from '../UiText';




function UiButton({title, navigateTo, hasTVPreferredFocus, params}) {

 
    
const navigation = useNavigation();
const active = useIsFocused();    



    return (
        
          <FocusContext active={active}>

        <TouchableNativeFeedback   background={TouchableNativeFeedback.Ripple(colors.white,false,120)} onPress={() => navigation.push(navigateTo,{date: params})}>
            <View style={styles.focusedbutton}>

            <UiText>
                {title}
            </UiText>
            </View>
        </TouchableNativeFeedback>
          </FocusContext>
        
           
      

      

    
        
        
        
    );
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: colors.primary,
        borderRadius: 25,
        justifyContent: "center",
        alignItems:"center",
        padding: 15, 
        width: "30%"
    
    }, 
    focusedbutton:{
        backgroundColor: colors.secondary,
        borderRadius: 25,
        justifyContent: "center",
        alignItems:"center",
        padding: 15, 
        width: "30%"

    }
    
});

export default UiButton;