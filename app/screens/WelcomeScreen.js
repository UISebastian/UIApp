import React, { useRef } from 'react';
import { StyleSheet, TouchableNativeFeedback, View } from 'react-native';
import {FocusContext} from 'react-native-tvfocus';
import {useIsFocused} from '@react-navigation/native';



import colors from '../config/colors';
import UiButton from '../components/Buttons/UiButton';
import UiLogo from '../components/UiLogo';





function WelcomeScreen({navigation}) {
    
    const active = useIsFocused();
    

    

    return (
    <FocusContext active={active}>

       <View style={styles.background}>
           <View style={styles.logocontainer}>
                
                <UiLogo/>

                
           </View>
           

           
           
        <View style={styles.buttoncontainer}>

        <UiButton hasTVPreferredFocus={true} title='GELDANLAGE NEU ERLEBEN!' navigateTo={'Menu'} />         
        </View>
       
        
       </View>
    </FocusContext>
    );
}

const styles = StyleSheet.create({
background:{
        backgroundColor: colors.white,
        alignItems:'center',
        justifyContent:'flex-end',
        flex:1
        
    },
logocontainer:{
    position: 'absolute',
    top: 100,
    alignItems:"center",
    width:200,
    height:75,
    

},    
logo:{
    flex:1
    
},    
buttoncontainer:{
    width: "100%",
    height:70,
    position: 'absolute',
    top: 400,
    alignItems:"center",
    overflow:"hidden",
    borderRadius:25,
},     
})

export default WelcomeScreen;