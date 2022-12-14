import * as React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./screens/Home";
import BillList from "./screens/BillList";
import Statistic from "./screens/Statistic";
import Bill from "./screens/Bill";
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
    <Stack.Navigator initialRouteName="BillList">
      <Stack.Screen
        name="BillList"
        component={BillList}
        options={{
          headerTintColor: "white",
          title: "Danh sách hóa đơn",
          headerStyle: {
            backgroundColor: "#5265FF",
            // justifyContent: 'center',
            // alignItems: 'center',
            // textAlign: 'center'
          },
          headerTitleAlign: "center",
        }}
      />
      {/* <Stack.Screen name="Scanner" component={Scanner} /> */}
      <Stack.Screen
        name="Bill"
        component={Bill}
        options={{
          headerTintColor: "white",
          title: "Chi tiết hóa đơn",
          headerStyle: {
            backgroundColor: "#5265FF",
            // justifyContent: 'center',
            // alignItems: 'center',
            // textAlign: 'center'
          },
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="Statistic"
        component={Statistic}
        options={{
          headerTintColor: "white",
          title: "Quản lý nhà trọ",
          headerStyle: {
            backgroundColor: "#5265FF",
            // justifyContent: 'center',
            // alignItems: 'center',
            // textAlign: 'center'
          },
          headerTitleAlign: "center",
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
