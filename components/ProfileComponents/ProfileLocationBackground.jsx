import { View, Text } from 'react-native'
import React,{useState} from 'react'
import MapView from 'react-native-maps';
import profileStyle from '../../styles/profileStyle';
import { Image } from 'react-native';
import { images } from '../../constants';
import { TouchableOpacity } from 'react-native';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import CreatePostModal from '../../Screens/Model/CreatePostModal';

const ProfileLocationBackground = () => {
  const [isCreatePostModalVisible, setCreatePostModalVisible] = useState(false);

  const toggleCreatePostModal = () => {
    setCreatePostModalVisible(!isCreatePostModalVisible);
    console.log('toogle create post modal');
  };
  return (
   <View style={{backgroundColor:'white', }}>
   <View style={profileStyle.container}>
   {/* <MapView style={profileStyle.map} /> */}

   <Text>Checked in locations</Text>

 </View>
 <Image source={images.profile} style={profileStyle.profileImage} />
      <View style={profileStyle.profileContainer}>
        <Text style={profileStyle.profileName}>Hasnain Qureshi</Text>
        <Text style={profileStyle.profileNameFacebook}>Facebook</Text>
      </View>
 <View style={profileStyle.prfileTopButtons}>
  <TouchableOpacity style={profileStyle.profileTopButton}>
  <FontAwesome5 name="clipboard-list" size={18} color="black" />
   <Text style={{marginLeft:4,}}>Check in list</Text>
  </TouchableOpacity>
  <TouchableOpacity style={profileStyle.profileTopButton} onPress={toggleCreatePostModal}>
  <Ionicons name="create-outline" size={18} color="black" />
   <Text style={{marginLeft:4,}}>Create Post</Text>
  </TouchableOpacity>
 </View>
 <CreatePostModal isVisible={isCreatePostModalVisible} onClose={toggleCreatePostModal} />
 </View>
  )
}

export default ProfileLocationBackground