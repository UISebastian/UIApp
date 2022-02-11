import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { SvgXml } from 'react-native-svg';


import colors from '../config/colors';
import logoXML from '../assets/Xml/logoXml';

function BeratungsScreen() {
    return (
        <View styles={styles.container}>
            <SvgXml xml={logoXML}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        

    },
})

export default BeratungsScreen;