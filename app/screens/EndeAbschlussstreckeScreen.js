import React from 'react';
import { View, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

import colors from '../config/colors';
import UiText from '../components/UiText';

function EndeAbschlussstreckeScreen({route}) {
    const {date} = route.params;
    
    return (
        <View style={styles.background} >
            <View style={styles.titleContainer}>

            <UiText style={styles.title}>Ihr Termin findet am {JSON.stringify(date)} statt!</UiText>
            </View>
            <View style={styles.qrCodeContainer}>
                <QRCode color={colors.primary} size={200} backgroundColor={colors.white} value='https://www.union-investment.de/startseite'/>
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
    qrCodeContainer:{
        position: 'absolute',
        top: 175,
        left:'40%',
        

    },
    
    
})
export default EndeAbschlussstreckeScreen;
