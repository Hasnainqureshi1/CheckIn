import { View, Text } from 'react-native'
import React from 'react'
import ProfileLocationBackground from './../../components/ProfileComponents/ProfileLocationBackground';
import { COLORS, images } from '../../constants';
import profileStyle from '../../styles/profileStyle';
import { ScrollView } from 'react-native-gesture-handler';
import Posts from '../../components/HomeComponents/Posts';
 
const ProfileScreen = () => {
  console.log('profile screen');
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
    <View style={{flex:1 }}>
     <ProfileLocationBackground/>
     <View style={profileStyle.profileRecentActivity}>
     <Text style={{marginLeft:10,marginBottom:-5,marginTop:5}}>Recent Activity</Text>
     {postData.map((post, index) => (
        <Posts key={index} postData={post} />
      ))}
     </View>
    </View>
    </ScrollView>
  )
}

export default ProfileScreen