import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'react-native';
import { FONT, images } from '../../constants';

const CheckedInListHeader = () => {
  return (
 

    <View style={{  justifyContent:'center',alignItems:'center',backgroundColor:'white',paddingBottom:18,}}>
      <Image source={images.checkInBanner} style={{width:260,height:100,objectFit:'contain'}}/>
      <Text style={{fontSize:24,fontFamily: FONT.medium}}>Sansa Check IN</Text>
    </View>
   
  )
}

export default CheckedInListHeader