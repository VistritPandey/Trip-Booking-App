import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import Tabs from "./navigation/tabs"
import { Onboarding, DestinationDetail } from "./screens/";
import {COLORS, SIZES, icons} from "./constants"

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparent",
  },
};

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator initialRouteName={"Onboarding"}>
        
        <Stack.Screen name="Onboarding" component={Onboarding} 
        options={{
          title: null,
          headerStyle: {
            backgroundColor: COLORS.white
          },
          headerLeft: null,
          headerRight: () => (
            <TouchableOpacity
            style={{ marginRight: SIZES.padding}}
            onPress={() => console.log("Pressed")}
            >
              <Image
              source={icons.barMenu}
              resizeMode="contain"
              style={{
                width: 25,
                height:25,
              }} 
              />
            </TouchableOpacity>
          )
        }}
        />
        <Stack.Screen
        name="Home"
        component={Tabs}
        >

        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => {
  return <App />;  
};
