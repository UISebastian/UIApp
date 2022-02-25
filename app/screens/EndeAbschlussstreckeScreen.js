import React from 'react';
import { View, StyleSheet } from 'react-native';

import colors from '../config/colors';
import UiText from '../components/UiText';

function EndeAbschlussstreckeScreen({route}) {
    const {date} = route.params;
    
    return (
        <View style={styles.background} >
            <View style={styles.titleContainer}>

            <UiText style={styles.title}>Ihr Termin findet am {JSON.stringify(date)} statt!</UiText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    background:{
        flex: 1,
        backgroundColor: colors.white,
        flexDirection: "column",
      justifyContent:"center"
    },
    title:{
        color: colors.primary,
        fontWeight: 'bold',

    },
    titleContainer:{

        position: 'absolute',
        top: 25,
        left: '25%'

    },
    
    
})
export default EndeAbschlussstreckeScreen;
