import React from 'react';
import { View, StyleSheet } from 'react-native';
import WebView from 'react-native-webview';
import UiButton from '../components/Buttons/UiButton';

import colors from '../config/colors';

function DepotScreen(props) {
    return (
       

            <WebView style={styles.background} onLoad={() => console.log("Loaded")} source={{uri: 'https://service.meindepot.union-investment.de/auth/realms/union-investment/protocol/openid-connect/auth?client_id=dashboard-frontend&redirect_uri=https%3A%2F%2Fanlegen.meindepot.union-investment.de%2F%2Fdashboard&state=f7d7f17a-c196-4922-879f-87757fe4ce04&response_mode=fragment&response_type=code&scope=openid&nonce=2daf6030-f091-49a0-8069-9381687f425c&code_challenge=87Z1TgusbEGz8Kw-lWOZlLR-PyowHYw6myTsCQhNSpY&code_challenge_method=S256'}}>

            </WebView>
            

        
            
        
    );
}
const styles = StyleSheet.create({
    background:{
        
        
        flex:1
        
    },
    backbuttonContainer:{
        width: "100%",
        height:70,
        position: 'relative',
        top: 450,
        left:200,
    },
})
export default DepotScreen;