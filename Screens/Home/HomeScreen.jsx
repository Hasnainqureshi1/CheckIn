// HomeScreen.js
import React, { useEffect,useState } from 'react';
import { View, Text,Dimensions } from 'react-native';
 
import { useNavigation, useRoute } from '@react-navigation/native';
 
import { createStackNavigator } from '@react-navigation/stack';
import homeStyle from '../../styles/homescreen';


import { COLORS, images } from '../../constants';
 import HomeTopHead from '../../components/HomeComponents/HomeTopHead'
import HomePostButton from '../../components/HomeComponents/HomePostButton';
import Posts from '../../components/HomeComponents/Posts';
import { ScrollView } from 'react-native-gesture-handler';
 
const HomeScreen = ({   modalVisible, setModalVisible} ) => {
 
  const route = useRoute();
  const Stack =createStackNavigator();

  console.log(route.name);
 

  useEffect(() => {
    console.log(route.name);
   
  }, [route.name]);
  const postData = [
    {
      profileImage: images.profile,
      profileName: 'Hasnain Qureshi',
      rating: 3,
      location: 'Texas',
      views: 45,
      postedDate: 'yesterday',
      arrivedAt: '9 Dec, 2023',
      leftAt: '12th Dec, 2023',
    },
    {
      profileImage: images.profile,
      profileName: 'Hasnain Qureshi',
      rating: 3,
      location: 'Texas',
      views: 45,
      postedDate: 'yesterday',
      arrivedAt: '9 Dec, 2023',
      leftAt: '12th Dec, 2023',
    },
    {
      profileImage: images.profile,
      profileName: 'Hasnain Qureshi',
      rating: 3,
      location: ' Mc donalds',
      views: 45,
      postedDate: 'yesterday',
      arrivedAt: '9 Dec, 2023',
      leftAt: '12th Dec, 2023',
    },
    {
      profileImage: images.profile,
      profileName: 'Hasnain Qureshi',
      rating: 3,
      location: 'Texas',
      views: 45,
      postedDate: 'yesterday',
      arrivedAt: '9 Dec, 2023',
      leftAt: '12th Dec, 2023',
    }
   
];
  return (
    <ScrollView>
  <View style={{backgroundColor:COLORS.postBackground,flex:1,}}>
<HomeTopHead/>
<HomePostButton/>
{postData.map((post, index) => (
        <Posts key={index} postData={post} />
      ))}
  </View>
  </ScrollView>
  );
};

export default HomeScreen;
 