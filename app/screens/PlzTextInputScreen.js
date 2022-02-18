import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native'
import {useIsFocused} from '@react-navigation/native';
import { FocusContext } from 'react-native-tvfocus';

import UiTextInput from '../components/UiTextInput';
import colors from '../config/colors';

function PlzTextInputScreen(props) {
const active = useIsFocused();    


    return (
        <FocusContext active={active}>

        <View style={styles.background}>
            <View style={styles.inputContainer}>

            <UiTextInput/>
            </View>
            
        </View>
        </FocusContext>
    );
}

const styles = StyleSheet.create({
    

    background:{
        backgroundColor: colors.white,
        alignItems:'center',
        justifyContent:'flex-end',
        flex:1
        
    },
    inputContainer:{
        position: 'absolute',
        top: 100,
        alignItems:"center",
        width:200,
        height:75,
        
    
    },

})

export default PlzTextInputScreen;