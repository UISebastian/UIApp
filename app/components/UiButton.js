import React, { useCallback, useState } from 'react';
import { StyleSheet,TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';


import colors from '../config/colors';
import UiText from './UiText';
import { } from 'react-native-web';



function UiButton({title, navigateTo}) {
    
const navigation = useNavigation();
const [focus, setFocus] = useState(false);
const onFocus = () => setFocus(true);
    

const onBlur = () => setFocus(false);
    



    return (
        <TouchableHighlight style={[styles.button, focus ? styles.focusedbutton : null]} onFocus={onFocus} onBlur={onBlur} onPress={() => navigation.navigate(navigateTo)}>
            
      

        <UiText>
            {title}
        </UiText>

    
        </TouchableHighlight>
        
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