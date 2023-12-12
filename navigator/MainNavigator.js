import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import {Movies,Restaurant,Travels} from '../Screens/Category/';
 import { BottomTabNavigator, FriendsDrawer } from './AppNavigator';
const MainNavigator = () => {
 const Stack = createStackNavigator(); 
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
 </Stack.Navigator>
  )
}

export default MainNavigator