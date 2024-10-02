import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import HeadBoxes from '../utils/HeadBoxes';
import CustomCheckBox from '../utils/CustomCheckBox';
import AppButton from '../components/AppButton';


const SignUp = ({navigation}) => {
  const [isSelected, setSelection] = useState(false);

  return (
    <View style={styles.container}>
      <HeadBoxes />

      {/* Title */}
      <Text style={styles.title}>Let's Get Started!</Text>
      <Text style={styles.subtitle}>
        Create an account on NIRVI to get all features
      </Text>

      {/* Input Fields */}
      <TextInput placeholder="Enter full name" style={styles.input} />
      <TextInput placeholder="Enter email" style={styles.input} />
      <TextInput placeholder="Enter phone number" style={styles.input} />
      <TextInput placeholder="Password" secureTextEntry style={styles.input} />
      <TextInput placeholder="Confirm Password" secureTextEntry style={styles.input} />

      {/* Remember Me Checkbox */}
      <CustomCheckBox 
        isChecked={isSelected}
        onPress={() => setSelection(!isSelected)}
        text={'Remember Me'}
      />

    <View style={{alignItems:"center"}}>

      {/* Button */}
      {/* <TouchableOpacity style={styles.button}  >
        <Text style={styles.buttonText}></Text>
      </TouchableOpacity> */}
      <AppButton 
        onPress={() => navigation.navigate('otp')}
        title={"Get OTP"}
        width={"65%"}
        purple={true}
      />

      {/* Footer */}
      <TouchableOpacity style={styles.footerText} onPress={() => navigation.navigate('signin')}>
        <Text style={{color:"#000",fontWeight:"300",fontSize:18,fontFamily:"Poppins"}}>
          Already have an account? <Text style={styles.loginText}>Log In</Text>  
        </Text>
      </TouchableOpacity>
    </View>
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6FA',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "800",
    color: '#1D1A43',
    // lineHeight: 28,
    fontFamily:'Poppins',
    textAlign:"center",
    marginTop: 20,
    // marginBottom: 2,
  },
  subtitle: {
    fontSize: 16,
    color: '#332E70',
    lineHeight: 28,
    fontWeight: '600',
    textAlign: 'center',
    fontFamily:'Poppins',
    marginBottom: 20,
    // width: '100%',
    // fontFamily:"poppins"
  },
  input: {
    width: '100%',
    height: 50,
    color: "#000",
    backgroundColor: '#FFF',
    borderRadius: 15,
    paddingLeft: 15,
    marginBottom: 15,
    elevation: 2, // Shadow for Android
  },
  footerText: {
    marginTop: 10,
    fontSize: 18,
    color: '#7A7A7A',
    // lineHeight:14,
    fontWeight:'400'
  },
  loginText: {
    color: '#7065F0',
    fontWeight: 'bold',
  },
})