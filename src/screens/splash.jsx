import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import LottieView from 'lottie-react-native';

const {width, height} = Dimensions.get('window');

const Splash = ({navigation}) => {
  // const handleDone = () => {
  //   navigation.navigate('home');
  // };

  // const handleSkip = () => {
  //     navigation.navigate('home');
  // };

  // Referance
  // https://app.lottiefiles.com/?utm_medium=web&utm_source=homepage-hero-cta
  // https://www.youtube.com/watch?v=4-GKgqIUBNo&t=379s

  const doneButton = ({...props}) => (
    //  return (
    <TouchableOpacity style={styles.doneBtn} {...props}>
      <Text style={styles.btnText}>Done</Text>
    </TouchableOpacity>
    //   )
  );

  return (
    <Onboarding
      onDone={() => navigation.navigate('home')}
      onSkip={() => navigation.navigate('home')}
      bottomBarHighlight={false}
      DoneButtonComponent={doneButton}
      pages={[
        {
          backgroundColor: '#fff',
          image: (
            <View style={{}}>
              <LottieView
                source={require('../assets/animation2.json')}
                autoPlay
                loop
                style={styles.lottie}
              />
            </View>
          ),
          title: 'LunchBOX',
          subtitle: 'Daily meal delivery with healthy choices for school kids.',
        },
        {
          backgroundColor: '#fff',
          image: (
            <View style={{}}>
              <LottieView
                source={require('../assets/cart/cart1.json')}
                autoPlay
                loop
                style={styles.lottie}
              />
            </View>
          ),
          title: 'KidMART',
          subtitle:
            'The one-stop shop where parents can find everything their kids need, from toys to clothing and more.',
        },
        {
          backgroundColor: '#fff',
          image: (
            <View style={{}}>
              <LottieView
                source={require('../assets/cooking/cooking.json')}
                autoPlay
                loop
                style={styles.lottie}
              />
            </View>
          ),
          title: 'ParentHUB',
          subtitle:
            "Capture and share vlog videos of your children's special moments",
        },
        {
          backgroundColor: '#fff',
          image: (
            <View style={{}}>
              <LottieView
                source={require('../assets/fun.json')}
                autoPlay
                loop
                style={styles.lottie}
              />
            </View>
          ),
          title: 'FunZONE',
          subtitle:
            'A space where parents can host exciting and engaging events for children',
        },
      ]}
    />
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  lottie: {
    height: height * 0.5,
    width: width * 0.8,
  },
  doneBtn: {
    backgroundColor: 'white',
    width: '60%',
    height: '80%',
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  btnText: {
    color: 'black',
    fontSize: 15,
  },
});
