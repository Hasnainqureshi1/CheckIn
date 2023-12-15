import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import {Movies,Restaurant,Travels} from '../Screens/Category/';
 import { BottomTabNavigator, FriendsDrawer } from './AppNavigator';
import CheckInList from '../components/ProfileComponents/CheckInList';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants';
import CheckedList from '../components/NestedComponents/CheckedList';
 

const MainNavigator = () => {
 const Stack = createStackNavigator(); 
 StatusBar.setBackgroundColor(COLORS.white);
  return (

    
   <Stack.Navigator>
 <Stack.Screen name="frienddrawer" component={FriendsDrawer} options={{
       headerShown:false,
   }}/>

   <Stack.Screen name="Restaurants" component={Restaurant} options={{
       // tabBarOptions: {
       //   visible: false, // Hide the tab bar for this screen
         
       // },
   }}/>
   <Stack.Screen name="Travels" component={Travels} options={{
     // headerShown:false,
   }}/>
   <Stack.Screen name="movies" component={Movies} options={{
     // headerShown:false,
   }}/>
   <Stack.Screen
  name="CheckedInList"
  component={CheckInList}
  options={{
  
    // Your desired color
    headerShown: false, // remove if you want to show the header
    
   
  }}
/>
   <Stack.Screen
  name="CheckedList"
  component={CheckedList}
  options={{
  
    // Your desired color
    headerShown: false, // remove if you want to show the header
    
   
  }}
/>

 </Stack.Navigator>
  )
}

export default MainNavigator