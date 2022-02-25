import React, {useState, useRef} from 'react';
import {StyleSheet, Text, TouchableNativeFeedback, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FocusContext } from 'react-native-tvfocus';
import {  useIsFocused } from '@react-navigation/native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';
import 'moment/locale/de';

import colors from '../config/colors';
import UiSideBar from '../components/UiSideBar';
import calendarconfig from '../config/Calendarconfig';
import UiCard from '../components/UiCard';
import UiText from '../components/UiText';
import UiButton from '../components/Buttons/UiButton';



function AbschlussstreckeScreen() {

    const active = useIsFocused();
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isDatePicked, setDatePicked] = useState(false);
    const [date, setDate] = useState("");
    const navigation = useNavigation();
   

    const showDatePicker = () => {
        setDatePickerVisibility(true);
        
      };
    
      const hideDatePicker = () => {
        setDatePickerVisibility(false);
      };
    
      const handleConfirm = (date) => {
        moment.locale();
        const formattedDate = moment(date).format('LLL');  
        setDate(formattedDate);
        hideDatePicker();
        setDatePicked(true);
        console.log(date);
      };

      const DatePickerButton = () => {

        
          return(
        <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple(colors.white,false,120)} onPress={showDatePicker}>
        <View style={styles.focusedbutton}>

            <UiText>
                Jetzt einen Termin vereinbaren!
            </UiText>
        </View>
       </TouchableNativeFeedback>
          );
      }

      const DatePicker = () =>{
          return(
            <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple(colors.black,false,60)} >
            <View style={styles.calendarcontainer}>
 
            <DateTimePickerModal isVisible={isDatePickerVisible} mode="datetime"
         onConfirm={handleConfirm}
         onCancel={hideDatePicker}/>
            </View>
            </TouchableNativeFeedback>
          );
      }

      const NavigationButton = () => {
           return( <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple(colors.white,false,120)} onPress={() => navigation.navigate('EndeAbschlussstrecke',{date:date}) }>
           <View style={styles.focusedbutton}>
   
               <UiText>
                   Zu Ihrem Termin
               </UiText>
           </View>
          </TouchableNativeFeedback>);
      }

    return (
        <FocusContext active={active}>

       <View style={styles.container}>

           <UiSideBar/>
           <View style={styles.titleContainer}>

           <UiText style={styles.title} >
           Jetz bequem einen Termin mit Ihrem Bankberater vereinbaren!
           </UiText>
           </View>
           {isDatePickerVisible ? <DatePicker/> : null}
           <View style={styles.cardcontainer}>

           <UiCard image={require("../assets/pexels-thirdman-5058925.jpg")} subTitle={'John Doe'} title={'Ihr Bankberater'}/>
           </View>
        
           <View style={styles.continuebuttoncontainer}>
               {isDatePicked ? <NavigationButton/> : <DatePickerButton/>}
           </View>
       </View>
        </FocusContext>
       
    );
}

const styles = StyleSheet.create({
    backbuttoncontainer:{
        width: "100%",
        height:70,
        position: 'absolute',
        top: 450,
        left:200,
    },
    cardcontainer:{
        flex:1,
        justifyContent:"center",
        position:'absolute',
        left: '40%',
        top: 100
    },
    container: {
        flex: 1,
        backgroundColor: colors.white,
        flexDirection: "column",
      justifyContent:"center"
        

    },
    calendarcontainer:{
        flex:1,
        justifyContent:"center",
        position:'absolute',
        left: 500,
        top: 100
    },
    calendar:{
        backgroundColor: colors.primary,
        color: colors.white,
       
    },
    continuebuttoncontainer:{
        width: "100%",
        height:70,
        position: 'absolute',
        top: 450,
        left:'35%',
    },
    focusedbutton:{
        backgroundColor: colors.secondary,
        borderRadius: 25,
        justifyContent: "center",
        alignItems:"center",
        padding: 15, 
        width: "30%"

    },
    title:{
        color: colors.primary,
        fontWeight: 'bold',

    },

    titleContainer:{

        position: 'absolute',
        top: 25,
        left: '25%'

    },

});

export default AbschlussstreckeScreen;