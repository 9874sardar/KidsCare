import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Carousel from "../utils/carousel";

const items = {
  snacks: [
    {
      id: 1,
      title: "Badam Milk",
      description: "A wholesome platter of Milk .",
      rating: 4.2,
      price: "Flat ₹200 OFF",
      image: require("../assets/homeImg.png"),
    },
  ],
  meals: [
    {
      id: 1,
      title: "Meal Example 1",
      description: "Delicious meal description.",
      rating: 4.5,
      price: "Flat ₹250 OFF",
      image: require("../assets/homeImg.png"),
    },
  ],
  drinks: [
    {
      id: 1,
      title: "Fresh Strawberry Juice",
      description: "A flavorful platter of meats, rice, and sides.",
      rating: 4.2,
      price: "Flat ₹200 OFF",
      image: require("../assets/food/vegThali.png"),
    },
    {
      id: 2,
      title: "Coconut Juice",
      description: "A wholesome platter of vegetables, rice, and sides.",
      rating: 4.2,
      price: "Flat ₹200 OFF",
      image: require("../assets/food/nonVeg.png"),
    },
  ],
};

const CategoryList = ({navigation}) => {
  const [selectedCategory, setSelectedCategory] = useState("drinks");

  const renderCard = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Menu_Details')}>
      <View style={styles.card}>
        <Image source={item.image} style={styles.image} />

        <View style={styles.cardContent}>
          <View style={styles.header}>
            <Text style={styles.title}>{item.title}</Text>
            <View style={{flexDirection:"row",justifyContent:"space-evenly"}}>
              <Image
                style={{ height: 18, width: 18,padding:8,margin:2,marginRight:10 }}
                source={require("../assets/food/nonVegLogo.png")}
              />
              <Icon name="heart-outline" size={24} color="#555" />
            </View>
          </View>

          <Text style={styles.description}>{item.description}</Text>

          {/* <View style={styles.row}> */}
          <View style={styles.ratingContainer}>
            <View style={{ flexDirection: "row",paddingBottom:4 }}>
              <MaterialCommunityIcons name="star" size={18} color="#fabb18" />
              <Text style={styles.rating}>{item.rating}</Text>
            </View>

            <Text style={styles.discount}>
              {/* <MaterialCommunityIcons name="tag" size={14} color="#007aff" /> */}
              <Image
                source={require("../assets/discount.png")}
                style={{ height: 15, width: 15 }}
              />
              {item.discount} Flat $200 OFF
            </Text>
          </View>
          {/* </View> */}
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={{ height: "30%" }}>
        <Carousel />
      </View>
      <View style={styles.categoryButtons}>
        <TouchableOpacity onPress={() => setSelectedCategory("snacks")}>
          <Text
            style={
              selectedCategory === "snacks"
                ? styles.activeCategory
                : styles.category
            }
          >
            Snacks
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedCategory("meals")}>
          <Text
            style={
              selectedCategory === "meals"
                ? styles.activeCategory
                : styles.category
            }
          >
            Meal
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedCategory("drinks")}>
          <Text
            style={
              selectedCategory === "drinks"
                ? styles.activeCategory
                : styles.category
            }
          >
            Drinks
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={items[selectedCategory]}
        renderItem={renderCard}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.cardList}
      />
    </View>
  );
};

export default CategoryList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  categoryButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 16,
    // marginTop:-200
  },
  category: {
    fontSize: 18,
    color: "gray",
  },
  activeCategory: {
    fontSize: 18,
    color: "purple",
    fontWeight: "bold",
  },
  cardList: {
    paddingBottom: 16,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 15,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    borderColor: "#e0e0e0",
    borderWidth: 1,
    overflow: "hidden",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    width: "25%",
    height: "100%",
  },
  cardContent: {
    marginLeft: 10,
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
  description: {
    fontSize: 14,
    color: "#000",
    marginVertical: 4,
    fontFamily: "Poppins",
  },
  row: {
    marginTop: 8,
  },
  ratingContainer: {
    // flexDirection: "row",
    // alignItems: "center",
  },
  rating: {
    fontSize: 14,
    color: "#000",
    marginLeft: 4,
  },
  discount: {
    fontSize: 14,
    color: "#000",
    fontWeight: "600",
    flexDirection: "row",
    alignItems: "center",
  },
});
