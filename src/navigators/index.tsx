import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import HomeScreen from '../screens/home';
import {HOME_SCREEN_NAME} from '../screens/home/constants';
import {Tr} from 'shared/language';
import {useDispatch, useSelector} from 'react-redux';
import {ChangLanguage} from 'rootRedux/actions';
import {RootState} from 'rootRedux/store/rootReducer';
// import Icon from 'react-native-vector-icons/AntDesign';
import {CATEGORY_SCREEN_NAME} from 'screens/category/constants';
import CategoryScreen from 'screens/category';
import {SETTING_SCREEN_NAME} from 'screens/setting/constants';
import SettingScreen from 'screens/setting';

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

function CategoryStack() {
  return (
    <Stack.Navigator initialRouteName={CATEGORY_SCREEN_NAME}>
      <Stack.Screen
        name={CATEGORY_SCREEN_NAME}
        component={CategoryScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function SettingStack() {
  return (
    <Stack.Navigator initialRouteName={SETTING_SCREEN_NAME}>
      <Stack.Screen
        name={SETTING_SCREEN_NAME}
        component={SettingScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function AppNavigator() {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state);
  // Icon.loadFont();

  useEffect(() => {
    dispatch(ChangLanguage.get(state.RootReducer.language));
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      <Tab.Navigator
        initialRouteName={Tr('common:home')}
        screenOptions={{
          activeTintColor: '#42f44b',
        }}>
        <Tab.Screen
          name={Tr('common:home')}
          component={HomeStack}
          options={{
            tabBarLabel: Tr('common:home'),
            // tabBarIcon: ({color, size}) => (
            //   <Icon name='home' size={size} color={color} />
            // ),
          }}
        />
        <Tab.Screen
          name={Tr('common:category')}
          component={CategoryStack}
          options={{
            tabBarLabel: Tr('common:category'),
            // tabBarIcon: ({color, size}) => (
            //   <Icon name='appstore-o' size={size} color={color} />
            // ),
          }}
        />
        <Tab.Screen
          name={Tr('common:setting')}
          component={SettingStack}
          options={{
            tabBarLabel: Tr('common:setting'),
            // tabBarIcon: ({color, size}) => (
            //   <Icon name='setting' size={size} color={color} />
            // ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default AppNavigator;
