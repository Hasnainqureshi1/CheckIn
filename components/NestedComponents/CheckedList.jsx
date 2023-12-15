// CheckedList.js
import React from 'react';
import { View, Text, ScrollView, TextInput, FlatList, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, images } from '../../constants';
import CustomHeader from '../CustomHeader';
import otherStyles from '../../styles/otherStyle';
import MovieListItem from './MovieListItem ';
 

const CheckedList = () => {
  const movieData = [
    {
      id: '1',
      title: 'Pirates of Caribbean',
      rating: 4,
      theatre: 'Karchery Road',
      views: 34,
      watchedDate: '18th March, 2021',
      image: images.bullettrain,
    },
    {
      id: '2',
      title: 'Pirates of Caribbean',
      rating: 4,
      theatre: 'Karchery Road',
      views: 34,
      watchedDate: '18th March, 2021',
      image: images.bullettrain,
    },
    {
      id: '3',
      title: 'Pirates of Caribbean',
      rating: 4,
      theatre: 'Karchery Road',
      views: 34,
      watchedDate: '18th March, 2021',
      image: images.bullettrain,
    },
    
    // Add more movie data as needed
  ];

  const renderItem = ({ item }) => <MovieListItem movie={item} />;

  return (
    <>
      <CustomHeader />
   
        <View style={{ padding: 10,backgroundColor:COLORS.postBackground ,flex:1}}>
          <View style={otherStyles.checkedListHeader}>
            <Image source={images.Moviesicon} style={{ width: 40, height: 40 }} />
            <Text style={otherStyles.HeaderText}>Movie Check List</Text>
          </View>
          {/* Searchbar  */}
          <View style={otherStyles.headerSearch}>
            <Ionicons name="search" size={18} color={'white'} />
            <TextInput
              placeholder="Search"
              style={{
                paddingLeft: 6,
                paddingVertical: 1,
                color: COLORS.white,
                textAlign: 'center',
                justifyContent: 'center',
                flex: 1,
              }}
              placeholderTextColor={COLORS.button1}
              returnKeyType={'search'}
            />
          </View>
          {/* List  */}
          <FlatList
            data={movieData}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            style={{ backgroundColor: 'white' }}
          />
        </View>
   
    </>
  );
};

export default CheckedList;
