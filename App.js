import * as React from 'react';
import { Text, View, TouchableOpacity,StyleSheet,Animated  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Location from "./screens/Location";
import Info from "./screens/Info";
import UploadImage from "./screens/UploadImage";
import Accept from "./screens/Accept";

import LoginScreen from './screens/Login';
import RegisterScreen from './screens/Register';
import DoneScreen from './screens/DoneCreated';
import InfoScreen from './screens/InfoCreated';
import PassScreen from './screens/PasssCreated';
import Payment from './screens/Payment';
import Service from './screens/Service';

function MyTabBar({ state, descriptors, navigation, position }) {
  return (
    <SafeAreaView style={{ flexDirection: 'row',top:'0%', backgroundColor: 'blue' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Animated.Text
              style={{
                color: isFocused ? 'white' : 'grey',
                marginVertical: 10,
              }}>
              {label}
            </Animated.Text>
            <View
              style={{
                width: '80%',
                backgroundColor: isFocused ? 'white' : 'transparent',
                height: 5,
                marginTop: 'auto',
              }}></View>
          </TouchableOpacity>
        );
      })}
    </SafeAreaView>
  );
}

function MyServiceBar({ state, descriptors, navigation, position }) {
  return (
    <View style={styles.top1}>
    <View style={styles.top}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate('Qu???n l??', { screen: route.name });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Animated.Text
              style={{
                color: isFocused ? 'white' : 'black',
                textAlign:'center',
                width:'80%',
                height:'80%',
                paddingTop: '5%',
                backgroundColor:!isFocused?"#E9ECFF":'blue',
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
              }}>
              {label}
            </Animated.Text>
          </TouchableOpacity>
        );
      })}
    </View>
    </View>
  );
}

function Home() {
  return (
      <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
        <Tab.Screen name="Qu???n l??" component={HomeScreen} />
        {/* <Tab.Screen name="Th???ng k??" component={SettingsScreen} /> */}
      </Tab.Navigator>
  );
}

function HomeScreen() {
  return (
      <Tab2.Navigator tabBar={(props) => <MyServiceBar {...props} />}>
        {/* <Tab2.Screen name="H??a ????n" component={SettingsScreen} /> */}
        <Tab2.Screen name="????ng k?? d???ch v???" component={Service} />
      </Tab2.Navigator>
  );
}

// function SettingsScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Settings!</Text>
//     </View>
//   );
// }

const styles = StyleSheet.create({
  top1: {
    backgroundColor:'white',
    marginBottom:"-40%"
  },
  top: {
    flexDirection: 'row',
    marginTop: 30, 
    backgroundColor: '#E9ECFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    height: '23%',
    width: "80%",
    left:"20%",
  }
});

const Tab = createMaterialTopTabNavigator();
const Tab2 = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" >
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{headerShown: false}}/>
        <Stack.Screen name="PassCreated" component={PassScreen} options={{headerShown: false}}/>
        <Stack.Screen name="InfoCreated" component={InfoScreen} options={{headerShown: false}}/>
        <Stack.Screen name="DoneCreated" component={DoneScreen} options={{headerShown: false}}/>
        <Stack.Screen name="HomePay" component={Home} options={{headerShown: false}} />
        <Stack.Screen name="Payment" component={Payment} options={{headerShown: false}}/>

        <Stack.Screen name="Location" component={Location} options={{headerShown: false}}/>
        <Stack.Screen name="Info" component={Info} options={{headerShown: false}}/>
        <Stack.Screen name="UploadImage" component={UploadImage} options={{headerShown: false}}/>
        <Stack.Screen name="Accept" component={Accept} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}