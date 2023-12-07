// HomeScreen.js
import React, { useEffect,useState } from 'react';
import { View, Text,Dimensions } from 'react-native';
 
import { useNavigation, useRoute } from '@react-navigation/native';
 
import { createStackNavigator } from '@react-navigation/stack';
import homeStyle from '../../styles/homescreen';


import { COLORS } from '../../constants';
 import HomeTopHead from '../../components/HomeComponents/HomeTopHead'
import HomePostButton from '../../components/HomeComponents/HomePostButton';
import Posts from '../../components/HomeComponents/Posts';
 
const HomeScreen = ({   modalVisible, setModalVisible} ) => {
 
  const route = useRoute();
  const Stack =createStackNavigator();

  console.log(route.name);
 

  useEffect(() => {
    console.log(route.name);
   
  }, [route.name]);
 
  return (
    <>
  <View style={{backgroundColor:COLORS.gray2,flex:1,}}>
<HomeTopHead/>
<HomePostButton/>
<Posts/>
  </View>
  </>
  );
};

export default HomeScreen;
 