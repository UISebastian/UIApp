import React, {useState} from 'react';
import {StyleSheet, Text, TouchableNativeFeedback, View} from 'react-native';
import { Calendar } from 'react-native-calendars';
import { LocaleConfig } from 'react-native-calendars';
import { FocusContext } from 'react-native-tvfocus';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import DateTimePickerModal from "react-native-modal-datetime-picker";

import colors from '../config/colors';
import UiSideBar from '../components/UiSideBar';
import calendarconfig from '../config/Calendarconfig';
import UiCard from '../components/UiCard';
import UiButton from '../components/UiButton';
import UiText from '../components/UiText';



function AbschlussstreckeScreen() {

    const active = useIsFocused();
    const [isDatePickerVisible, setDatePickerVisibility] = useState(true);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
      };
    
      const hideDatePicker = () => {
        setDatePickerVisibility(false);
      };
    
      const handleConfirm = (date) => {
        alert("A date has been picked: ", {date} );
        hideDatePicker();
      };

    return (
        <FocusContext active={active}>

       <View style={styles.container}>

           <UiSideBar/>
           <View style={styles.titleContainer}>

           <UiText style={styles.title} >
           Jetz bequem einen Termin mit Ihrem Bankberater vereinbaren!
           </UiText>
           </View>
           <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple(colors.black,false,60)} >
           <View style={styles.calendarcontainer}>

           <DateTimePickerModal isVisible={isDatePickerVisible} mode="datetime"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}/>
           </View>
           </TouchableNativeFeedback>
           <View style={styles.cardcontainer}>

           <UiCard image={require("../assets/pexels-thirdman-5058925.jpg")} subTitle={'John Doe'} title={'Ihr Bankberater'}/>
           </View>
           <View style={styles.backbuttoncontainer}>
               <UiButton hasTVPreferredFocus={false} title={'Zurück'} navigateTo={'Menu'}></UiButton>
           </View>
           <View style={styles.continuebuttoncontainer}>
               <UiButton hasTVPreferredFocus={true} title={'Weiter'} navigateTo={'EndeAbschlussstrecke'}></UiButton>
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
        left: 200,
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
        left:500,
    },
    title:{
        color: colors.primary,
        fontWeight: 'bold',

    },

    titleContainer:{

        position: 'absolute',
        top: 25,
        left: 300

    },

});

export default AbschlussstreckeScreen;