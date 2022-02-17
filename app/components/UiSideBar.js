import React, {useRef, useState} from 'react';
import { View, StyleSheet, TouchableNativeFeedback, DrawerLayoutAndroid, FlatList } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { FocusContext } from 'react-native-tvfocus';

import sparschweinXML from '../assets/Xml/sparschweinXml';
import telefonhoererXML from '../assets/Xml/telefonhoererXml';
import colors from '../config/colors';
import menuXml from '../assets/Xml/menuXml';
import leftArrowXml from '../assets/Xml/leftArrowXml';
import SideBarButton from './Buttons/SideBarButton';

const DATA =[{
    id: 0,
    text: "Individuelle Beratung",
    navigateTo: 'Abschlussstrecke',
    style: {

        width:50,
        height:50,
        left: 20,
    },
    xml: sparschweinXML
},
{
    id:1,
    text:"",
    navigateTo:'',
    style:{

        width:50,
        height:50,
        left: 20,
    },
    xml: leftArrowXml
},
{
    id:2, 
    text:"Persönliche Videokonferenz",
    navigateTo:'',
    style: {

        width:50,
        height:50,
        left: 20,
    },
    xml: telefonhoererXML
},
];

function UiSideBar() {
const navigation = useNavigation();
const active = useIsFocused(); 
const drawer = useRef(null);
const [drawerPosition, setDrawerPosition] = useState("left");

const renderItem = ({text, onPress, style, xml}) => (
    <SideBarButton text={text} style={style} xml={xml} onPress={onPress}/>
);

const navigationView = () => (
    <TouchableNativeFeedback>
        <FlatList data={DATA}
        renderItem={renderItem}
        keyExtractor={renderItem => renderItem.id}/>
    </TouchableNativeFeedback>


   
);


    return (
        

        <FocusContext active={active}>
            
            <TouchableNativeFeedback>

            <DrawerLayoutAndroid ref={drawer} drawerWidth={100}
            drawerPosition={drawerPosition}
            renderNavigationView={navigationView}>
                <View style={styles.container}>
                    <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple(colors.primary,false,20)} onPress={() => drawer.current.openDrawer()}>
                        <View style={styles.iconcontainer}>
                        <SvgXml xml={menuXml} style={styles.icons}/>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </DrawerLayoutAndroid>
                
                </TouchableNativeFeedback>
       
        </FocusContext>
        
        
    );
}

const styles = StyleSheet.create({
    background:{
        backgroundColor: colors.primary,
        width:100,
        height:"100%",
        justifyContent:"space-evenly"
    },
    container:{
      justifyContent:"center",
      position:"absolute",
      left: 20,
      top: 250  
    },

    iconcontainer:{

        width:50,
        height:50,
        left: 20,
    },

    icons:{
        flex:1,
        
        
    },
    
});


export default UiSideBar;