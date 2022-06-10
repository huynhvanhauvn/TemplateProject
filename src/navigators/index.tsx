import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../screens/home';
import {HOME_SCREEN_NAME} from '../screens/home/constants';
import {View} from 'react-native';

export const navigationRef: React.RefObject<NavigationContainerRef<any>> =
  React.createRef();

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator initialRouteName={HOME_SCREEN_NAME}>
      <Stack.Screen
        name={HOME_SCREEN_NAME}
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function AppNavigator() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Tab.Navigator
        initialRouteName="HomeStack"
        screenOptions={{
          activeTintColor: '#42f44b',
        }}>
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            tabBarLabel: 'Home',
            // tabBarIcon: ({color, size}) => (
            //   <View style={{size: size, color: color}} />
            // ),
          }}
        />
        <Tab.Screen
          name="AStack"
          component={HomeStack}
          options={{
            tabBarLabel: 'A',
            // tabBarIcon: ({color, size}) => (
            //   <View style={{size: size, color: color}} />
            // ),
          }}
        />
        <Tab.Screen
          name="BStack"
          component={HomeStack}
          options={{
            tabBarLabel: 'B',
            // tabBarIcon: ({color, size}) => (
            //   <View style={{size: size, color: color}} />
            // ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default AppNavigator;
