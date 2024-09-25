import React from "react";
import { View, Text, FlatList, Image, StyleSheet, Dimensions, StatusBar } from "react-native";
import Carousel from "../utils/carousel";
import AppBar from "../components/AppBar";

const { width, height } = Dimensions.get("window");

const CARD_WIDTH = width * 0.44;
const CARD_HEIGHT = height * 0.18;

const data = [
  {
    title: "LunchBOX",
    subtitle: "School meals, daily...",
    image: require("../assets/features/lunchBox.png"),
  },
  {
    title: "KidMART",
    subtitle: "Essentials for kids, on...",
    image: require("../assets/features/kidmart.png"),
  },
  {
    title: "ParentHUB",
    subtitle: "Video blog documen...",
    image: require("../assets/features/parentHub.png"),
  },
  {
    title: "FunZONE",
    subtitle: "Events and activities...",
    image: require("../assets/features/funZone.png"),
  },
];

const Dashboard = () => {
  const renderGridItem = ({ item }) => (
    <View style={styles.gridItem}>
      <Text style={styles.gridTitle}>{item.title}</Text>
      <Text style={styles.gridSubtitle}>{item.subtitle}</Text>
      <Image source={item.image} style={styles.gridImage} />
    </View>
  );


  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      <FlatList
        ListHeaderComponent={
          <>
          {/* <AppBar /> */}
            <Carousel />
            <Text style={styles.sectionTitle}>Features For You</Text>
          </>
        }
        data={data}
        numColumns={2}
        keyExtractor={(item) => item.title}
        renderItem={renderGridItem}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.gridContentContainer}
        ListFooterComponent={
          <>
            <View>
              <Text style={styles.sectionTitle}>Nirvi new event For You</Text>
              <Image
                source={require("../assets/Sale.png")}
                style={styles.fullWidthImage}
              />
            </View>
            <View>
              <Text style={styles.sectionTitle}>Nirvi new event For You</Text>
              <Image
                source={require("../assets/event.png")}
                style={[styles.fullWidthImage,{height:200}]}
              />
            </View>
          </>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
    overflow:"hidden"
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  gridItem: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    margin: 10,
    backgroundColor: "#fff",
    padding: 20,
    paddingTop: 10,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
    position: "relative",
    overflow: "hidden",
  },
  gridTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#7c3aed",
  },
  gridSubtitle: {
    fontSize: 13,
    color: "#777",
    // zIndex:0,
  },
  gridImage: {
    width: 110,
    height: 100,
    // borderRadius: 20,
    // borderBottomLeftRadius: 20,
    position: "absolute",
    bottom: 0,
    right: 0,
    // zIndex:1,
    // paddingTop: 10,
    // marginTop: 10,
    // top:5,
    // borderWidth: 2,
    borderColor: "#fff",
  },
  columnWrapper: {
    justifyContent: "space-between",
  },
  gridContentContainer: {
    paddingBottom: 30,
  },
  fullWidthImage: {
    width: "100%",
    height: 300,
    borderRadius: 12,
    marginBottom: 20,
  },
});

export default Dashboard;
