import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

const Cart = () => {
  const [cartItem, setCartItem] = useState(false);

  return (
    <View style={{flex:1,backgroundColor:"#fff"}}>
      {cartItem ? (
        <View>
          <Text>Cart</Text>
        </View>
      ) : (
        <View style={{justifyContent:"center",alignItems:"center",padding:20}}>
          <Text style={{fontSize:18,color:"#000",fontWeight:"500"}}>Your cart is empty</Text>
          <Image source={require('../assets/plusCart.png')} style={{width:"50%",height:"50%",marginTop:100}} />
          <Text style={{fontSize:26,fontWeight:"700",color:"#000"}}>Want to add something?</Text>
        </View>
        )}
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({});
