import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // For location icon
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'; // For notification bell

const AppBar = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      {/* Left Section: Profile Image and Name */}
      <View style={styles.profileSection}>
        <Image
          source={{ uri: 'https://example.com/profile.jpg' }} // Replace with actual profile picture URL
          style={styles.profileImage}
        />
        <View>
          <Text style={styles.greeting}>Hi, Ronald A. Martin</Text>
          <View style={styles.locationRow}>
            <Icon name="location-sharp" size={16} color="white" />
            <Text style={styles.locationText}>HSR Layout, Bengaluru...</Text>
          </View>
        </View>
      </View>

      {/* Right Section: Notification Icon */}
      <TouchableOpacity style={styles.notificationIconContainer}>
        <MaterialIcon name="notifications" size={28} color="white" />
        <View style={styles.notificationBadge}>
          <Text style={styles.notificationBadgeText}>3</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#7065F0',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  greeting: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    color: 'white',
    fontSize: 14,
    marginLeft: 5,
  },
  notificationIconContainer: {
    position: 'relative',
  },
  notificationBadge: {
    position: 'absolute',
    right: -6,
    top: -6,
    backgroundColor: '#FF6C44', // Badge color
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationBadgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default AppBar;
