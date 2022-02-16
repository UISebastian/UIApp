import React from 'react';
import { View, StyleSheet, TouchableNativeFeedback } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { FocusContext } from 'react-native-tvfocus';

import sparschweinXML from '../assets/Xml/sparschweinXml';
import telefonhoererXML from '../assets/Xml/telefonhoererXml';
import colors from '../config/colors';

function UiSideBar() {
const navigation = useNavigation();
const active = useIsFocused(); 

    return (
        

        <FocusContext active={active}>

        <View style={styles.background}>
            <TouchableNativeFeedback  background={TouchableNativeFeedback.Ripple(colors.white,false,20)}  onPress={() => navigation.navigate('Abschlussstrecke')} >
               

                <SvgXml xml={sparschweinXML} style={styles.icons}/>
                
            </TouchableNativeFeedback>
            <TouchableNativeFeedback   background={TouchableNativeFeedback.Ripple(colors.white,false,20)}  onPress={() => navigation.navigate('Beratung')} >
                

            <SvgXml xml={telefonhoererXML} style={styles.icons}/>
               
            </TouchableNativeFeedback>
            
          </View>
        </FocusContext>
        
        
    );
}

const styles = StyleSheet.create({
    background:{
        backgroundColor: colors.primary,
        width:100,
        height:"100%",
        justifyContent:"space-evenly"
    },
    iconcontainer:{

        width:50,
        height:50,
        left: 20,
    },

    icons:{
        flex:1,
        
        
    },
    
});


export default UiSideBar;