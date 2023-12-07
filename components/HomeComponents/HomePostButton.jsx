import { View, Text, Dimensions, TextInput } from 'react-native';
 import { useNavigation, useRoute } from '@react-navigation/native';
 import { TouchableOpacity } from 'react-native-gesture-handler';
import homeStyle from '../../styles/homescreen';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'react-native';
import { images } from '../../constants';
 
 
const HomePostButton = () => {
 const iconSize = Dimensions.get('window').width * 0.068;
 const  navigation =  useNavigation();
 return (
    <View style={homeStyle.SecondTopHead}>
     <View>
     <Image source={images.profile} style={homeStyle.profileImage}/>
     </View>
     <View style={homeStyle.postInputView}>
 
 <TextInput placeholderTextColor={'white'} placeholder='What are you up to?' style={homeStyle.postinput}/> 
 
     </View>
     <View>
   <Ionicons name='location' size={iconSize} color={'red'}/>
     </View>
     
    </View>
  )
}

export default HomePostButton