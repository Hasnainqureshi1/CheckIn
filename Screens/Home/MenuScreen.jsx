import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS, FONT, SIZES, SHADOWS } from "../../constants/";
const MenuScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Menu</Text>
      <TouchableOpacity style={styles.menuItem}>
        <Text>Report</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
        <Text>Apply for Verification Badge</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
        <Text>Manage Audience</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.menuItem, styles.logoutButton]}>
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    borderBottomColor:'gray',
    borderBottomWidth: 1,
    paddingBottom:14,
  },
  menuItem: {
    // borderBottomWidth: 1,
    borderBottomColor: 'gray',
    paddingVertical: 10,
  },
  logoutButton: {
    borderTopWidth: 1,
    borderTopColor: 'gray',
    marginTop: 10,
  
     borderBottomWidth: 1,
     borderBottomColor: 'gray',
     backgroundColor:COLORS.secondary,
  },
  logoutText: {
    color: 'white',
    fontWeight:'900',
    textAlign: 'center',
     
    
  },
});

export default MenuScreen;
