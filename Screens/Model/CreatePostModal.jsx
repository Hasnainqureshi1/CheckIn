import React, { useState } from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  Image,
  TextInput,
  Button,
  Dimensions,
  
 
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS, icons, images } from '../../constants';
import RateExperience from '../../components/RateExperience';
import { EvilIcons } from '@expo/vector-icons';
import otherStyles from './../../styles/otherStyle';
import * as ImagePicker from 'expo-image-picker';
 

const CreatePostModal = ({ isVisible, onClose }) => {
  const screenWidth = Dimensions.get('window').width;
  const [showModal, setShowModal] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState();
 
  const [selectedImage, setSelectedImage] = useState(null); // Store selected image URI

  const handleImageUpload = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
      });
      if (result.canceled) {
        // Handle cancellation
        return;
      }
      if (result.assets.length > 0) {
        const selectedImage = result.assets[0]; // Access the first asset
        setSelectedImage(selectedImage.uri); // Update state with image uri
        // Upload the image using your backend logic, remember to send the selectedImage object
      } else {
        // Handle no image selected case
        console.warn('No image selected');
      }
    } catch (error) {
      console.error(error);
    }
  };
  
 
  const handleSearchLocation = (location) => {
    // Perform logic to search for location and update selectedLocation
    setSelectedLocation(location);
    setShowModal(false); // Close modal after selection
  };
  
  const closeModal = () => setShowModal(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  
  const [DateSelected, setDateSelected] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new
 
Date());
const [showLeftDatePicker, setShowLeftDatePicker] = useState(false);
const [leftDateSelected, setLeftDateSelected] = useState(false);
const [selectedLeftDate, setSelectedLeftDate] = useState(new Date());
const [isPublic, setIsPublic] = useState(true); // 'true' for Public initially


  const [selectedTime, setSelectedTime] = useState(new
 
Date());

  const handleDateChange = (event, newDate) => {
    setSelectedDate(newDate);
    setShowDatePicker(false);
    setDateSelected(true)
  };

 
  const showDatePickerModal = () => {
    setShowDatePicker(true);
  };
  const handleLeftDateChange = (event, newDate) => {
    setSelectedLeftDate(newDate);
    setShowLeftDatePicker(false);
    setLeftDateSelected(true);
  };
  
  const showLeftDatePickerModal = () => {
    setShowLeftDatePicker(true);
  };
  
  const formatLeftDate = (date) => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };
 

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
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
    setSelectedImage();
    setDateSelected();
    setLeftDateSelected();
    setLeftDateSelected();
    setSelectedLeftDate();
  };

  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={isVisible}
      onRequestClose={onClose}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ backgroundColor: 'white', padding: 13, width: '96%' ,borderWidth:2, borderColor:'#4563a3' }}>
         
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
                <View style={{ justifyContent:'center',alignContent:'center',paddingVertical:5}}>
<Ionicons name='earth' size={12} color={'black'} />
                  <Picker
  selectedValue={selectedLanguage}
  onValueChange={(itemValue, itemIndex) =>
    setSelectedLanguage(itemValue)
  } style={{fontSize:10,padding:-20,margin:-9,marginVertical:-19,marginTop:-32,marginLeft:-1 }}>
  <Picker.Item label="Public" value="java"  style={{fontSize:12,}} />
  <Picker.Item label="Private" value="js"  style={{fontSize:12}}/>
</Picker>
</View>

                  
                
                </View>
              </View>

           
              <View style={{ marginTop: 13 }}>
                {/* Location input  */}
                <TouchableOpacity onPress={() => setShowModal(true)}>
    <View style={{
      flexDirection: 'row',
      backgroundColor: COLORS.postInput,
      padding: 4,
      paddingHorizontal: 7,
      paddingBottom: 5,
      borderRadius: 40,
      alignItems: 'center',
    }}>
      <Image source={icons.tagPinLocation} style={{ width: 20, height: 20, objectFit: 'contain', marginRight: 5 }} />
      <Text style={{ color: '#fff', fontSize: 13 }}>
        {selectedLocation || '( enter tag )'}
      </Text>
    </View>
  </TouchableOpacity>
             {/* Modal for searching location */}
  {showModal && (
    <Modal animationType="fade" transparent={true} visible={showModal}  >
      <View style={{
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
       
      }}>
        <View style={{ backgroundColor: '#fff', padding: 20, borderRadius: 10, elevation: 5,width:(screenWidth-20), height:200,}}>
          <TextInput
            placeholder="Search location..."
            style={{ backgroundColor: '#fff',padding:20,width:'100%',}}
          />
          <Button title="Search" onPress={() => handleSearchLocation(/* Search term */)} />
        
        </View>
      </View>
    </Modal>  
  ) }           
              </View>

              
              <View style={{ marginTop: 10, }}>
                <View  style={{ flexDirection: 'row' }}>
                <Text style={{marginRight:10,}}>Arrived At</Text>
                <TouchableOpacity onPress={showDatePickerModal}>
        <Ionicons  name='calendar' size={20} color={'lightblue'}/>
   </TouchableOpacity>

                </View>
      
      <View style={{ flexDirection: 'row' }}>
      
        {showDatePicker && (
          <DateTimePicker
            mode={'date'}
            value={selectedDate}
            onChange={handleDateChange}
          />
        )}
      
        
      </View>
      {DateSelected && (
        <Text>
         { formatDate(selectedDate)}
      </Text>

      )
      }
  
 
                
              </View>
              <View style={{ }}>
                <View  style={{ flexDirection: 'row' }}>
                <Text style={{marginRight:10,}}>Left At</Text>
                <TouchableOpacity onPress={showLeftDatePickerModal}>
        <Ionicons  name='calendar' size={20} color={'lightblue'}/>
   </TouchableOpacity>

                </View>
      
      <View style={{ flexDirection: 'row' }}>
      
        {showLeftDatePicker  && (
          <DateTimePicker
            mode={'date'}
            value={selectedLeftDate}
            onChange={handleLeftDateChange}
          />
        )}
      
        
      </View>
      {leftDateSelected  &&  (
 <Text>
 { formatLeftDate(selectedLeftDate)}
</Text>
      )

     
      }
  
 
                
              </View>
              {/* Recommendation  */}
             <View>
              <View style={{flexDirection:'row' }}>
              <Text>Recommend</Text>
              <Text style={{color:'gray',marginLeft:5,}}>(optional)</Text>
              </View>
              <TextInput
                placeholder=''
                style={{borderColor:'#acacae',borderWidth:1, paddingVertical:3,paddingHorizontal:5,marginTop:5,borderRadius:10,}}
              />
             </View>
             
 
             
            </View>

      {/* Right side modal            */}
      <View style={{ flex: 1, justifyContent: 'center' }}>
      <TouchableOpacity style={otherStyles.imageContainer} onPress={handleImageUpload}>
        {!!selectedImage && <Image source={{ uri: selectedImage }} style={{ width: '100%' ,height:'100%' ,objectFit:'cover'}} />}
        {!selectedImage && (
          <View>
            <Text style={{ color: 'gray', fontSize: 11, textAlign: 'center' }}>Click to upload Cover</Text>
            <EvilIcons name="image" size={120} color="black" style={{ marginTop: -4 }} />
          </View>
        )}
      </TouchableOpacity>
      <Text style={{ textAlign: 'center', paddingLeft: 24, fontSize: 12, color: 'gray' }}>Upload a Cover</Text>
      <Text style={{ textAlign: 'center', paddingLeft: 24, fontSize: 12, color: 'gray' }}>(optional)</Text>
    </View>
          </View>

          {/* Bottom Buttons */}
          <View
            style={{ marginTop: 20, backgroundColor: '#fff', 
            padding: 10, borderRadius: 5,borderWidth:1, borderColor: 'gray' }}
             >
            <RateExperience/>
          </View>
          <TouchableOpacity
            style={{ marginTop: 20, backgroundColor: COLORS.listModalbackground, padding: 10,marginBottom:10, borderRadius: 5 }}
            onPress={handleCreatePost}>
            <Text style={{ color: 'white', textAlign: 'center' }}>  Post</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default CreatePostModal;
