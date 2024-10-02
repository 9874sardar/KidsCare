import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import HeadBoxes from '../utils/HeadBoxes';
import CustomCheckBox from '../utils/CustomCheckBox';
import AppButton from '../components/AppButton';

const SignIn = ({navigation}) => {
  const [isSelected, setSelection] = useState(false);



  return (
    <View style={styles.container}>
      <HeadBoxes />

      {/* Title */}
      <Text style={styles.title}>Welcome Back</Text>
      <Text style={styles.subtitle}>
        Log in to your account  
      </Text>

      {/* Input Fields */}
      <TextInput placeholder="Enter email / Phone number" style={styles.input} />
      <TextInput placeholder="Password" secureTextEntry style={styles.input} />

      {/* Remember Me Checkbox */}
      <CustomCheckBox 
        isChecked={isSelected}
        onPress={() => setSelection(!isSelected)}
        text={'Remember Me'}
      />
      <View style={{flexDirection:"row",justifyContent:"space-between",height:"20%"}}>
        <TouchableOpacity onPress={() => navigation.navigate('otp')} >
          <Text style={{fontWeight:"500",fontSize:16,color:"#000"}}>Log in With OTP</Text>
        </TouchableOpacity>
        <Text style={{fontWeight:"400",fontSize:16,color:"red"}}>Forget Password?</Text>
      </View>
    <View style={{alignItems:"center"}}>
      {/* Button */}
      <AppButton
        onPress={() => navigation.navigate('dashboard')}
        purple={true}
        title={"Login"}
        width={"65%"}
      />

      {/* Footer */}
      <TouchableOpacity style={styles.footerText} onPress={() => navigation.navigate('signup')}>
        <Text style={{color:"#000",fontWeight:"300",fontSize:18,fontFamily:"Poppins"}}>  
          Don't have an account? <Text style={styles.loginText}>Register</Text>
         </Text>
      </TouchableOpacity>
    </View>
    </View>
  )
}

export default SignIn

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
    marginTop: 40,
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