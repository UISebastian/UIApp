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
import sparschweinMitEuroXML from '../assets/Xml/sparschweinMitEuro';
import UiText from './UiText';

const DATA =[{
    id: 0,
    text: "Individuelle Beratung",
    navigateTo: 'Plz',
    style: {

        width:130,
        height:50,
        left: 20,
        alignContent:"center",
        justifyContent:"space-between",
        
        
    },
    xml: sparschweinXML
},
{
    id:1, 
    text:"Persönliche Videokonferenz",
    navigateTo:'Beratung',
    style: {
        
        width:130,
        height:50,
        left: 20,
        alignContent:"center",
        justifyContent:"space-between",
    },
    xml: telefonhoererXML
},
{
    id:2, 
    text:"Ihr Depot",
    navigateTo:'Depot',
    style: {
        
        width:130,
        height:50,
        left: 20,
        alignContent:"center",
        justifyContent:"space-between",
    },
    xml: sparschweinMitEuroXML 
},
{
    id:3,
    text:"",
    navigateTo:'',
    style:{

        width:50,
        height:50,
        left: 20,
        alignContent:"center",
        position:"absolute",
        justifyContent:"space-between",
    },
    xml: leftArrowXml
},
];

const FOOTER_DATA =[
    {
        id:0,
        text:"Impressum",
        navigateTo:'Impressum'
    },
  
];

const Item = ({item, onPress}) => { 
    

   return( <SideBarButton text={item.text} style={item.style} xml={item.xml} onPress={onPress}/>);
    
    

};

const Fitem = ({item, onPress}) => {
    return(
        <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple(colors.secondary,false,20)} onPress={onPress}>
            <UiText style={{fontSize: 10}}>
                {item.text}
            </UiText>
        </TouchableNativeFeedback>
    );
}

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

const footerItem = ({item}) => {
    return(
        <Fitem item={item} onPress={() => navigation.navigate(item.navigateTo)}/>
    );

};

const footerComponent = () => {
    return(
        
    <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple(colors.white,false,20)} onPress={() => navigation.navigate('Impressum')}>
        <FlatList contentContainerStyle={styles.footerComponent}  data={FOOTER_DATA}
        renderItem={footerItem}
        keyExtractor={(item) => item.id}
        initialNumToRender={FOOTER_DATA.length}
        />
    </TouchableNativeFeedback>
    );

};



const navigationView = () => (
    <TouchableNativeFeedback>
        <FlatList contentContainerStyle={styles.background}  data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        initialNumToRender={DATA.length}
        ListFooterComponent={footerComponent}
        ListFooterComponentStyle={styles.footerComponent}
        
        />
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
    footerComponent:{
        height: 60,
        width: "100%",
        backgroundColor: colors.primary,
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        left: 10
        
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