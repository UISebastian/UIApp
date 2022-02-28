import React from 'react';
import { StyleSheet,View} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import { FocusContext } from 'react-native-tvfocus';



import colors from '../config/colors';
import UiSideBar from '../components/UiSideBar';


function MenuScreen() {
 
const active = useIsFocused();

    

    return (
      <FocusContext active={active}>

      <View style={styles.container}>
        

        
        
        <UiSideBar/>
        
      </View>
      </FocusContext>
        
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
      flexDirection: "column",
      justifyContent:"center"
      
    },
    webView:{
      
      
      
    },
    webViewContainer:{
      position:"absolute",
      top: 0,
      left:250,
      flex:1,

    }
  });

export default MenuScreen;