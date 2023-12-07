import React from 'react'
import { View, Text,Dimensions } from 'react-native';
 import { useNavigation, useRoute } from '@react-navigation/native';
 import { TouchableOpacity } from 'react-native-gesture-handler';
 
import { Ionicons,MaterialCommunityIcons } from '@expo/vector-icons';
import homeStyle from '../../styles/homescreen';
 

const HomeTopHead = () => {
 const iconSize = Dimensions.get('window').width * 0.068;
 const  navigation =  useNavigation();
  return (
   <View style={homeStyle.topLayout}>
      <TouchableOpacity style={homeStyle.topLayoutBtns}
       onPress={()=>{
        navigation.navigate('Restaurants')
      }}>
      <Ionicons name="fast-food-outline" size={iconSize} color="black" />
        <Text>Restaurants</Text>
      </TouchableOpacity>
      <TouchableOpacity style={homeStyle.topLayoutBtns}  onPress={()=>{
        navigation.navigate('Travels')
      }}>
      <MaterialCommunityIcons name="office-building-marker-outline" size={iconSize} color="black" />
      <Text>Travels</Text>
      </TouchableOpacity>
      <TouchableOpacity style={homeStyle.topLayoutBtns}  onPress={()=>{
        navigation.navigate('movies')
      }}>
      <MaterialCommunityIcons name="movie-outline" size={iconSize} color="black" />
      
      <Text>Movies</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeTopHead