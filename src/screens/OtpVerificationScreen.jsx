import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import AppButton from "../components/AppButton";

const OtpVerificationScreen = ({navigation}) => {
  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleChange = (value, index) => {
    let newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  return (
    <View style={styles.container}>
      {/* Overlapping Background Images */}
      <View>
        <Image
          source={require("../assets/otp/backLeft.png")}
          style={[styles.backgroundImage, styles.backgroundImage1]}
        />
        <Image
          source={require("../assets/otp/backRight.png")}
          style={[styles.backgroundImage, styles.backgroundImage2]}
        />
      </View>

      {/* Foreground Content */}
      <View style={styles.foreground}>
        {/* Title */}
        <Text style={styles.title}>OTP Verification</Text>
        <Text style={styles.subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non nisi, mi,
          ornare aliquet.
        </Text>

        <View style={{alignItems: "center",justifyContent: "center",padding:25}}>
          {/* Image Section */}
          <Image
            source={require("../assets/otp/Otp.png")}
            style={styles.image}
          />

          {/* OTP Information */}
          <Text style={styles.otpInfo}>
            We will send you one time password to this email address.{"\n"}
            <Text style={styles.email}>example@example.com</Text>
          </Text>

          {/* OTP Input Fields */}
          <View style={styles.otpContainer}>
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                style={styles.otpInput}
                keyboardType="numeric"
                maxLength={1}
                value={digit}
                onChangeText={(value) => handleChange(value, index)}
              />
            ))}
          </View>

          {/* Register Button */}
          <AppButton 
            onPress={() => navigation.navigate('dashboard')}
            title={"Register"}
            width={"75%"}
            purple={true}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F6FA",
    // alignItems: "center",
    // justifyContent: "center",
    // position: "relative",
  },
  foreground: {
    // alignItems: "center",
    // justifyContent: "center",
    // paddingHorizontal: 20,
    // paddingVertical: 40,
    padding: 30,
    marginTop: 50,
  },
  backgroundImage: {
    position: "absolute",
    resizeMode: "stretch",
    // borderWidth: 2,
    marginTop: -15,
    borderColor: "red",
  },
  backgroundImage1: {
    width: "100%",
    height: 350,
    // top: 0,
    left: 0,
    marginLeft:-50,
    // opacity: 0.4,
  },
  backgroundImage2: {
    width: "100%",
    height: 350,
    marginRight: -100,
    right: 0,
    // opacity: 0.2,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: "#7A7A7A",
    // textAlign: "center",
    marginBottom: 20,
    // paddingHorizontal: 30,
  },
  image: {
    width: 286,
    height: 288,
    resizeMode: "contain",
    marginBottom: 30,
  },
  otpInfo: {
    fontSize: 14,
    color: "#000",
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "bold",
  },
  email: {
    // color: "#4B00E0",
    fontWeight: "bold",
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  otpInput: {
    width: 50,
    height: 50,
    backgroundColor: "#FFF",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#CECAFF",
    textAlign: "center",
    fontSize: 20,
    marginHorizontal: 5,
    elevation: 2, // Android shadow
  },
});

export default OtpVerificationScreen;
