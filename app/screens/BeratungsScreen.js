import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { SvgXml } from 'react-native-svg';


import colors from '../config/colors';
import logoXML from '../assets/Xml/logoXml';
import UiText from '../components/UiText';
import UiButton from '../components/Buttons/UiButton';

function BeratungsScreen() {
    return (
        <View styles={styles.container}>
            <UiText style={{color: colors.primary,left:300,top: 50}}>
                Hier wird der Anruf zu sehen sein!
            </UiText>
            <View style={styles.backbuttonContainer}>
                <UiButton title={'Zum Menü'} navigateTo={'Menu'}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        position:'absolute',
        left:'45%',
        

    },
    backbuttonContainer:{
        width: "100%",
        height:70,
        position: 'absolute',
        top: 450,
        left:330,
    },
})

export default BeratungsScreen;