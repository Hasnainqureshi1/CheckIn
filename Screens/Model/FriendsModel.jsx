import React, { useState, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Modal, View, Button, Text ,TouchableOpacity,StyleSheet,Animated,Dimensions} from 'react-native';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
// import Modal from "react-native-modal";


const devicewidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const FriendsModel = ( {setModalVisible,modalVisible}) => {
useEffect(() => {
 
 console.log(modalVisible +" is set");
}, [ modalVisible])


 return (
 
  <SafeAreaView>
   <Animated.View
  //  animationIn={'fadeInRightBig'}
  //  animationInTiming={900}
  //  animationOutTiming={1000}
  //  isVisible={modalVisible}
  // //  deviceWidth={800 }
  // //  deviceHeight={740}
  //  onSwipeComplete={() => setModalVisible(false)}
  // swipeDirection="right"
  
   style={ { 
    position:'absolute',
    width:'70%',
    right: 0,
    // height:'80%',
    height:deviceHeight,
    }}
    //  animationType="fade"
    //  transparent={true}
    //  visible={modalVisible}
    //  onRequestClose={() =>  (false)}
    
      
     >
      <TouchableOpacity style={styles.modalContainer} onPress={()=> setModalVisible(false)} >
     <View style={{
       width:'100%',
       height:'100%',
       justifyContent: 'center',
       backgroundColor: 'rgba(0,0,0,0.5)',
       // justifyContent: 'flex-start',
       alignItems: 'center',
       alignContent:'center',
       padding: 20,
     }}>
      <TouchableOpacity style={styles.backgroundModal} onPress={(e)  => e.preventDefault() } >
       <View>
         <Text style={{ fontSize: 20 }}>Left Side Modal Content</Text>
         <Button title="Close Modal" onPress={() =>  (false)} />
       </View>
        </TouchableOpacity>
     </View>
     </TouchableOpacity>
   </Animated.View>
   </SafeAreaView>
 
   
 );
};

export default FriendsModel;

const styles = StyleSheet.create({
  modalX:{
    width:'70%',
    height:'100%',
    justifyContent:'flex-start',
    alignItems:'flex-start',
    // top:'10',
    // left:'0',
    backgroundColor:'yellow',

  },

 modalContainer: {
  width:'100%',
  height:'100%',
 justifyContent:'flex-end',
 alignItems:'flex-end',
backgroundColor:'red',  
padding:0,
  
 },
 backgroundModal:{
  backgroundColor: 'white',
  padding: 20,
  margin:0,
  height: '50%',
  borderRadius: 10,
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5,
 },
 modal: {
   width: 155,
   height: 300
 },
});