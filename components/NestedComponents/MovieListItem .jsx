import React, { useState, useRef } from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity, Modal, TouchableWithoutFeedback, Alert } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import otherStyles from '../../styles/otherStyle';
import homeStyle from '../../styles/homescreen';
import { COLORS } from '../../constants';
import StarRatingList from '../starRatingList';
import { StyleSheet } from 'react-native';

const MovieListItem = ({ movie }) => {
  const iconSize = Dimensions.get('window').width * 0.045;
  const textSize = Dimensions.get('window').width * 0.03;
  const [isExpanded, setIsExpanded] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });
  const itemRef = useRef();

  const fullText = "Honestly! Don't watch this movie; it is not good.";

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleModal = () => {
    if (itemRef.current) {
      itemRef.current.measure((fx, fy, width, height, px, py) => {
        setModalPosition({ x: (px+35 ), y: (py -180) });
      });
    }
    setIsModalVisible(!isModalVisible);
  };

  const handleOptionPress = (option) => {
    // Handle the selected option here
    Alert.alert(`You selected: ${option}`);
    setIsModalVisible(false);
  };

  const renderText = () => {
    const truncatedText = isExpanded ? fullText : `${fullText.slice(0, 33)}... `;

    return (
      <Text style={{ fontWeight: '400' }}>
        {truncatedText}
        {!isExpanded && (
          <Text onPress={handleToggle} style={{}}>
            <Text style={{ color: 'gray' }}>Read More</Text>
          </Text>
        )}
      </Text>
    );
  };

  return (
    <View style={otherStyles.listContainer}>
      <TouchableOpacity onLongPress={toggleModal} ref={itemRef}>
        <View style={{ flexDirection: 'row', height: 140, paddingHorizontal: 10, paddingVertical: 10 }}>
          <View style={otherStyles.listContainer}>
            <Image source={movie.image} style={otherStyles.leftImage} />
          </View>
          <View style={{ flex: 1, paddingLeft: 10 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <Text style={otherStyles.listHeading}>{movie.title}</Text>
              <StarRatingList rating={movie.rating} />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{ flexDirection: 'row', backgroundColor: COLORS.gray, padding: 4, borderRadius: 10 }}>
                <MaterialCommunityIcons name="movie-open" size={14} color="black" />
                <Text style={{ paddingLeft: 3, fontSize: 10, fontWeight: '400' }}>Theatre: {movie.theatre}</Text>
              </View>
              <View>
                <View style={homeStyle.postViews}>
                  <Ionicons name="eye-outline" size={iconSize} />
                  <Text style={{ marginLeft: 6, fontSize: 11 }}>{`${movie.views} views`}</Text>
                </View>
              </View>
            </View>
            <View style={{ flexDirection: 'row', marginVertical: 5 }}>
              <Text style={{ fontWeight: '800', fontSize: textSize }}>Watched at</Text>
              <Text style={{ fontSize: textSize }}>{movie.watchedDate}</Text>
            </View>
            <View style={{ flexDirection: 'row', marginVertical: 5 }}>
              <Text style={{ fontWeight: '900', fontSize: textSize }}>Recommendation {renderText()}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
        {/* Dark Overlay for the entire screen */}
        {isModalVisible && (
        <TouchableWithoutFeedback onPress={() => setIsModalVisible(false)}>
          <View style={{ ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 1 }} />
        </TouchableWithoutFeedback>
      )}


      {/* Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(!isModalVisible)}
        style={{backgroundColor:"gray"}}
      >
       {/* Dark Overlay for the entire screen */}
      
        <TouchableWithoutFeedback onPress={() => setIsModalVisible(false)}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
          
            <View style={{ backgroundColor: COLORS.listModalbackground, padding: 20, borderRadius: 10, width: 300, position: 'absolute', top: modalPosition.y, left: modalPosition.x,borderColor:COLORS.postInput,borderWidth:3, }}>
              <TouchableOpacity onPress={() => handleOptionPress('Option 1')}>
                <Text style={otherStyles.modalOptionsText}>Report Post</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleOptionPress('Option 2')}>
                <Text style={otherStyles.modalOptionsText}>Turn on Notification for this post</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleOptionPress('Option 3')}>
                <Text style={{ fontSize: 14,   color:  COLORS.gray2, }}>Copy Link</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

export default MovieListItem;
