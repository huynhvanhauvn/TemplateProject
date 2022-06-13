import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import HomeScreen from '../screens/home';
import {HOME_SCREEN_NAME} from '../screens/home/constants';
import {View} from 'react-native';
import {useTranslation} from 'react-i18next';
import { Tr } from 'shared/language';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { ChangLanguage } from 'rootRedux/actions';
import { RootState } from 'rootRedux/store/rootReducer';

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
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state);

  useEffect(() => {
    dispatch(ChangLanguage.get(state.RootReducer.language));
  }, []);

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
            tabBarLabel: Tr('common:home'),
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
