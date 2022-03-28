import React from 'react';
import {StyleSheet, View} from 'react-native';

import UiText from '../components/UiText';

function ImpressumScreen() {
    return (
        <View style={styles.background} >
            <UiText>
                Impressum
            </UiText>
        </View>
    );
}
const styles = StyleSheet.create({
    background:{
        
        alignItems:'center',
        justifyContent:'flex-end',
        flex:1
        
    },
})
export default ImpressumScreen;
