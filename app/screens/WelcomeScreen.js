import React from 'react';
import { StyleSheet, View } from 'react-native';



import colors from '../config/colors';
import UiButton from '../components/UiButton';
import UiLogo from '../components/UiLogo';





function WelcomeScreen({navigation}) {
    

    

    return (
       <View style={styles.background}>
           <View style={styles.logocontainer}>
                <UiLogo/>
           </View>
           

           
           
        <View style={styles.buttoncontainer}>

        <UiButton title='GELDANLAGE NEU ERLEBEN!' navigateTo={'Menu'} />         
        </View>
       
        
       </View>
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
},     
})

export default WelcomeScreen;