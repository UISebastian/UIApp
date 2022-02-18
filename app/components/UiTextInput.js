import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {FocusContext, Button, TouchableHighlight, Pressable, TouchableOpacity} from 'react-native-tvfocus';
import {useIsFocused} from '@react-navigation/native';

function UiTextInput(props) {
    const [number, onChangeNumber] = useState(null);
    const   minLength =5;
    const active = useIsFocused();
    

    return (
        <FocusContext active={active}>

        <View>
            <TextInput placeholder='Postleitzahl' onChangeText={onChangeNumber} value={ () => {if(number.length===minLength){number}else{alert("Bitte geben Sie eine korrekte Postleitzahl ein!")}}} autoFocus={true} keyboardType='numeric' maxLength={5}/>
            
        </View>
        </FocusContext>
    );
}

const styles = StyleSheet.create({
    
})

export default UiTextInput;