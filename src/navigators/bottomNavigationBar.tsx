import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, TouchableOpacity} from 'react-native';
import HomeScreen from '../screens/home';
import {HOME_SCREEN_NAME} from '../screens/home/constants';

const Tab = createBottomTabNavigator();

export const BottomNavigationBar = () => {
  function MyTabItem({state, discriptors, navigation}) {
    return (
      <TouchableOpacity onPress={() => {}}>
        <Text>Home</Text>
      </TouchableOpacity>
    );
  }
  return (
    <Tab.Navigator
      initialRouteName={HOME_SCREEN_NAME}
      tabBar={props => <MyTabItem {...props} />}>
      <Tab.Screen name={HOME_SCREEN_NAME} component={HomeScreen} />
      <Tab.Screen name="Screen A" component={HomeScreen} />
      <Tab.Screen name="Screen B" component={HomeScreen} />
    </Tab.Navigator>
  );
};
