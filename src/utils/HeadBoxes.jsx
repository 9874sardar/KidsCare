import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HeadBoxes = () => {
  return (
    <View style={styles.headerBox}>
        <View style={styles.box1} />
        <View style={styles.box2} />
      </View>
  )
}

export default HeadBoxes

const styles = StyleSheet.create({
    headerBox: {
        flexDirection: 'row',
        // alignItems:"flex-start",
        justifyContent: "flex-end",
        // alignItems: 'flex-start',
        marginBottom: 40,
        marginTop:-60,
        // marginLeft: -40,
        height: '20%',
      },
      box1: {
        width: "70%",
        height: "80%",
        backgroundColor: '#CECAFF',
        borderRadius: 26,
        transform: [{ rotate: '20deg' }],
        marginRight: -130,
        zIndex: 1,
        // Shadow for iOS
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        // Elevation for Android
        elevation: 6,
      },
      box2: {
        width: "60%",
        height: "80%",
        backgroundColor: '#7065F0',
        borderRadius: 26,
        marginRight: 80,
        transform: [{ rotate: '20deg' }],
        zIndex: 0,
        // Shadow for iOS
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        // Elevation for Android
        elevation: 6,
      },
})