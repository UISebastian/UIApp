import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import colors from '../config/colors';
import UiText from './UiText';

function UiCard({title, subTitle, image }) {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={image}/>
            <View style={styles.detailscontainer}>

            <UiText style={styles.title}>
                {title}
            </UiText>
            <UiText style={styles.subtitle}>
                {subTitle}
            </UiText>
                
            </View>
        </View>
            
        
    );
}

const styles = StyleSheet.create({
    card:{
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 30,
        overflow:'hidden',
        
    },
    image:{
        width: "100%",
        height: 200,
        
    },
    detailscontainer:{
        padding: 40

    },
    title:{
        marginBottom: 7,
        color: colors.primary
    },
    subtitle:{
        color:colors.secondary,
        fontWeight:'bold',
    },
})

export default UiCard;