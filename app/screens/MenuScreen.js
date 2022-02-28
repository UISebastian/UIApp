import React, {useRef, useState} from 'react';
import { StyleSheet,View, Dimensions} from 'react-native';
import { Video,AVPlaybackStatus } from 'expo-av';
import {useIsFocused} from '@react-navigation/native';
import { FocusContext } from 'react-native-tvfocus';



import colors from '../config/colors';
import UiSideBar from '../components/UiSideBar';


function MenuScreen() {
 

const [videoStatus, setVideoStatus] = useState({});
const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');



    

    return (
      

      <View style={styles.container}>
        
      <View style= {styles.videoContainer}>

      <Video rate={1.0} volume={1.0} isMuted={false}  shouldPlay isLooping style={{width:width , height:height}}  shouldPlay source={{uri: 'https://cdn.dev.dam.union-investment.de/_spielwiese/original/1599_TVC_2_30_Handy_Fitness_Mofa_Nachhaltig_CL_16_9_R128.mp4'}}/>     
      </View>
        

        
        
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
    videoContainer:{
      position:"absolute",
      top: 0,
      left: 0,
      flex:1,
      
      
      
      
    },
   
  });

export default MenuScreen;