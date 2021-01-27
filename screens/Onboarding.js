import React from "react";
import { StyleSheet, SafeAreaView, Text, View, Image, TouchableOpacity, Button } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { COLORS, images, SIZES, FONTS } from "../constants"

const Onboarding = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex:1, alignItems: 'center', justifyContent:'center'}} >
        <Image
        source={images.onboardingImage}
        resizeMode="contain"
        style={{
          width: '100%',
          height: '100%'
        }}
        />
      </View>
      <View style={{ flex:1, alignItems: 'center', justifyContent:'center'}} >
        <View style={{alignItems: 'center', marginHorizontal: SIZES.padding}} >
            <Text style={{...FONTS.h2}}>Digital Ticket</Text>
            <Text style={{color: COLORS.gray, marginTop: SIZES.padding, textAlign: 'center', ...FONTS.body3}}>Book your tickets,hotels and motels easily with the help of this app</Text>
        </View>
        <TouchableOpacity
          style={{marginTop: SIZES.padding*2, width: '70%', height: 50, alignItems: 'center', justifyContent: 'center'}}
          >
          <Button
          onPress={() => navigation.navigate("Home")}
          style={{ height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center', borderRadius: 15 }}
            title="Start Here"
            color="#46aeff"
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles= StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:COLORS.white,
  }
})

export default Onboarding;
