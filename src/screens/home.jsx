import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import AppButton from '../components/AppButton';

const img = require('../assets/homeImg.png');

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('dashboard')}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Image source={img} style={styles.image} />
        <Text style={styles.title}>Track Your Delivery</Text>
        <Text style={styles.subtitle}>
          Easily monitor and follow your delivery's progress in real-time.
        </Text>
      </View>
      <View style={styles.footer}>
        <AppButton
          onPress={() => navigation.navigate('signup')}
          title={"Register"}
          width={"50%"}
          purple={true}
        />
        <AppButton 
          onPress={() => navigation.navigate('signin')}
          title={"Log in"}
          width={"50%"}
          purple={false}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  header: {
    marginTop: 20,
    alignSelf: 'flex-end',
    marginRight: 20,
  },
  skipText: {
    fontSize: 16,
    color: '#000',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  image: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 10,
    color: 'black',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    fontWeight: '700',
  },
  footer: {
    width: '100%',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingBottom: 100,
  },
});
