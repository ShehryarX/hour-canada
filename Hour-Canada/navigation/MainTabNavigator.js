import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Leaderboard from '../screens/Leaderboard';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={`ios-home${focused ? '' : '-outline'}`}
    />
  ),
  tabBarOptions: { activeTintColor:'red', tintColor: 'red', inactiveTintColor: 'red'}
};

const LinksStack = createStackNavigator({
  Links: Leaderboard,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Leaderboard',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={`ios-trophy${focused ? '' : '-outline'}`}
    />
  ),
  tabBarOptions: { activeTintColor:'red', tintColor: 'red', inactiveTintColor: 'red'}
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={`ios-person${focused ? '' : '-outline'}`}
    />
  ),
  tabBarOptions: { activeTintColor:'red', tintColor: 'red', inactiveTintColor: 'red'}
};

export default createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
});
