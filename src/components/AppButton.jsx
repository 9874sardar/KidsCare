import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Platform } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const AppButton = ({ onPress, title, width, purple }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.buttonContainer, { width: width }]}>
      <LinearGradient
        colors={purple ? ['#7065F0','#403A8A'] : ['#FFFFFF','#D9D9D9']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradientButton}
      >
        <Text style={[styles.buttonText, purple ? { color: '#fff' } : { color: "#7065F0" }]}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  buttonContainer: {
    marginVertical: 10,
    alignSelf: 'center',
  },
  gradientButton: {
    paddingVertical: 15,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth:3,
    borderColor:"#f1f5f9",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '600',
  },
});
