import { View, Text,Image } from 'react-native'
import React from 'react'
import homeStyle from '../../styles/homescreen'
import { images } from '../../constants'
import StarRating from './../StarRating';

const Posts = () => {
 const rating = 3;
  return (
    <View style={homeStyle.postLayoutContainer}>
     <View style={homeStyle.flexRow}> 
      {/* first row  */}
   <View style={homeStyle.postfirstRowLeft}>
   <Image source={images.profile} style={homeStyle.profileImage}/>
   <Text style={homeStyle.profileName} >Hasnain Qureshi</Text>
   </View>
   <View>
   <StarRating rating={rating} />
   
   </View>
     </View>
     <View></View>
     <View></View>
    </View>
  )
}

export default Posts