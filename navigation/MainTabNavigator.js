import React from "react";
import { Platform } from "react-native";
import { Icon } from "expo";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import ArticlesScreen from "../screens/ArticlesScreen";
import SettingsScreen from "../screens/SettingsScreen";
import CalendarScreen from "../screens/CalendarScreen";
import Colors from "../constants/Colors";

const CalendarStack = createStackNavigator(
  {
    Calendar: CalendarScreen
  },
  { headerMode: "screen" }
);

CalendarStack.navigationOptions = {
  tabBarIcon: ({ focused, tintColor }) => (
    <Icon.Feather name="calendar" size={24} color={tintColor} />
  )
};

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen
  },
  { headerMode: "screen" }
);

HomeStack.navigationOptions = {
  tabBarIcon: ({ focused, tintColor }) => (
    <Icon.Feather name="home" size={24} color={tintColor} />
  )
};

const ArticlesStack = createStackNavigator({
  Links: ArticlesScreen
});

ArticlesStack.navigationOptions = {
  tabBarIcon: ({ focused, tintColor }) => (
    <Icon.Feather name="package" size={24} color={tintColor} />
  )
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen
});

SettingsStack.navigationOptions = {
  tabBarLabel: "Settings",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-options" : "md-options"}
    />
  )
};

export default createBottomTabNavigator(
  {
    CalendarStack,
    HomeStack,
    ArticlesStack
  },
  {
    initialRouteName: "CalendarStack",
    tabBarOptions: {
      showLabel: false,
      inactiveTintColor: Colors.fade,
      activeTintColor: Colors.primary,
      style: {
        backgroundColor: "white",
        borderTopWidth: 0
      }
    }
  }
);
