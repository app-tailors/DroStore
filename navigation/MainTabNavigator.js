import React from "react";
import { Platform } from "react-native";
import { Icon } from "expo";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createDrawerNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import ArticlesScreen from "../screens/ArticlesScreen";
import SettingsScreen from "../screens/SettingsScreen";
import CalendarScreen from "../screens/CalendarScreen";
import Colors from "../constants/Colors";
import DrawerNavigation from "../components/DrawerNavigation";
import CreditScreen from "../screens/CreditScreen";
import AccountScreen from "../screens/AccountScreen";

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
    <Icon.Feather name="bar-chart-2" size={24} color={tintColor} />
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

const CreditStack = createStackNavigator({
  Credit: CreditScreen
});
const AccountStack = createStackNavigator({
  Account: AccountScreen
});

const tabApp = createBottomTabNavigator(
  {
    CalendarStack,
    HomeStack,
    ArticlesStack
  },
  {
    initialRouteName: "HomeStack",
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

export default createDrawerNavigator(
  {
    Home: tabApp,
    Settings: SettingsStack,
    Credits: CreditStack,
    Account: AccountStack
  },
  {
    drawerWidth: 320,
    contentComponent: () => <DrawerNavigation />
  }
);
