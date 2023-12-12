import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { images } from '../../constants';

const Notification = ({ profileImage, profileName, location, views, timeAgo }) => {
 return (
   <View>

    <View style={styles.container}>
    <Image source={profileImage} style={styles.profileImage} />

      <View style={styles.textContainer}>

        <Text style={styles.notificationText}>
        <Text style={styles.userName}>{profileName}</Text>
          <Text style={styles.lightText}>{" "}{"Seen your Check List"}</Text>
          <Text style={styles.boldText}>{`: ${location}`}</Text>
        </Text>
      </View>
      
    </View>
    <Text style={styles.timeAgo}>{timeAgo}</Text>
   </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    padding: 12,
  },
  profileImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  userName: {
    fontWeight: '900',
    flexWrap: 'wrap',
    padding: 10,
  },
  notificationText: {
    flexDirection: 'row',
  },
  lightText: {
    fontWeight: '400',
  },
  boldText: {
    fontWeight: '800',
  },
  timeAgo:{marginLeft:70,marginTop:-10,color:'gray'},
});

export default Notification;
