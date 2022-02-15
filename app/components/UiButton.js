import React, { useCallback, useState } from 'react';
import { StyleSheet,TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {FocusContext, Button} from 'react-native-tvfocus';
import {useIsFocused} from '@react-navigation/native';


import colors from '../config/colors';
import UiText from './UiText';




function UiButton({title, navigateTo}) {
    
const navigation = useNavigation();
const [focus, setFocus] = useState(false);
const onFocus = () => setFocus(true);
    

const onBlur = () => setFocus(false);
const active = useIsFocused();    



    return (
        <FocusContext active={active} >

        <Button title={title} style={styles.button} onPress={() => navigation.navigate(navigateTo)}>
            
      

      

    
        </Button>
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