import React from 'react';
import WebView from 'react-native-webview';
import {StyleSheet} from 'react-native';

function ImpressumScreen() {
    return (
        <WebView style={styles.background} source={{uri: "https://www.union-investment.de/startseite/impressum-UIP"}}>
            
        </WebView>
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