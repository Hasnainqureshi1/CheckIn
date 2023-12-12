import React,{useState} from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import homeStyle from '../../styles/homescreen';
import { images } from '../../constants';
import StarRating from './../StarRating';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

const iconSize = Dimensions.get('window').width * 0.05;

const Posts = ({ postData }) => {
  const { profileImage, profileName, rating, location, views, postedDate, arrivedAt, leftAt } = postData;
  const [isExpanded, setIsExpanded] = useState(false);
  const fullText = 'Texas · Dallas · Big Bend National Park . National Zoo . Port Aransas';
  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };
  const renderText = () => {
  
   const truncatedText = isExpanded ? fullText : `${fullText.slice(0, 33)}... `;

   return (
     <Text style={{ fontWeight: '400'  }}>
       {truncatedText}
       {!isExpanded && (
         <Text onPress={handleToggle} style={{ }}>
           <Text style={{ color:'gray' }}>Read More</Text>
         </Text>
       )}
     </Text>
   );
 };
  return (
    <View style={homeStyle.postLayoutContainer}>
      <View style={homeStyle.flexRow}>
        {/* first row  */}
        <View style={homeStyle.postfirstRowLeft}>
          <Image source={profileImage} style={homeStyle.profileImage} />
          <Text style={homeStyle.profileName}>{profileName}</Text>
        </View>
        <View>
          <StarRating rating={rating} />
        </View>
      </View>
      <View style={homeStyle.postCenter}>
        <View style={homeStyle.postLocation}>
          <Ionicons name="location" color="red" size={iconSize} />
          <Text>{`Traveled to: ${location}`}</Text>
        </View>
        <View style={homeStyle.postCenterRight}>
          <View style={homeStyle.postViews}>
            <Ionicons name="eye-outline" size={iconSize} />
            <Text style={{ marginLeft: 6, fontSize:13 }}>{`${views} views`}</Text>
          </View>
          <View style={homeStyle.postedDate}>
            <Text style={homeStyle.postedDateText}>{`Posted ${postedDate}`}</Text>
          </View>
        </View>
      </View>
      <View style={homeStyle.postBottom}>
        <View style={homeStyle.postArrivedLeft}>
          <Text style={{ fontWeight: 900 }}>Arrived at </Text>
          <Text>{arrivedAt}</Text>
        </View>
        <View style={homeStyle.postArrivedLeft}>
          <Text style={{ fontWeight: 900 }}>Left at </Text>
          <Text>{leftAt}</Text>
        </View>
      </View>
      <View style={homeStyle.postRecommended}>
      <Text style={{ fontWeight: '900' }}>Recommended{renderText(fullText)}</Text>
  
      </View>
    </View>
  );
};

export default Posts;
