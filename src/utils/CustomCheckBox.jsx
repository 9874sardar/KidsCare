import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CustomCheckBox = ({ isChecked, onPress,text }) => {
  return (

    <View style={styles.checkboxContainer}>
            <TouchableOpacity style={styles.checkbox} onPress={onPress}>
                {isChecked && <View style={styles.checkboxInner} />}
            </TouchableOpacity>
            <Text style={styles.label}>{text}</Text>
      </View>
  )
}

export default CustomCheckBox

const styles = StyleSheet.create({
    label: {
        marginLeft: 8,
        fontSize: 14,
        color: '#7A7A7A',
      },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: "flex-start",
        marginBottom: 20,
      },
      checkbox: {
        width: 20,
        height: 20,
        borderWidth: 2,
        borderColor: '#4B00E0',
        // justifyContent: "flex-start",
        // alignItems: "flex-start",
      },
      checkboxInner: {
        width: "100%",
        height: "100%",
        backgroundColor: '#4B00E0',
      },
})