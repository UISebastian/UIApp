import React from 'react';
import { Text, StyleSheet} from 'react-native';

import colors from '../config/colors';

function UiText({children, style}) {
    return (
        <Text style ={[styles.text, style]}>
            {children}
        </Text>
    );
}

const styles = StyleSheet.create({
    text:{
        fontSize: 18, 
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
        color: colors.white,
    },
    
});

export default UiText;