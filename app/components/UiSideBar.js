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

        width:130,
        height:50,
        left: 20,
        alignContent:"center",
        
        
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
        alignContent:"center"
    },
    xml: leftArrowXml
},
{
    id:2, 
    text:"Persönliche Videokonferenz",
    navigateTo:'',
    style: {

        width:130,
        height:50,
        left: 20,
        alignContent:"center"
    },
    xml: telefonhoererXML
},
];

const Item = ({item, onPress}) => (
    <SideBarButton text={item.text} style={item.style} xml={item.xml} onPress={onPress}/>
);

function UiSideBar() {
const navigation = useNavigation();
const active = useIsFocused(); 
const drawer = useRef(null);
const [drawerPosition, setDrawerPosition] = useState("left");

const renderItem = ({item}) => {
    return(
        <Item item={item}
        onPress={() =>{ if(item.navigateTo ===''){drawer.current.closeDrawer()}
    else{
        navigation.navigate(item.navigateTo)
    }}}/>
    );
};

const navigationView = () => (
    <TouchableNativeFeedback>
        <FlatList contentContainerStyle={styles.background}  data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        initialNumToRender={DATA.length}/>
    </TouchableNativeFeedback>


   
);


    return (
        

        <FocusContext active={active}>
            
            <TouchableNativeFeedback>

            <DrawerLayoutAndroid ref={drawer} drawerWidth={styles.background.width}
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
        width:250,
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