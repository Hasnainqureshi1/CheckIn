import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Dimensions,Image,PixelRatio  } from "react-native";
import {  TextInput, TouchableOpacity } from "react-native-gesture-handler";

import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "../CustomHeader";
import CheckedInListHeader from "../NestedComponents/CheckedInListHeader";
import { COLORS, icons, images } from "../../constants";
import { ScreenOrientation } from 'expo-screen-orientation';

import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/native";

const fontScale = PixelRatio.getFontScale();
const CheckInList = ({ navigation }) => {
 const navigate = useNavigation();
 const textSize = 14/fontScale;
 const filter = {
  year: 'Year',
  Month: 'Month',
  Week: 'Week',
};
const buttonsData = [
 { imageSource: images.Moviesicon, title: 'Movies' },
 {  imageSource: images.travelIcon, title: 'Travel' },
 {  imageSource: images.roadtrip, title: 'Road Trip' },
 { imageSource: images.hiking, title: 'Hiking' },
 {  imageSource: images.restaurantIcon, title: 'Restaurants' },
 {  imageSource: images.Localplaces, title: 'Local Places' },
 { imageSource: images.musicnote, title: 'Music' },
 {  imageSource: images.Books, title: 'Books' },
 {  imageSource: images.podcast, title: 'Podcasts' },
 { imageSource: images.sportIcon, title: 'Sport' },
 {  imageSource: images.tvSeries, title: 'TV Series' },
 
];
 // You can use useEffect if you need to update state based on changes in dimensions
//  useEffect(() => {
//   const updateDimensions = () => {
//    seticonSize(Dimensions.get('window').width * 0.035);
//    setbuttonsWidth(Dimensions.get('window').width * 0.3);
//    setChecklistbuttons(Dimensions.get('window').width * 0.28);
//   };

//   Dimensions.addEventListener('change', updateDimensions);

//   return () => {
//     Dimensions.set('change', updateDimensions);
//   };
// }, []);
  
 
const [iconSize, seticonSize] = useState(Dimensions.get('window').width * 0.035)
const [buttonsWidth, setbuttonsWidth] = useState(Dimensions.get('window').width * 0.3)
const [Checklistbuttons, setChecklistbuttons] = useState(Dimensions.get('window').width * 0.23);
const screenContainerWidth = Dimensions.get('window').width * 0.96;

  return (
   <ScrollView>
   <CustomHeader/>
   <View style={{backgroundColor:COLORS.postBackground,flex:1,padding:8,  }}>
  <CheckedInListHeader/>
<View style={{justifyContent:'center',alignItems:'center'}}>
  <View style={{flexDirection:'row', justifyContent:'space-between' , width:screenContainerWidth, paddingVertical:17,}}>
  {Object.entries(filter).map(([key, value]) => (
    <TouchableOpacity key={key} style={{  backgroundColor: COLORS.postInput, paddingVertical: 14, borderRadius: 50, paddingHorizontal:20,   }}>
      <Text style={{ textAlign: 'center' ,fontSize:textSize,}}>{value} Book</Text>
    </TouchableOpacity>
  ))}
   </View>
   {/* Bottom  */}
   <View style={{justifyContent:'space-evenly',paddingTop:15,paddingHorizontal:10,alignItems:'center', flexDirection:'row', flexWrap:'wrap',backgroundColor:'white' }}>
 
   {buttonsData.map((button,key) => (
        <View key={key} style={{ margin:10, }}>
          <TouchableOpacity onPress={()=>{navigate.navigate('CheckedList')}} style={{width:Checklistbuttons,height:80,padding:16,backgroundColor:COLORS.postInput,borderRadius:50,}}>
            <Image source={button.imageSource} style={{ width: '100%', height: '100%' }} />
          </TouchableOpacity>
          <Text style={{ textAlign: 'center',fontSize:13 }}>{button.title}</Text>
        </View>
      ))}


   </View>
   </View>
   </View>
   </ScrollView>
  );
};


export default CheckInList;
