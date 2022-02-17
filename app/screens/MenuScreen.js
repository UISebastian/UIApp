import React from 'react';
import { StyleSheet,View} from 'react-native';
import { WebView } from 'react-native-webview';
import {useIsFocused} from '@react-navigation/native';


import colors from '../config/colors';
import UiSideBar from '../components/UiSideBar';
import { FocusContext } from 'react-native-tvfocus';


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
  });

export default MenuScreen;