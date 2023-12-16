import React, { useState } from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  Image,
  TextInput,
 
} from 'react-native';
 
import DateTimePicker from '@react-native-community/datetimepicker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS, icons, images } from '../../constants';
 
 

const CreatePostModal = ({ isVisible, onClose }) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new
 
Date());
  const [selectedTime, setSelectedTime] = useState(new
 
Date());

  const handleDateChange = (event, newDate) => {
    setSelectedDate(newDate);
    setShowDatePicker(false);
  };

  const handleTimeChange = (event, newTime) => {
    setSelectedTime(newTime);
    setShowTimePicker(false);
  };

  const showDatePickerModal = () => {
    setShowDatePicker(true);
  };

  const showTimePickerModal = () => {
    setShowTimePicker(true);
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const formatTime = (time) => {
    return time.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
    });
  };



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
        <View style={{ backgroundColor: 'white', padding: 13, width: '96%' }}>
         
          <View style={{ flexDirection: 'row', justifyContent: 'center',borderBottomColor:'gray',borderBottomWidth:1,paddingBottom:13, }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Create Post</Text>
            <TouchableOpacity onPress={onClose} style={{backgroundColor:COLORS.postBackground,borderRadius:50,alignItems:'center',justifyContent:'center',width:25,height:25,position:'absolute',right:0}}>
              <Ionicons name="close-outline" size={24} color="#01aa" />
            </TouchableOpacity>
          </View>
 
          <View style={{ flexDirection: 'row', marginTop: 20 }}>
         {/* Left side modal  */}
            <View style={{ flex: 1 }}>
            
              <View style={{ flexDirection: 'row'}}>
                <Image source={images.profile} style={{ width: 40, height: 40 }} />
                <View style={{ marginLeft: 10,flexWrap:'wrap' }}>
                  <Text style={{ fontWeight: 'bold',fontSize:12, }}>Hasnain Qureshi</Text>
                  <Text style={{ fontWeight: 'bold',fontSize:12,color:'gray',backgroundColor:'darkgray', width:50 }}>Public</Text>
                  
                
                </View>
              </View>

           
              <View style={{ marginTop: 13 }}>
                <View style={{flexDirection:'row',backgroundColor:COLORS.postInput,padding:4,paddingHorizontal:7,paddingBottom:5,  borderRadius:40,alignItems:'center', }}>
                  <Image source={icons.tagPinLocation} style={{width:20,height:20,objectFit:'contain',marginRight:5,}} />
                  <Text style={{color:'#fff',fontSize:13,}}>( enter tag )</Text>
                </View>
               
               
              </View>

              
              <View style={{ marginTop: 10 }}>
                <Text>Arrived At</Text>
             
      
      <View style={{ flexDirection: 'row' }}>
        <Button title="Select Date" onPress={showDatePickerModal} />
        {showDatePicker && (
          <DateTimePicker
            mode={'date'}
            value={selectedDate}
            onChange={handleDateChange}
          />
        )}
        <Button title="Select Time" onPress={showTimePickerModal} />
        {showTimePicker && (
          <DateTimePicker
            mode={'time'}
            value={selectedTime}
            is24Hour={true}
            onChange={handleTimeChange}
          />
        )}
      </View>
      <Text>
        Selected Date: {formatDate(selectedDate)}
      </Text>
      <Text>Selected Time: {formatTime(selectedTime)}</Text>
 
                
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

      {/* Right side modal            */}
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
