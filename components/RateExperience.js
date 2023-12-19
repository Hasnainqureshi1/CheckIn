import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const iconSize = Dimensions.get('window').width * 0.070;

const RateExperience = () => {
  const [selectedRating, setSelectedRating] = useState(0); // Store selected rating
 console.log(selectedRating);
  const fullStars = Math.floor(selectedRating);
  const halfStar = selectedRating - fullStars > 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;

  const handleStarPress = (newRating) => {
    setSelectedRating(newRating); // Update state on click
  };

  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 10,alignItems:'center' }}>Rate your experience:</Text>
      <View style={{ flexDirection: 'row' }}>
        {[...Array(fullStars)].map((_, index) => (
          <TouchableOpacity key={index} onPress={() => handleStarPress(index + 1)}>
            <Text style={styles.fullStar}>★</Text>
          </TouchableOpacity>
        ))}
        {halfStar > 0 && (
          <TouchableOpacity onPress={() => handleStarPress(fullStars + 0.5)}>
            <Text key={fullStars} style={styles.halfStar}>☆</Text>
          </TouchableOpacity>
        )}
        {[...Array(emptyStars)].map((_, index) => (
          <TouchableOpacity key={fullStars + index + 1} onPress={() => handleStarPress(fullStars + index + 1)}>
            <Text style={styles.emptyStar}>☆</Text>
          </TouchableOpacity>
        ))}
      </View>
 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    paddingTop:9,
  },
  fullStar: {
    color: '#FFD700',
    fontSize: iconSize,
    paddingHorizontal: 0.5,
    marginTop:-10,
  },
  halfStar: {
    color: '#FFD700',
    fontSize: iconSize,
    opacity: 1,
    paddingHorizontal: 2,
  },
  emptyStar: {
    color: '#CCCCCC',
    fontSize: iconSize,
    marginTop:-10,
    paddingHorizontal: 0.5,
  },
});

export default RateExperience;
