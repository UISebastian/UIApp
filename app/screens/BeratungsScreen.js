import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { SvgXml } from 'react-native-svg';


import colors from '../config/colors';
import logoXML from '../assets/Xml/logoXml';
import UiText from '../components/UiText';

function BeratungsScreen() {
    return (
        <View styles={styles.container}>
            <UiText style={{color: colors.primary,left:300,top: 50}}>
                Wenn ein Backend gebaut wird - krachts!
            </UiText>
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
})

export default BeratungsScreen;