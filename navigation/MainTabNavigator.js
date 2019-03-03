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
import NotificationsScreen from "../screens/NotificationScreen";
import AddCategoryScreen from "../screens/AddCategory";

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

const tabApp = createBottomTabNavigator(
  {
    CalendarStack,
    HomeStack,
    ArticlesStack
  },
  {
    initialRouteName: "ArticlesStack",
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

tabApp.navigationOptions = {
  header: null,
  headerBackTitle: null
};

const stackApp = createStackNavigator(
  {
    tabApp,
    Account: AccountScreen,
    AddCategory: AddCategoryScreen,
    Notifications: NotificationsScreen
  },
  {
    headerMode: "screen"
  }
);

export default createDrawerNavigator(
  {
    Home: stackApp,
    Settings: SettingsStack,
    Credits: CreditStack
  },
  {
    drawerWidth: 320,
    contentComponent: () => <DrawerNavigation />
  }
);
