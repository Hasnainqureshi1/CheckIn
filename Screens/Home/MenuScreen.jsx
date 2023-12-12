import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

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
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  menuItem: {
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    paddingVertical: 15,
  },
  logoutButton: {
    borderTopWidth: 1,
    borderTopColor: 'gray',
    marginTop: 10,
  },
  logoutText: {
    color: 'red',
    textAlign: 'center',
  },
});

export default MenuScreen;
