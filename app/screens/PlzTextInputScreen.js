import React, {useState, useRef} from 'react';
import {View, StyleSheet, TextInput} from 'react-native'
import {useIsFocused} from '@react-navigation/native';
import { FocusContext } from 'react-native-tvfocus';
import { useNavigation } from '@react-navigation/native';


import colors from '../config/colors';
import UiButton from '../components/Buttons/UiButton';
import UiText from '../components/UiText';

function PlzTextInputScreen(props) {
const active = useIsFocused();   
const [number, onChangeNumber] = useState("");
const  minLength =5;
const ref = useRef();


const endEditing = () => {
    
    if(number.length != minLength){
    
        alert('Bitte geben Sie eine gültige Postleitzahl ein');
        ref.current.focus();
    }

}


 


    return (
        <FocusContext active={active}>

        <View style={styles.background}>
            <View style={styles.titleContainer}>
                <UiText style={styles.title}>Ihre Postleitzahl</UiText>
            </View>
            <View style={styles.inputContainer}>

            <TextInput ref={ref} placeholder='Bitte geben Sie Ihre Postleitzahl an' style={styles.inputText} onEndEditing={endEditing} returnKeyType="send"  onChangeText={onChangeNumber} value={number} autoFocus={true} keyboardType='numeric' maxLength={5}/>
            </View>
            <View style={styles.backbuttonContainer}>
                <UiButton hasTVPreferredFocus={false} title={'Zurück'} navigateTo={'Menu'}></UiButton>
            </View>
            <View style={styles.forwardbuttonContainer}>
                <UiButton  hasTVPreferredFocus={false} title={'Zu Ihrem Berater'} navigateTo={'EndeAbschlussstrecke'}></UiButton>
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
    backbuttonContainer:{
        width: "100%",
        height:70,
        position: 'absolute',
        top: 450,
        left:200,
    },
    forwardbuttonContainer:{
        width: "100%",
        height:70,
        position: 'absolute',
        top: 450,
        left:500,
    },
    inputContainer:{
        position: 'absolute',
        top: 200,
        left: '48%',
        alignItems:"center",
        width:250,
        height:75,
        
    
    },
    inputText:{
        fontSize: 18, 
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
        color: colors.primary,
    },
    title:{
        color: colors.primary,
        fontWeight: 'bold',
    },
    titleContainer:{

        position: 'absolute',
        top: 25,
        left: '45%'

    },

})

export default PlzTextInputScreen;