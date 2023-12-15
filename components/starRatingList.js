import React from 'react';
import { View, Text, StyleSheet,Dimensions } from 'react-native';

// const iconSize = Dimensions.get('window').width * 0.068;
const iconSize = Dimensions.get('window').width * 0.05;
const StarRatingList = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars > 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;
  return (
    <View style={styles.container}>
     {[...Array(fullStars)].map((_, index) => (
  <Text key={index} style={styles.fullStar}>★</Text>
))}
{halfStar > 0 && <Text key={fullStars} style={styles.halfStar}>☆</Text>}
{[...Array(emptyStars)].map((_, index) => (
  <Text key={fullStars + index + 1} style={styles.emptyStar}>☆</Text>
))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems:'center',
 
   
   justifyContent: 'center',
   },
  fullStar: {
    color: '#FFD700',
    fontSize: iconSize,
    alignItems:'center',
  },
  halfStar: {
    color: '#FFD700',
    fontSize: iconSize,
    opacity: 0.5,
  },
  emptyStar: {
    color: '#CCCCCC',
    fontSize: iconSize,
  },
});
export default StarRatingList;