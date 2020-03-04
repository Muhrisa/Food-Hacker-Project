import * as React from 'react';
import {NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';

import Home from '../screens/Home';
import Login from '../screens/Login';
import EmailInput from '../screens/EmailInput';
import PasswordInput from '../screens/PasswordInput';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Welcome',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-home" />,
        }}
      />
      <BottomTab.Screen
        name="Get Started"
        component={EmailInput}
        options={{
          title: 'Register',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-book" />,
        }}
      />
      <BottomTab.Screen
        name="Login"
        component={Login}
        options={{
          title: 'Login',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-lock" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'Home';
    case 'Register':
      return 'Register';
    case 'Login':
      return 'Login';
  }
}
