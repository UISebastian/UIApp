import React from 'react';
import WebView from 'react-native-webview';
import {StyleSheet, View, Text} from 'react-native';
import UiButton from '../components/Buttons/UiButton';
import UiText from '../components/UiText';

function ImpressumScreen() {
    return (
        <View style={styles.background}>
            <View style={styles.textContainer}>

            <Text>Impressum</Text>
            <Text>Union Investment Privatfonds GmbH</Text>
            <Text>Weißfrauenstraße 7</Text>
            <Text>60311 Frankfurt am Main</Text>
            <Text>Postfach 16 07 63</Text>
            <Text>"60070 Frankfurt am Main"</Text>
            <Text>"Tel.: 069 58998-0"</Text>
            <Text>"Fax: 069 58998-9000"</Text>
            <Text>"E-Mail: service@union-investment.de"</Text>
            <Text>"Geschäftsführer"</Text>
            <Text>"Giovanni Gay, Andreas Köster, Klaus Riester, Jochen Wiesbach"</Text>
            <Text>"Aufsichtsratsvorsitzender"</Text>
            <Text>"Hans Joachim Reinke"</Text>
            <Text>"Aufsichtsbehörde"</Text>
            <Text>"Bundesanstalt für Finanzdienstleistungsaufsicht (BAFin)"</Text>
            <Text>"Marie-Curie-Str. 24-28"</Text>
            <Text>"60439 Frankfurt"</Text>
            <Text>"Tel.: 0228 4108-0"</Text>
            <Text>"Fax: 0228 4108-123"</Text>
            <Text>"Registergericht"</Text>
            <Text>"Amtsgericht Frankfurt am Main HRB 9073"</Text>
            <Text>"Umsatzssteuer-Identifikationsnummer"</Text>
            <Text>"DE 114105135"</Text>
            <Text>"Das Impressum gilt gleichsam für:"</Text>
            <Text>"den Instagram Kanal der Union Investment Privatfonds GmbH"</Text>
            <Text>"den Facebook Kanal der Union Investment Privatfonds GmbH"</Text>
            <Text>"den YouTube Kanal der Union Investment Privatfonds GmbH"</Text>
            </View>
            

            
            
            <View style={styles.backbuttonContainer}>
                <UiButton navigateTo={'Menu'} title={'Zum Menü'}/>
            </View>
        </View>
            
        
    );
}
const styles = StyleSheet.create({
    background:{
        
        alignItems:'center',
        justifyContent:'flex-end',
        flex:1
        
    },
    textContainer:{
        width:"100%",
        position:'absolute',
        bottom: 200,
        left:"40%"

        
    },
    backbuttonContainer:{
        width: "100%",
        height:70,
        position: 'absolute',
        bottom:50 ,
        left:"40%",
    },

})
export default ImpressumScreen;