import React from 'react';
import { StyleSheet,View} from 'react-native';
import { WebView } from 'react-native-webview';


import colors from '../config/colors';
import UiSideBar from '../components/UiSideBar';


function MenuScreen() {
    
    

    return (
      <View style={styles.container}>
        

        

        
        
        <UiSideBar/>
        
      </View>
        
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