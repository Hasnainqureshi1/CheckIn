// CustomHeader.js

import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, TextInput,Text, Icon,StyleSheet,TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../constants';
import { useNavigation } from '@react-navigation/native';

const CustomHeader = ( ) => {
const navigate =   useNavigation();
 const [searchQuery, setSearchQuery] = React.useState("");

 const handleSearchChange = (text) => {
   setSearchQuery(text);
 };

  return (
   <SafeAreaView style={styles.container}>
   <View style={styles.header}>
     <TouchableOpacity onPress={() => navigate.goBack()}>
       <Ionicons name="chevron-back" size={24} color="white" />
     </TouchableOpacity>
     <View  style={styles.SearchBox}>
    <Ionicons name='search' size={20} color={'#ececec2e'} style={{marginRight:8,paddingTop:4}}/>
     <TextInput
       style={styles.searchInput}
       placeholderTextColor={'white'}
       placeholder="Search..."
       value={searchQuery}
       onChangeText={handleSearchChange}
       />
       </View>
   </View>
  
 </SafeAreaView>
  );
};
const styles = StyleSheet.create({
 container: {
   
   backgroundColor: "red",
 },
 header: {
   flexDirection: "row",
   alignItems: "center",
   padding: 10,
   backgroundColor: COLORS.headerColor,
 },
 searchInput: {
   
 
   fontSize: 16,
   
   flex:1,
    
   backgroundColor:  COLORS.searchBar,
   textAlign:'center',
   color:'white',
 },
 SearchBox:{
  flex: 1,
  backgroundColor:  COLORS.searchBar,
  marginLeft: 10,
  paddingHorizontal: 10,
  paddingVertical: 5,
  borderRadius: 10,
  flexDirection:'row',
 },
});

export default CustomHeader;