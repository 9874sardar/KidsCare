import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useContext } from 'react';
// import {LinearGradient} from 'react-native-linear-gradient';
// import Header from '../components/Header';
// import { useNavigation, useRoute } from '@react-navigation/native';
// import { CardContext } from '../context/CardContext';

// const imageURI =
//   'https://res.cloudinary.com/dlc5c1ycl/image/upload/v1710567613/cwlk21f74nd9iamrlzkh.png';

const MenuDetailScreen = () => {
//   const navigation = useNavigation();
//   const {addToCart} = useContext(CardContext);
//   const route = useRoute();
//   const item = route.params.item;

  const handleAddToCart = (item) => {
    addToCart(item);
    navigation.navigate("CART")
  };

  return (
    <View>
        <Text>Hello guys</Text>
    </View>
  );
};

export default MenuDetailScreen;

const styles = StyleSheet.create();
