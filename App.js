import * as React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./screens/Home";
import Scanner from "./screens/Scanner";
import Bill  from "./screens/Bill"
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

const Stack = createNativeStackNavigator();
const MyTheme = {
  colors: {
    primary: "rgb(82, 101, 255)",
    backgroundColor: "rgb(82, 101, 255)",
  },
};

function App() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} options={{
          headerTintColor: "white",
          headerStyle: { 
            backgroundColor: "#5265FF", 
            title: "Danh sách hóa đơn"
            // justifyContent: 'center',
            // alignItems: 'center',
            // textAlign: 'center'
          },
          headerTitleAlign: 'center'
        }} />
      {/* <Stack.Screen name="Scanner" component={Scanner} /> */}
      <Stack.Screen
        name="Bill"
        component={Bill}
        options={{
          headerTintColor: "white",
          headerStyle: { 
            backgroundColor: "#5265FF", 
            title: "Chi tiết hóa đơn"
            // justifyContent: 'center',
            // alignItems: 'center',
            // textAlign: 'center'
          },
          headerTitleAlign: 'center'
        }}
      />
    </Stack.Navigator>
  );
}

export default () => {
  return (
    <NavigationContainer barStyle={{ backgroundColor: "#694fad" }}>
      <App />
    </NavigationContainer>
  );
};
