import React, { useEffect,useState,memo } from 'react';
import { View, Text, FlatList, Image, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Entypo, FontAwesome, Fontisto, Ionicons } from '@expo/vector-icons';
import { COLORS, images } from '../../constants';
import styles from '../../styles/home';

 
const FriendsList = () => {
  // Preprocess data to create separate arrays for favorites and all friends
  const [friendsData, setfriendsData] = useState([
    { id: '1', name: 'John Doe', image: images.profile, online: true, isFavorite: true },
    { id: '2', name: 'Hasnain Qureshi', image: images.profile, online: false, isFavorite: false },
    { id: '3', name: 'Hasnain Qureshi', image: images.profile, online: false, isFavorite: false },
    { id: '4', name: 'Hasnain Qureshi', image: images.profile, online: false, isFavorite: false },
    { id: '5', name: 'Hasnain Qureshi', image: images.profile, online: false, isFavorite: false },
    { id: '6', name: 'Hasnain Qureshi', image: images.profile, online: false, isFavorite: false },
    { id: '7', name: 'Hasnain Qureshi', image: images.profile, online: false, isFavorite: false },
    { id: '8', name: 'Hasnain Qureshi', image: images.profile, online: false, isFavorite: false },
    { id: '9', name: 'Hasnain Qureshi', image: images.profile, online: false, isFavorite: false },
    { id: '10', name: 'Hasnain Qureshi', image: images.profile, online: false, isFavorite: false },
    { id: '11', name: 'Hasnain Qureshi', image: images.profile, online: false, isFavorite: false },
    { id: '12', name: 'Hasnain Qureshi', image: images.profile, online: false, isFavorite: false },
    { id: '13', name: 'Hasnain Qureshi', image: images.profile, online: false, isFavorite: true },
    // Add more friends as needed
  ]);
   const [favoriteFriends, setfavoriteFriends] = useState();
   const [allFriends, setallFriends] = useState();
  useEffect(() => {
    setfavoriteFriends( friendsData.filter((friend) => friend.isFavorite));
  setallFriends(friendsData.filter((friend) => !friend.isFavorite));
  }, [friendsData])
  
  
  console.log(allFriends)
  return (
    <SafeAreaView>
      <View style={{ height: '100%', backgroundColor: '#2e364d' }}>
        <View style={styles.friendListSearchContainer}>
          <Ionicons name="search" size={22} color={'white'} style={styles.FriendListsearchIcon} />
          <TextInput
            placeholder="Name"
            style={{ paddingLeft: 6, color: COLORS.white, padding: 6 }}
            placeholderTextColor={COLORS.searchplaceholder}
            returnKeyType={'search'}
          />
        </View>

        <FlatList
          data={[{ title: 'Favourites', data: favoriteFriends }, { title: 'All Friends', data: allFriends }]}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <View>
              <View style={{ padding: 10, backgroundColor: COLORS.friendSearch, marginTop: 5 }}>
                <Text style={{color:'white'}}>{item.title}</Text>
              </View>
              <FlatList
                data={item.data}
                keyExtractor={(friend) => friend.id}
                renderItem={({ item }) => <FriendItem friend={item} />}
              />
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const FriendItem = ({ friend }) => (
  <View style={styles.friendlistSidebarContainer}>
    <View style={styles.friendlistLeft}>
      <Image source={friend.image} style={{ width: 40, height: 40, marginRight: 10 }} />
      <Text style={{ color: 'white' }}>{friend.name}</Text>
    </View>
    <View style={styles.friendlistright}>
      {friend.online ? (
        <FontAwesome name="circle" size={12} color="green" />
      ) : (
        <>
          <Text style={{ color: COLORS.gray, fontSize: 11, marginRight: 5 }}>{`55m`} </Text>
          <Fontisto name="mobile-alt" size={14} color={COLORS.gray} />
        </>
      )}
    </View>
  </View>
);

export default memo(FriendsList);
