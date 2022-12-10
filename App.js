import * as React from 'react';
import { Text, View, TouchableOpacity,StyleSheet  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Animated from 'react-native-reanimated';

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
  );
}

function HomeScreen() {
  return (
      <Tab2.Navigator tabBar={(props) => <MyServiceBar {...props} />}>
        <Tab2.Screen name="Hóa đơn" component={SettingsScreen} />
        <Tab2.Screen name="Đăng ký dịch vụ" component={SettingsScreen} />
      </Tab2.Navigator>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  top: {
    flexDirection: 'row',
    marginTop: 30, 
    backgroundColor: '#E9ECFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    height: '6%',
    width: "80%",
    left:"5%"
  }
});


const Tab = createMaterialTopTabNavigator();
const Tab2 = createMaterialTopTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
    <NavigationContainer>
      <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
        <Tab.Screen name="Thống kê" component={HomeScreen} />
        <Tab.Screen name="Quản lý" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  );
}

