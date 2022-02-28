import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform, Image} from 'react-native';
import { useDimensions } from '@react-native-community/hooks';
import Svg, { Circle, SvgXml } from 'react-native-svg';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from './app/screens/WelcomeScreen';
import MenuScreen from './app/screens/MenuScreen';
import AbschlussstreckeScreen from './app/screens/AbschlussstreckeScreen';
import BeratungsScreen from './app/screens/BeratungsScreen';
import EndeAbschlussstreckeScreen from './app/screens/EndeAbschlussstreckeScreen';
import PlzTextInputScreen from './app/screens/PlzTextInputScreen';



const Stack = createNativeStackNavigator();

export default function App() {

  

  return (
    <NavigationContainer>
     <Stack.Navigator screenOptions={{title: ''}} initialRouteName='Home'>
       <Stack.Screen name='Home' options={{headerShown:false}} component={WelcomeScreen}/>
       <Stack.Screen name='Menu' options={{headerShown:false}}  component={MenuScreen}/>
       <Stack.Screen name ='Abschlussstrecke' options={{headerShown:false}}  component={AbschlussstreckeScreen}/>
       <Stack.Screen name ='Beratung' options={{headerShown:false}}  component={BeratungsScreen}/>
       <Stack.Screen name= 'EndeAbschlussstrecke' options={{headerShown:false}} component={EndeAbschlussstreckeScreen}/>
       <Stack.Screen name='Plz' options={{headerShown:false}} component={PlzTextInputScreen}/>
     </Stack.Navigator>
    </NavigationContainer>
  );
}


