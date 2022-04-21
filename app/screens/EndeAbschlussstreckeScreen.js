import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

import colors from '../config/colors';
import UiText from '../components/UiText';
import UiButton from '../components/Buttons/UiButton';

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
            <View style={styles.backbuttonContainer}>
                <UiButton title={'Zum Menü'} navigateTo={'Menu'}/>
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
    backbuttonContainer:{
        width: "100%",
        height:70,
        position: 'absolute',
        top: 450,
        left:330,
    },
    title:{
        color: colors.primary,
        fontWeight: 'bold',

    },
    titleContainer:{

        position: 'absolute',
        top: 25,
        left: 300

    },
    qrCodeContainer:{
        position: 'absolute',
        top: 175,
        left:'40%',
        

    },
    
    
})
export default EndeAbschlussstreckeScreen;
