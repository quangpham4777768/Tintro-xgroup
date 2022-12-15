import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './screens/Login';
import Scanner from './screens/Scanner';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const Stack = createNativeStackNavigator();

function  App(){
  return(
    <Stack.Navigator screenOptions={{headerShown : false}} >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Scanner" component={Scanner} />
    </Stack.Navigator>
  )
}


export default () => {
  return (
    <NavigationContainer>
          <App/>
    </NavigationContainer>
  );
} 