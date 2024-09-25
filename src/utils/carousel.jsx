import { Dimensions, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const { width, height } = Dimensions.get("window");

const carouselData = [
    {
      id:"01",
      image: require("../assets/carousel_1.png"),
    },
    {
      id:"02",
      image: require("../assets/carousel_2.png")
    },
    {
      id:"03",
      image: require("../assets/carousel_3.png")
    },
  ]

const Carousel = () => {

    const renderCarouselItem = ({item,index}) =>{
        return (
          <View style={{padding:5,borderRadius:16}}>
            <Image
              source={item.image}
              style={{height:170, width:width - 40,borderRadius:16}}
            />
          </View>
        );
      }

  return (
            <FlatList 
              data={carouselData}
              renderItem={renderCarouselItem}
              horizontal={true}
              pagingEnabled={true}
              showsHorizontalScrollIndicator={false}
            /> 
  )
}

export default Carousel

const styles = StyleSheet.create({})