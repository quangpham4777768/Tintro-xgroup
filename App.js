import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Location from "./screens/Location";
import Info from "./screens/Info";
import UploadImage from "./screens/UploadImage";
import Accept from "./screens/Accept";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Location">
        <Stack.Screen name="Location" component={Location}/>
        <Stack.Screen name="Info" component={Info}/>
        <Stack.Screen name="UploadImage" component={UploadImage}/>
        <Stack.Screen name="Accept" component={Accept}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}