import React, { useState } from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  Image,
  TextInput,
 
} from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { images } from '../../constants';
import { Picker } from 'react-native-web';

const CreatePostModal = ({ isVisible, onClose }) => {
  const [postType, setPostType] = useState('public'); // You can replace 'public' with a default value
  const [location, setLocation] = useState('');
  const [arrivalTime, setArrivalTime] = useState('');
  const [departureTime, setDepartureTime] = useState('');

  const handleCreatePost = () => {
    // Implement your logic for creating a post here
    // You can use the values of postType, location, arrivalTime, departureTime
    // Reset the state and close the modal
    setPostType('public');
    setLocation('');
    setArrivalTime('');
    setDepartureTime('');
    onClose();
  };

  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={isVisible}
      onRequestClose={onClose}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ backgroundColor: 'white', padding: 20, width: '80%' }}>
         
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Create Post</Text>
            <TouchableOpacity onPress={onClose}>
              <Ionicons name="close-outline" size={24} color="black" />
            </TouchableOpacity>
          </View>
 
          <View style={{ flexDirection: 'row', marginTop: 20 }}>
         
            <View style={{ flex: 1 }}>
            
              <View style={{ flexDirection: 'row' }}>
                <Image source={images.profile} style={{ width: 50, height: 50 }} />
                <View style={{ marginLeft: 10 }}>
                  <Text style={{ fontWeight: 'bold' }}>Hasnain Qureshi</Text>
                  
                
                </View>
              </View>

           
              <View style={{ marginTop: 10 }}>
                <Text>Choose Location</Text>
               
                <TextInput
                  style={{ borderBottomWidth: 1, paddingVertical: 5 }}
                  placeholder="Enter location"
                  value={location}
                  onChangeText={(text) => setLocation(text)}
                />
              </View>

              
              <View style={{ marginTop: 10 }}>
                <Text>Arrived At</Text>
                
                <TextInput
                  style={{ borderBottomWidth: 1, paddingVertical: 5 }}
                  placeholder="Select date and time"
                  value={arrivalTime}
                  onChangeText={(text) => setArrivalTime(text)}
                />
              </View>
 
              <View style={{ marginTop: 10 }}>
                <Text>Left At</Text>
             
                <TextInput
                  style={{ borderBottomWidth: 1, paddingVertical: 5 }}
                  placeholder="Select date and time"
                  value={departureTime}
                  onChangeText={(text) => setDepartureTime(text)}
                />
              </View>
            </View>

          
            <View style={{ flex: 1, marginLeft: 20 }}>
             
              <Text>Drag and Drop Image</Text>
            </View>
          </View>

          {/* Bottom Buttons */}
          <TouchableOpacity
            style={{ marginTop: 20, backgroundColor: 'blue', padding: 10, borderRadius: 5 }}
            onPress={handleCreatePost}>
            <Text style={{ color: 'white', textAlign: 'center' }}>Create Post</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default CreatePostModal;
