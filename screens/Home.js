import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, Button } from "react-native";
import LinearGradient from 'react-native-linear-gradient'
import { COLORS, images, SIZES } from "../constants";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1, marginTop: SIZES.base, paddingHorizontal: SIZES.padding}}>
        <Image 
        source={images.homeBanner}
        resizeMode="cover"
        style={{
          width: "100%",
          height: "100%",
          borderRadius: 15
        }}
        />
      </View>

        <View style={{flex: 1}}>

        </View>
        <View style={{flex: 1}}>

        </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS. white
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  }
})

export default Home;
