import React, { useState } from 'react';
import { View, FlatList, RefreshControl } from 'react-native';
import HomeTopHead from '../../components/HomeComponents/HomeTopHead';
import Notification from './../../components/NotiComponent/Notification';
import { images } from '../../constants';

const NotificationScreen = () => {
  const [refreshing, setRefreshing] = useState(false);

  const postData = [
    {
      profileImage: images.profile,
      profileName: 'Hasnain Qureshi',
      location: 'Texas',
      views: 45,
      timeAgo: '1 hour ago',
    },
    {
      profileImage: images.profile,
      profileName: 'Hasnain Qureshi',
      location: 'Texas',
      views: 45,
      timeAgo: '1 hour ago',
    },
    {
      profileImage: images.profile,
      profileName: 'Hasnain Qureshi',
      location: 'Texas',
      views: 45,
      timeAgo: '1 hour ago',
    },
    {
      profileImage: images.profile,
      profileName: 'Hasnain Qureshi',
      location: 'Texas',
      views: 45,
      timeAgo: '1 hour ago',
    },
    {
      profileImage: images.profile,
      profileName: 'Hasnain Qureshi',
      location: 'Texas',
      views: 45,
      timeAgo: '1 hour ago',
    },
    {
      profileImage: images.profile,
      profileName: 'Hasnain Qureshi',
      location: 'Texas',
      views: 45,
      timeAgo: '1 hour ago',
    },
    {
      profileImage: images.profile,
      profileName: 'Hasnain Qureshi',
      location: 'Texas',
      views: 45,
      timeAgo: '1 hour ago',
    },
    {
      profileImage: images.profile,
      profileName: 'Hasnain Qureshi',
      location: 'Texas',
      views: 45,
      timeAgo: '1 hour ago',
    },
  ];

  const onRefresh = () => {
    // Simulate a data fetch or update
    setRefreshing(true);
    // Replace the setTimeout with your actual data fetching or refreshing logic
    setTimeout(() => {
      // Update your data here
      setRefreshing(false);
    }, 1000); // Replace 1000 with the time it takes to fetch or update your data
  };

  const renderItem = ({ item }) => (
    <Notification
      profileImage={item.profileImage}
      profileName={item.profileName}
      location={item.location}
      views={item.views}
      timeAgo={item.timeAgo}
    />
  );

  return (
    <View style={{ flex: 1 }}>
      <HomeTopHead />
      <FlatList
        data={postData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  );
};

export default NotificationScreen;
