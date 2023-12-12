import React, { useEffect, useState,useRef } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Entypo ,Ionicons,AntDesign } from '@expo/vector-icons';
import {  useNavigation } from "@react-navigation/native";
import { View,Dimensions ,TextInput,Text ,FlatList,Image} from "react-native";
import FriendScreen from "../Screens/Home/FriendScreen";
import NotificationScreen from "../Screens/Home/NotificationScreen";
import MenuScreen from "../Screens/Home/MenuScreen";
import ProfileScreen from "../Screens/Home/ProfileScreen";
import HomeHeader from "../components/HomeHeader";
import HomeScreen from "../Screens/Home/HomeScreen";
import FriendsList from "./drawer/FriendsList";
import { SafeAreaView } from "react-native-safe-area-context";
import { Platform } from "react-native";
import { StatusBar } from "expo-status-bar";


const Drawer = createDrawerNavigator();
const Tab =createMaterialTopTabNavigator();
const iconSize = Dimensions.get('window').width * 0.068;

 
 
const tabsData = [
  {
    name: 'Home',
    component: HomeScreen,
     activeIcon: 'home',
    label: 'Home',
  },
  {
    name: 'Friends',
    component: FriendScreen,
     activeIcon: 'people',
    label: 'Friends',
  },
  {
    name: 'Profile',
    component: ProfileScreen,
     activeIcon: 'person-circle',
    label: 'Profile',
  },
  {
    name: 'Notification',
    component: NotificationScreen,
     activeIcon: 'earth',
    label: 'Notifi..',
  },
  {
    name: 'Menu',
    component: MenuScreen,
     activeIcon: 'menu',
    label: 'Menu',
  },
];

const BottomTabNavigator = () => {
  const navigation = useNavigation();
  useEffect(() => {
  
  }, []);
 

  return (
    <>
      <HomeHeader/> 
    <Tab.Navigator
      tabBarPosition="bottom"
     initialRouteName="Notification"
    >
      {tabsData.map((tabData) => (
        <Tab.Screen
          key={tabData.name}
          name={tabData.name}
          component={tabData.component}
          options={{
            tabBarShowLabel: true,
            tabBarLabelStyle: { fontSize: 9 },
            tabBarLabel: tabData.label,
            tabBarShowIcon: true,
            tabBarAllowFontScaling: true,
            tabBarIconStyle:{
          
            },
            
            tabBarIcon: ({ focused, color, size }) => (
              <View style={{  textAlign:'center', }}>
              { tabData.name ==='Home'?    focused ? (
                    <Entypo name="home" size={iconSize} color="black" />
                ) : (
                  <AntDesign name="home" size={iconSize} color="black" /> 
                ) : focused ? (
                  <Ionicons name={`${tabData.activeIcon}-sharp`} size={iconSize} color={color} />
                ) : (
                  <Ionicons name={`${tabData.activeIcon}-outline`} size={iconSize} color={color} />
                ) 

            }
               
              
              </View>
            ),
          }}
        />
      ))}
       
    </Tab.Navigator>
    </>
  );
};
 

const FavouriteText = () => (
  <View style={{ padding: 10 }}>
    <Text>Favourites</Text>
  </View>
);



 

const FriendsDrawer = () => (
 

 
  <Drawer.Navigator
  drawerPosition="right"
  initialRouteName="Home"
  screenOptions={{
    headerShown:false,
    drawerPosition:"right",
  }} 
  drawerContent={() => (
    <View style={{backgroundColor:'#818080'}}>
      <FriendsList />
    </View>
  
  )}
>
  {/* Add more screens as needed */}
  <Drawer.Screen component={BottomTabNavigator} name ="bottom" />
</Drawer.Navigator>
 
);

export { BottomTabNavigator, FriendsDrawer };
 