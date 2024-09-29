import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import FastImage from 'react-native-fast-image';

const Splash = ({navigation}) => {

    useEffect(()=>{
        setTimeout(() => {
            navigation.navigate('home')
        }, 2000)
    },[])

  return (
    <View style={styles.container}>
      <FastImage
        source={require('../assets/screenSplash/Nirvi.gif')}
        style={styles.gif}
        resizeMode={FastImage.resizeMode.contain}
      />
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:"#fff"
      },
      gif: {
        flex: 1,
        width: '100%',
      },
})