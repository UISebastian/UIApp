import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';

import sparschweinXML from '../assets/Xml/sparschweinXml';
import telefonhoererXML from '../assets/Xml/telefonhoererXml';
import colors from '../config/colors';

function UiSideBar() {
const navigation = useNavigation();

    return (
        <View style={styles.background}>
            <TouchableOpacity style={styles.iconcontainer} onPress={() => navigation.navigate('Abschlussstrecke')}>
                <SvgXml xml={sparschweinXML} style={styles.icons}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconcontainer} onPress={() => navigation.navigate('Beratung')}>

            <SvgXml xml={telefonhoererXML} style={styles.icons}/>
            </TouchableOpacity>
            
          </View>
        
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
        flex:1
    },
    
});


export default UiSideBar;